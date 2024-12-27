import React from 'react';
import {Text, View, Image} from 'react-native';
import {sharedStyles} from '../sharedStyles';

export const Footer = () => {
  const img = require('../images/G.png');

  return (
    <View style={sharedStyles.footerContainer}>
      <Image style={sharedStyles.footerImage} source={img} />
      <Text style={sharedStyles.sectionDescription}>
        {' '}
        All rights reserved by Globomantics Tech Conference 2020.
      </Text>
    </View>
  );
};
