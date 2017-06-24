import React, { Component } from 'react';
import { AppRegistry, asset, Pano, Text, View } from 'react-vr';
import Screen from './components/Screen.js'

export default class Theater extends Component {
  render() {
    return (
      <View>
        <Pano source={asset('night.jpg')}></Pano>
        <Screen />
      </View>
    )
  }
}

AppRegistry.registerComponent('app', () => Theater);