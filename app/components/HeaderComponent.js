import React from 'react';
import { StyleSheet } from 'react-native';
import { Container, Header, Left, Body, Title, Button, Icon, Right } from 'native-base';

export default class HeaderComponent extends React.Component {
    render() {
        return(
            <Container>
                <Header style={{height: 70, paddingTop: 20}}>
 
                    <Left>
                        <Button transparent>
                            <Icon name='menu' />
                        </Button>
                    </Left>
                    <Body>
                        <Title>{this.props.title}</Title>
                    </Body>
                    <Right />
                </Header>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
});