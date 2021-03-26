import React from "react";
import { Footer, FooterTab, Icon, Button } from 'native-base';
import { useNavigation } from '@react-navigation/native';

const Nav = () => {
    const navigation = useNavigation();
    return (
        <Footer>
            <FooterTab>
                <Button active onPress={() => navigation.navigate("Home")}>
                    <Icon active name="home" />
                </Button>
                <Button onPress={() => navigation.navigate("Data")}>
                    <Icon name="podium-outline" /> 
                </Button>
                <Button onPress={() => navigation.navigate("Community")}>
                    <Icon name="chatbubble-ellipses-outline"/> 
                </Button>
                <Button onPress={() => navigation.navigate("Apps")}>
                    <Icon name="apps" />
                </Button>
                <Button onPress={() => navigation.navigate("Account")}>
                    <Icon name="person" />
                </Button>
            </FooterTab>
        </Footer>
    );
}
export default Nav;
