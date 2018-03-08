import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
} from 'react-vr';

export default class first_app extends React.Component {
  render() {
    return (
      <View>
        <Pano source={asset('montpellier-historical-part-views-streets.png')}/>
        <Text
          style={{
            backgroundColor: '#777879',
            fontSize: 0.8,
            fontWeight: '400',
            layoutOrigin: [0.5, 0.5],
            paddingLeft: 0.2,
            paddingRight: 0.2,
            textAlign: 'center',
            textAlignVertical: 'center',
            transform: [{translate: [0, 0, -3]}],
          }}>
          Ranjith Kumar
        </Text>
      </View>
    );
  }
};

AppRegistry.registerComponent('first_app', () => first_app);
