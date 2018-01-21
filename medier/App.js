import React, { Component } from 'react';
import { Image, StyleSheet } from 'react-native';

export default class App extends Component {
  render() {
    return (
      <Image source={{uri: 'http://i.imgur.com/IGlBYaC.jpg'}} style={s.backgroundImage} />
    );
  }
}

const s = StyleSheet.create({
  backgroundImage: {
      flex: 1,
      width: null,
      height: null,
  }
});
