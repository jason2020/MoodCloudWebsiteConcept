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

const AppsScreen = () => {

    return (
        <Container>
           <Header><Text>Apps</Text></Header>
           <Content></Content>
           <Nav></Nav>
        </Container>
    );
}

export default AppsScreen;