import React from 'react';
import {ScrollView, View, Text, Image, Pressable} from 'react-native';
import { sharedStyles } from './sharedStyles.ts';

function Conference({navigation}: any) {
  const img = require('./images/Bitmap.png');

  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={sharedStyles.scrollView}>
      <Image
        style={sharedStyles.storyImage}
        source={img}
      />
      <View style={sharedStyles.body}>
        <View style={sharedStyles.sectionContainer}>
          <Text style={sharedStyles.sectionTitleStory}>Globomantics Conference</Text>
          <Text style={sharedStyles.sectionDescriptionStory}>
            Join us along with Awesome Speakers and Great Content from around
            the Globe!
          </Text>
          <View style={sharedStyles.buttonWrapper}>
            <Pressable
              onPress={() =>
                navigation.navigate('Sessions', {name: 'Sessions'})
              }
              style={sharedStyles.buttonStyle}>
              <Text style={sharedStyles.buttonText}>Sessions</Text>
            </Pressable>
            <Pressable
              onPress={() =>
                navigation.navigate('Speakers', {name: 'Speakers'})
              }
              style={sharedStyles.buttonStyle}>
              <Text style={sharedStyles.buttonText}>Speakers</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

export default Conference;
