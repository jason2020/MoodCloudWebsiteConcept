import React, { Component, useState } from "react";
import { StyleSheet, View, TouchableOpacity} from "react-native";
import {
  Container,
  Header,
  Form,
  Card,
  Text,
  Content,
  CardItem,
  Body,
  Picker,
  Icon,
  ListItem,
  Left,
  Right,
  Radio,
  Button
} from "native-base";
import HomeScreen from "./src/scenes/home";
import AboutScreen from "./src/scenes/about";
import BadPet from "./src/scenes/badPet";
import Nav from "./src/components/nav";

export default class TabsAdvancedExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: "key2",
    };
  }
  onValueChange(value) {
    this.setState({
      selected: value,
    });
  }

  render() {
    return (
      <Container>
        <Header>
          <Text>MoodCloud</Text>
        </Header>
        <Content>
          <Card>
            <CardItem>
              <Body>
                <Text style={styles.cardTitle}>New Log</Text>
              </Body>
            </CardItem>
            
            <CardItem style={styles.buttonList}>
              <Button style={styles.buttonItem}>
                <Text>1</Text>
              </Button>
              <Button style={styles.buttonItem}>
                <Text>2</Text>
              </Button>
              <Button style={styles.buttonItem}>
                <Text>3</Text>
              </Button>
              <Button style={styles.buttonItem}>
                <Text>4</Text>
              </Button >
              <Button style={styles.buttonItem}>
                <Text>5</Text>
              </Button>
            </CardItem>
            <CardItem>
              {/* Checklist */}
            </CardItem>
          </Card>
          <Card>
            <CardItem>
              <Body>
                <Text style={styles.cardTitle}>History/Data</Text>
              </Body>
              {/* Data stuffs todo much later */}
            </CardItem>
          </Card>
        </Content>
        <Nav></Nav>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  cardTitle: {
    fontSize: 24,
  },

  buttonList: {
    alignSelf: 'center',
  },

  buttonItem: {
    marginLeft: 2,
    marginRight: 2,
  }

  



});

{
  /* <Tabs>
  <Tab heading={ <TabHeading><Icon name="home" /><Text>Home</Text></TabHeading>}>
    <HomeScreen/>
  </Tab>
  <Tab heading={ <TabHeading><Text>About</Text></TabHeading>}>
    <AboutScreen/>
  </Tab>
  <Tab heading={ <TabHeading><Icon name="apps" /></TabHeading>}>
    <BadPet/>
  </Tab>
</Tabs> */
}
