import React, { Component } from 'react';
import { Content, List, ListItem } from 'native-base';
import { Text } from 'react-native';

const data = {
    title: 'All',
    content: [{
            title: 'While My Guitar Gently Weeps',
            artist: 'The Beatles',
            lyrics: 'I look at you all, see the love there tha\'s sleeping \n While my guitar gently weeps'
        }, {
            title: '',
            artist: 'The Beatles',
            lyrics: 'I look at you all, see the love there tha\'s sleeping \n While my guitar gently weeps'
        }
    ]
}

export default class Overview extends Component {
    render() {
        return(
            <Content padder>
                <List>
                    <ListItem itemHeader first>
                        <Text>All</Text>
                    </ListItem>
                    <ListItem>
                        <Text>{data.content[0].title}</Text>
                    </ListItem>
                </List>
            </Content>
        )
    }
}