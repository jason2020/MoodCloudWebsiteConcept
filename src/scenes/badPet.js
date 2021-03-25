import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import {Thumbnail, Button} from 'native-base';

const BadPet = () => {
    const [offset, setOffset] = React.useState(0);

    const feedCat = () => {
        let sign = -1;
        const timerId = setInterval(() => {
            sign *= -1;
            setOffset(5 * sign);
        }, 100);
        setTimeout(() => { clearInterval(timerId); setOffset(0);}, 1000);
    }
    return (
        <SafeAreaView>
            <Text>Pet Demo</Text>
            <Thumbnail style={{transform: [{ rotate: `${offset}deg`}], "marginTop": `${offset}%`, "alignSelf":"center", "width":"100%", "height":"80%"}} square source={{ uri:'https://img.favpng.com/11/3/4/cat-pixel-art-pusheen-png-favpng-NiGKjk3kJ7cfbSJeYVNfeaF4j.jpg' }} />
            <Text></Text>
            <Button onPress={feedCat} style={{"alignSelf":"center", "padding": "3%"}}><Text>Feed Me!</Text></Button>
        </SafeAreaView>
    );
};

export default BadPet;