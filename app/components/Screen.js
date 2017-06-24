import React, { Component } from 'react';
import { AppRegistry, asset, Pano, Text, View, Plane } from 'react-vr';


export default class Screen extends Component {
    render() {
        return (
            <View>
                <Plane 
                dimWidth={10}
                dimHeight={5}
                style = {{
                    transform: [{translate: [0, 0, -7]}]
                }}
                />
            </View>
        )
    }
}