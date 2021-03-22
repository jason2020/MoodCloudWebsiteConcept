import React from 'react';
import {View, Text, TouchableHighlight, Linking} from 'react-native';

const NavBar = ({navigation}) => (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <TouchableHighlight onPress={() => navigation.navigate('Home')}>
            <Text>Home</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => navigation.navigate('About')}>
            <Text>About</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => navigation.navigate('Contact')}>
            <Text>Contact Us</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => Linking.openURL('https://drive.google.com/file/d/18485AFKhEkovbexJfOFjb26AHKhTU8AU/view')}>
            <Text>NVC Paper</Text>
        </TouchableHighlight>
    </View>
);

export default NavBar;