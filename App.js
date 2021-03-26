import React, { Component } from "react";
import { StyleSheet, View, Dimensions } from "react-native";
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from "react-native-chart-kit";
import {
  Container,
  Header,
  Card,
  Text,
  Content,
  CardItem,
  Body,
  Right,
  Button,
  Icon
} from "native-base";
import HomeScreen from "./src/scenes/home";
import AboutScreen from "./src/scenes/about";
import BadPet from "./src/scenes/badPet";
import Nav from "./src/components/nav";
import GoalTree from "./src/components/goalTree";
import AppLoading from 'expo-app-loading';
import { useFonts } from '@expo-google-fonts/inter';
import { greaterThan } from "react-native-reanimated";

const App = () => {
  let [fontsLoaded] = useFonts({
    'quicksand': require('./src/Quicksand-VariableFont_wght.ttf'),
  });

  // each value represents a goal ring in Progress chart
  const commitsData = [
    { date: "2017-01-02", count: 1 },
    { date: "2017-01-03", count: 2 },
    { date: "2017-01-04", count: 3 },
    { date: "2017-01-05", count: 4 },
    { date: "2017-01-06", count: 5 },
    { date: "2017-01-30", count: 2 },
    { date: "2017-01-31", count: 3 },
    { date: "2017-03-01", count: 2 },
    { date: "2017-04-02", count: 4 },
    { date: "2017-03-05", count: 2 },
    { date: "2017-02-30", count: 4 }
  ];

  const chartConfig = {
    backgroundGradientFrom: "#3ec300",
    backgroundGradientFromOpacity: 1.0,
    backgroundGradientTo: "#3ec300",
    backgroundGradientToOpacity: 1.0,
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    labelColor: () => `rgba(255, 255, 255, 1)`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false, // optional
  };

  const [isPress1, setIsPress1 ] = React.useState(false);
  const [isPress2, setIsPress2 ] = React.useState(false);
  const [isPress3, setIsPress3 ] = React.useState(false);
  const [isPress4, setIsPress4 ] = React.useState(false);
  const [isPress5, setIsPress5 ] = React.useState(false);
  



  if (!fontsLoaded) {
    return <AppLoading />;
  } else {

    return (
      <Container>
        <Header>
          <Body>
            <Text style={{ alignSelf: "center", alignItems: "center", fontSize: 28, fontFamily: 'quicksand' }}>MoodCloud</Text>
          </Body>
          <Right>
            <Button transparent>
              <Icon name='menu' />
            </Button>
          </Right>
        </Header>
        <Content>
          <Card>
            <CardItem>
              <Body>
                <Text style={styles.cardTitle}>Check In</Text>
              </Body>
            </CardItem>
            <CardItem style={styles.buttonList}>
              <Button style={isPress1 ? styles.buttonItem : styles.pressedButton} onPress={() => setIsPress1(!isPress1)}>
                <Text>1</Text>
              </Button>
              <Button style={isPress2 ? styles.buttonItem : styles.pressedButton} onPress={() => setIsPress2(!isPress2)}>
                <Text>2</Text>
              </Button>
              <Button style={isPress3 ? styles.buttonItem : styles.pressedButton} onPress={() => setIsPress3(!isPress3)}>
                <Text>3</Text>
              </Button>
              <Button style={isPress4 ? styles.buttonItem : styles.pressedButton} onPress={() => setIsPress4(!isPress4)}>
                <Text>4</Text>
              </Button>
              <Button style={isPress5 ? styles.buttonItem : styles.pressedButton} onPress={() => setIsPress5(!isPress5)}>
                <Text>5</Text>
              </Button>
            </CardItem>

            <CardItem style={styles.progressCheck}>
              <Body>
                <GoalTree></GoalTree>
              </Body>
            </CardItem>
          </Card>
          <Card>
            <CardItem>
              <Body>
                <Text style={styles.cardTitle}>History</Text>
                <View style={styles.chartContainer}>
                  <Text>Mood</Text>
                  <LineChart
                    data={{
                      labels: [
                        "January",
                        "February",
                        "March",
                        "April",
                        "May",
                        "June",
                      ],
                      datasets: [
                        {
                          data: [
                            Math.random() * 100,
                            Math.random() * 100,
                            Math.random() * 100,
                            Math.random() * 100,
                            Math.random() * 100,
                            Math.random() * 100,
                          ],
                        },
                      ],
                    }}
                    width={Dimensions.get("window").width - 50} // from react-native
                    height={220}
                    yAxisLabel="$"
                    yAxisSuffix="k"
                    yAxisInterval={1} // optional, defaults to 1
                    chartConfig={{
                      backgroundColor: "#e26a00",
                      backgroundGradientFrom: "#fb8c00",
                      backgroundGradientTo: "#ffa726",
                      decimalPlaces: 2, // optional, defaults to 2dp
                      color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                      labelColor: (opacity = 1) =>
                        `rgba(255, 255, 255, ${opacity})`,
                      style: {
                        borderRadius: 16,
                      },
                      propsForDots: {
                        r: "6",
                        strokeWidth: "2",
                        stroke: "#ffa726",
                      },
                    }}
                    bezier
                    style={{
                      marginVertical: 8,
                      borderRadius: 16,
                    }}
                  />
                </View>
                <View style={styles.chartContainer}>
                  <ContributionGraph
                    values={commitsData}
                    endDate={new Date("2017-04-01")}
                    numDays={105}
                    width={Dimensions.get("window").width - 50}
                    height={220}
                    chartConfig={chartConfig}
                    style={{
                      marginVertical: 8,
                      borderRadius: 16,
                    }}
                  />
                </View>
              </Body>
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
    alignSelf: "center",
  },

  buttonItem: {
    marginLeft: 10,
    marginRight: 10,
  },

  pressedButton:   {
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: "green"
  },

  chartContainer: {
    marginTop: '2%',
    alignSelf: 'center',
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

export default App