/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
} from 'react-native';

import {sharedStyles} from './sharedStyles';
// import 'react-native-gesture-handler';

import {TouchableOpacity} from 'react-native-gesture-handler';

function Home({navigation}: any) {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={sharedStyles.mainContainer}>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={sharedStyles.scrollView}>
          <Image
            style={sharedStyles.image}
            source={require('./images/hero_image.png')}
          />

          <View style={sharedStyles.body}>
            <View style={sharedStyles.sectionContainer}>
              <Text style={sharedStyles.sectionTitle}>
                Globomantics Tech Conference
              </Text>
              <Text style={sharedStyles.sectionDescription}>
                Maniaclly taking tech to the globe
              </Text>
            </View>
            <View style={sharedStyles.sectionContainer}>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('Conference', {name: 'Conference'})
                }>
                <Text style={sharedStyles.sectionTitle}>Conference</Text>
              </TouchableOpacity>
              <Text style={sharedStyles.sectionDescription}>
                View conference sessions and speakers
              </Text>
            </View>
            <View style={sharedStyles.sectionContainer}>
              <TouchableOpacity
                onPress={() => navigation.navigate('Story', {name: 'Story'})}>
                <Text style={sharedStyles.sectionTitle}>Story</Text>
              </TouchableOpacity>
              <Text style={sharedStyles.sectionDescription}>Learn more about us</Text>
            </View>
            <View style={sharedStyles.sectionContainer}>
              <Text style={sharedStyles.sectionTitle}>Submit Sessions</Text>
              <Text style={sharedStyles.sectionDescription}>
                Are you interested in speaking? Submit a session!
              </Text>
            </View>
            <View style={sharedStyles.sectionContainer}>
              <Text style={sharedStyles.sectionTitle}>Feedback</Text>
              <Text style={sharedStyles.sectionDescription}>
                We would love to hear from you.
              </Text>
            </View>
            <View style={sharedStyles.sectionContainer}>
              <Text style={sharedStyles.sectionTitle}>Learn More</Text>
              <Text style={sharedStyles.sectionDescription}>
                Read the docs to discover what to do next:
              </Text>
            </View>

            <View style={sharedStyles.sectionContainer}>
              <View style={sharedStyles.footer}>
                <Image
                  style={{
                    width: 300,
                    height: 70,
                    resizeMode: 'stretch',
                    position: 'relative',
                  }}
                  source={require('./images/pluralsight-white.png')}
                />
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}



export default Home;
