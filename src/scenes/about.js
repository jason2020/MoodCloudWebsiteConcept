import React from 'react';
import {SafeAreaView, Text, TouchableHighlight} from 'react-native';

const AboutScreen = ({navigation}) => (
  <SafeAreaView>
    <Text>This is the about page. Blah Blah blah</Text>

    <TouchableHighlight onPress={() => navigation.navigate('Home')}>
      <Text>Go to home</Text>
    </TouchableHighlight>
  </SafeAreaView>
);

export default AboutScreen;