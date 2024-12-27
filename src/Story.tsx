import React from 'react';
import {ScrollView, View, Text, Image, Pressable} from 'react-native';

import {sharedStyles} from './sharedStyles';

function Story() {
  let scrollView : ScrollView | null;

  return (
    <ScrollView
      ref={(a) => (scrollView = a)}
      style={sharedStyles.storyContainer}
      contentContainerStyle={sharedStyles.storyInnerContainer}
      stickyHeaderIndices={[0, 1]}
      indicatorStyle="white"
      pagingEnabled={true}
      scrollsToTop={true}
      bounces={true}>
      <Image
        style={sharedStyles.storyImageSmall}
        source={require('./images/shutterstock_211091626.png')}
      />
      <View style={sharedStyles.body}>
        <View style={sharedStyles.sectionContainer}>
          <Text style={sharedStyles.sectionTitleStory}>Our Story</Text>
          <Text style={sharedStyles.sectionDescriptionStory}>
            Conference by nerds for nerds!
          </Text>
        </View>
      </View>
      <View style={sharedStyles.body}>
        <Pressable
          onPress={() =>
            scrollView?.scrollToEnd({animated: true })
          }>
          <Text style={sharedStyles.sectionDescriptionStory}>Go To End</Text>
        </Pressable>
        <Text style={sharedStyles.sectionDescriptionStory}>
          This is going to be a lengthy story on how this conference started
        </Text>

        {[1,2,3,4,5]?.map((_d, idx) => <Text key={idx} style={sharedStyles.sectionDescriptionStory}>
          Ex amet elit anim qui consectetur fugiat consequat dolor occaecat.
          Pariatur eu duis dolore do commodo nisi consequat enim est pariatur
          eiusmod adipisicing esse labore ut. Laborum et ex aliqua esse Lorem
          aliqua. Mollit nulla nostrud enim ut proident commodo deserunt
          occaecat ex elit ex est.\nEsse enim nulla dolore sint incididunt enim
          eu eu aute aliqua laboris deserunt eiusmod. Reprehenderit et proident
          nisi laborum ex minim velit. Aliqua laboris et nulla laborum amet sint
          irure ad tempor. Nulla do officia labore. Ut amet aute ex proident.
          Enim sint aliqua occaecat voluptate adipisicing dolore proident Ex
          amet elit anim qui consectetur fugiat consequat dolor occaecat.
          Pariatur eu duis dolore do commodo nisi consequat enim est pariatur
          eiusmod adipisicing esse labore ut. Laborum et ex aliqua esse Lorem
          aliqua. Mollit nulla nostrud enim ut proident commodo deserunt
        </Text>)}
        <Text style={sharedStyles.sectionDescriptionStory}>End of this story!</Text>
        <Pressable
          onPress={() => scrollView?.scrollTo({x: 0, y: 0, animated: true})}>
          <Text style={sharedStyles.sectionDescriptionStory}>Go to Top</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}

export default Story;
