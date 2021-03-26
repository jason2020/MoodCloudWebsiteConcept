import React from "react";
import { Footer, FooterTab, Icon, Button } from 'native-base';
const Nav = () => {
    return (
        <Footer>
            <FooterTab>
                <Button>
                <Icon name="apps" />
                </Button>
                <Button>
                <Icon name="camera" />
                </Button>
                <Button active>
                <Icon active name="navigate" />
                </Button>
                <Button>
                <Icon name="person" />
                </Button>
            </FooterTab>
        </Footer>
    );
}
export default Nav;
