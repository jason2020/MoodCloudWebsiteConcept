import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import {Thumbnail} from 'native-base';

const BadPet = () => {
    return (
        <SafeAreaView>
            <Text>This is a bad pet demo</Text>
            <Thumbnail style={{"alignSelf":"center", "width":"80%", "height":"80%"}} square source={{ uri:'https://img.favpng.com/11/3/4/cat-pixel-art-pusheen-png-favpng-NiGKjk3kJ7cfbSJeYVNfeaF4j.jpg' }} />
            <Text></Text>
        </SafeAreaView>
    );
};

export default BadPet;