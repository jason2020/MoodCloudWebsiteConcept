import React from "react";
import { Footer, FooterTab, Icon, Button } from 'native-base';
const Nav = () => {
    return (
        <Footer>
            <FooterTab>
                <Button active>
                    <Icon active name="home" />
                </Button>
                <Button>
                    <Icon name="podium-outline" /> 
                </Button>
                <Button>
                    <Icon name="chatbubble-ellipses-outline"/> 
                </Button>
                <Button>
                    <Icon name="apps" />
                </Button>
                <Button>
                    <Icon name="person" />
                </Button>
            </FooterTab>
        </Footer>
    );
}
export default Nav;
