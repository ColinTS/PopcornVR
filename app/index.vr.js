import React, { Component } from 'react';
import { AppRegistry, asset, Pano, Text, View } from 'react-vr';
import Screen from './components/Screen.js'
import api_key from './keys/keys.js'

export default class Theater extends Component {
  componentDidMount(){
    fetch('https://api.vimeo.com/channels/staffpicks/videos', {
      method: 'GET',
      headers: {
        'Host': 'api.vimeo.com',
        'Content-Type': 'application/vnd.vimeo.video+json',
        'Authorization': `bearer ${api_key}`
      }
    })
    .then(response => response.json())
    .then(json => console.log('json', json))
  }

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