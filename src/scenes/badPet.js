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

    const phrases = ["I'm hungry. Feed me", "Hey! I mean meow.", "Woof woof", "Feed me please", "I wonder what you're feeding me with", "I'm bored, feed me. I want to feel something", "Hi friend!", "Woo hoo!", "Meow!", "Haven't seen u in a while!", "Tubular!", "Wowza!", "Fantastic!", "Stop feeding me! I've eaten enough", "Please stop"]
    return (
        <SafeAreaView>
            <Thumbnail style={{transform: [{ rotate: `${offset}deg`}], "marginTop": `${offset}%`, "alignSelf":"center", "width":300, "height":300}} square source={{ uri:'https://img.favpng.com/11/3/4/cat-pixel-art-pusheen-png-favpng-NiGKjk3kJ7cfbSJeYVNfeaF4j.jpg' }} />
            <Button onPress={feedCat} style={{"alignSelf":"center", "padding": "3%"}}><Text>Feed Me!</Text></Button>
            <Text style={{"marginTop": 10, "alignSelf": "center"}}>{phrases[Math.floor(Math.random() * (phrases.length))]}</Text>
        </SafeAreaView>
    );
};

export default BadPet;