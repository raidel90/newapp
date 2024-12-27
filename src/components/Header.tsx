import React, { PropsWithChildren } from 'react';
import {Text, View, Image, StyleProp, TextStyle, ImageSourcePropType} from 'react-native';
import {sharedStyles} from '../sharedStyles';

type HeaderProps = PropsWithChildren<{
  heading?: string;
  image?: ImageSourcePropType;
  style: StyleProp<TextStyle>;
}>;

export const Header = (props: HeaderProps) => {
  return (
    <View style={sharedStyles.sectionContainer}>
      <Image style={sharedStyles.headerImage} source={props.image} />
      <Text style={props.style}>{props.heading}</Text>
    </View>
  );
};
