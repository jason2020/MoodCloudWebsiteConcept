import React from 'react';
import {Form, Item, Input, Label, Text, Button, Card, List, ListItem, Thumbnail, Left, Right, Body} from 'native-base';
import { ScrollView } from 'react-native-gesture-handler';
const axios = require('axios');

const AboutScreen = () => {
  const [name, onChangeName] = React.useState("");
  const [email, onChangeEmail] = React.useState("");
  const [message, onChangeMessage] = React.useState("");
  const submitFormData = () => {
    console.log(name, email, message);
    axios({
      method: 'post',
      url: 'http://192.168.1.15:3000/contact',
      data: {
        "name": name,
        "email": email,
        "message": message
      }
    })
    .then(function (response) {
      console.log("SENT!!");
      console.log(response);
    })
    .catch(function (error) {
      console.log("ERROR!!");
      console.log(error);
    });
  }
  return (
    <ScrollView>
      <Text style={{"fontSize": 30, "color": "lightsalmon"}}>Our Team</Text>
      <List>
        <ListItem thumbnail>
          <Left>
            <Thumbnail square source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Circle_-_black_simple.svg/1200px-Circle_-_black_simple.svg.png' }} />
          </Left>
          <Body>
            <Text>Christine Ly</Text>
            <Text note numberOfLines={1}>Biomedical Engineering, B.S.</Text>
          </Body>
          <Right>
            <Button transparent>
              <Text>View</Text>
            </Button>
          </Right>
        </ListItem>
        <ListItem thumbnail>
          <Left>
            <Thumbnail square source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Circle_-_black_simple.svg/1200px-Circle_-_black_simple.svg.png' }} />
          </Left>
          <Body>
            <Text>Stephen Kakuda</Text>
            <Text note numberOfLines={1}>Computer Science, B.S.</Text>
          </Body>
          <Right>
            <Button transparent>
              <Text>View</Text>
            </Button>
          </Right>
        </ListItem>
        <ListItem thumbnail>
          <Left>
            <Thumbnail square source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Circle_-_black_simple.svg/1200px-Circle_-_black_simple.svg.png' }} />
          </Left>
          <Body>
            <Text>Darian Gunawan</Text>
            <Text note numberOfLines={1}>Business Administration, B.A.</Text>
          </Body>
          <Right>
            <Button transparent>
              <Text>View</Text>
            </Button>
          </Right>
        </ListItem>
        <ListItem thumbnail>
          <Left>
            <Thumbnail square source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Circle_-_black_simple.svg/1200px-Circle_-_black_simple.svg.png' }} />
          </Left>
          <Body>
            <Text>Jimmy Nguyen</Text>
            <Text note numberOfLines={1}>Business Economics, B.A.</Text>
          </Body>
          <Right>
            <Button transparent>
              <Text>View</Text>
            </Button>
          </Right>
        </ListItem>
        <ListItem thumbnail>
          <Left>
            <Thumbnail square source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Circle_-_black_simple.svg/1200px-Circle_-_black_simple.svg.png' }} />
          </Left>
          <Body>
            <Text>Jennifer Cheong</Text>
            <Text note numberOfLines={1}>Journalism, B.A.</Text>
          </Body>
          <Right>
            <Button transparent>
              <Text>View</Text>
            </Button>
          </Right>
        </ListItem>
      </List>
      <Text style={{"marginTop":"5%", "fontSize": 30, "color": "lightskyblue"}}>Contact Form</Text>
      <Form>
            <Item floatingLabel>
              <Label>Name</Label>
              <Input onChangeText={onChangeName} value={name}/>
            </Item>
            <Item floatingLabel last>
              <Label>Email</Label>
              <Input keyboardType="email-address" onChangeText={onChangeEmail} value={email}/>
            </Item>
            <Item floatingLabel last>
              <Label>Message</Label>
              <Input onChangeText={onChangeMessage} value={message}/>
            </Item>
          </Form>
      <Button onPress={submitFormData} style={{"marginTop": "10%", "alignSelf": "center", "marginBottom":"70%"}}>
      <Text>Submit</Text>
      </Button>
    </ScrollView>
  );
};

export default AboutScreen;