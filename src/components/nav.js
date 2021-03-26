import React from "react";
import { Footer, FooterTab, Icon, Button } from 'native-base';
import { useNavigation } from '@react-navigation/native';

const Nav = () => {
    const navigation = useNavigation();
    const [activeButton, setActive] = React.useState(0);
console.log(activeButton);
return (
    <Footer>
        <FooterTab>
            <Button active={activeButton == 0} onPress={() => {
                navigation.navigate("Home");
                setActive(0);
            }}>
                <Icon active name="home" />
            </Button>
            <Button active={activeButton == 1} onPress={() => {
                navigation.navigate("Data");
                setActive(1);
            }}>
                <Icon name="podium-outline" />
            </Button>
            <Button active={activeButton == 2} onPress={() => {
                navigation.navigate("Community");
                setActive(2);
            }}>
                <Icon name="chatbubble-ellipses-outline" />
            </Button>
            <Button active={activeButton == 3} onPress={() => {
                navigation.navigate("Apps");
                setActive(3);
            }}>
                <Icon name="apps" />
            </Button>
            <Button active={activeButton == 4} onPress={() => {
                navigation.navigate("Account");
                setActive(4);
            }}>
                <Icon name="person" />
            </Button>
        </FooterTab>
    </Footer>
);
}
export default Nav;
