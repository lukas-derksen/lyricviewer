import React from 'react';
import Main from './app/components/Main';
import { Font, AppLoading } from 'expo';

export default class App extends React.Component {
  state = {
    fontsLoaded: false,
  }
  async componentWillMount() {
    await Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
    });
    this.setState({fontsLoaded: true})
  }
  render() {
    if (this.state.fontsLoaded) {
      return (
          <Main />
      );
    } else {
      return(
        <AppLoading />
      )
    }
  }
}
