import React from 'react';
import { StyleSheet, View, Dimensions } from "react-native";
import AppLoading from 'expo-app-loading';
import { useFonts } from '@expo-google-fonts/inter';
import Nav from "./../components/nav";
import GoalTree from "./../components/goalTree";
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

const HomeScreen = () => {
  let [fontsLoaded] = useFonts({
    'quicksand': require('./../Quicksand-VariableFont_wght.ttf'),
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

  const [isPressed, setIsPress] = React.useState(-1);



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
              <Button style={isPressed != 0 ? styles.buttonItem : styles.pressedButton} onPress={() => setIsPress(0)}>
                <Text>1</Text>
              </Button>
              <Button style={isPressed != 1 ? styles.buttonItem : styles.pressedButton} onPress={() => setIsPress(1)}>
                <Text>2</Text>
              </Button>
              <Button style={isPressed != 2 ? styles.buttonItem : styles.pressedButton} onPress={() => setIsPress(2)}>
                <Text>3</Text>
              </Button>
              <Button style={isPressed != 3 ? styles.buttonItem : styles.pressedButton} onPress={() => setIsPress(3)}>
                <Text>4</Text>
              </Button>
              <Button style={isPressed != 4 ? styles.buttonItem : styles.pressedButton} onPress={() => setIsPress(4)}>
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
                            34,
                            45,
                            57,
                            78,
                            90,
                            100,
                          ],
                        },
                      ],
                    }}
                    width={Dimensions.get("window").width - 50} // from react-native
                    height={220}
                    yAxisLabel=""
                    yAxisSuffix=""
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
        <Nav/>
      </Container>
    );
  }
};

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

  pressedButton: {
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: "green"
  },

  chartContainer: {
    marginTop: '2%',
    alignSelf: 'center',
  }
});

export default HomeScreen;