import React from 'react';
import { View, Text } from 'react-native';
import Main from './app/components/Main';
import Expo, { Font } from 'expo';
import { Container, Content, Header, ListItem } from 'native-base';

export default class App extends React.Component {
  state = {
    isReady: false,
  }
  async componentWillMount() {
    await Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
    });
    this.setState({isReady: true})
  }
  render() {
    if (this.state.isReady) {
      return (
          <Main />
      );
    } else {
      return <Expo.AppLoading />;
    }
  }
}

