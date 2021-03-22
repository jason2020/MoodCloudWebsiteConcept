import React from 'react';
import {SafeAreaView, Text, TouchableHighlight} from 'react-native';

const HomeScreen = ({navigation}) => (
  <SafeAreaView>
    <Text>This is the homepage. Blah blah blah</Text>

    <TouchableHighlight onPress={() => navigation.navigate('About')}>
      <Text>Go to About</Text>
    </TouchableHighlight>
  </SafeAreaView>
);

export default HomeScreen;