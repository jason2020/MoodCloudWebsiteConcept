import React, { Component } from 'react';
import { Container, Header, Tab, Tabs, TabHeading, Text, DefaultTabBar, Icon} from 'native-base';
import HomeScreen from './src/scenes/home';
import AboutScreen from './src/scenes/about';
import BadPet from './src/scenes/badPet';
export default class TabsAdvancedExample extends Component {
  render() {
    return (
      <Container>
        <Header hasTabs/>
        <Tabs>
          <Tab heading={ <TabHeading><Icon name="home" /><Text>Home</Text></TabHeading>}>
            <HomeScreen/>
          </Tab>
          <Tab heading={ <TabHeading><Text>About</Text></TabHeading>}>
            <AboutScreen/>
          </Tab>
          <Tab heading={ <TabHeading><Icon name="apps" /></TabHeading>}>
            <BadPet/>
          </Tab>
        </Tabs>
      </Container>
    );
  }
}