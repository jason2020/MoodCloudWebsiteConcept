import React from 'react';
import Nav from "./../components/nav";
import {
    Container,
    Header,
    Card,
    Text,
    Content,
    CardItem,
    Body,
    Right,
    Button,
    Icon
  } from "native-base";

const AccountScreen = () => {

    return (
        <Container>
            <Header><Text>Account Management</Text></Header>
           <Content></Content>
           <Nav></Nav>
        </Container>
    );
}

export default AccountScreen;