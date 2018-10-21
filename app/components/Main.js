import React from 'react';
import { StyleSheet } from 'react-native';
import HeaderComponent from './HeaderComponent';
import { Container } from 'native-base';
import Overview from './Overview';

export default class Main extends React.Component {
  render() {
    return (
      <Container>
        <HeaderComponent title='Lyric Viewer' />
        <Overview />
      </Container>
 
    );
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   scrollContainer: {
//     flex: 1,
//   },
// });