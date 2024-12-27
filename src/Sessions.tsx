import React, {PropsWithChildren, useState} from 'react';
import {Text, SectionList, View} from 'react-native';
import {sessions} from './data/sessions.json';
import {Footer} from './components/Footer';
import {Header} from './components/Header';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {sharedStyles} from './sharedStyles';

function Sessions() {
  return (
    <View>
      <SectionList
        sections={sessions}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
        keyExtractor={(item, index) => String(index)}
        stickySectionHeadersEnabled={true}
        ItemSeparatorComponent={SeparatorComponent}
        ListFooterComponent={FooterComponent}
        ListHeaderComponent={HeaderComponent}
      />
    </View>
  );
}

type renderSectionHeaderProps = PropsWithChildren<{
  section: { title: string };
}>
const renderSectionHeader = ({section}: renderSectionHeaderProps) => {
  return (
    <View style={sharedStyles.headerContainer}>
      <Text style={sharedStyles.headerTitle}>{section.title}</Text>
    </View>
  );
};

type renderItemProps = PropsWithChildren<{
  index: number;
  item: {
    title: string;
    description: string;
    level: string;
    room: string;
    speakers: any;
  }
}>
const renderItem = ({item, index}: renderItemProps) => {
  return (
    <View>
      <SessionsList
        id={index}
        name={item.title}
        desc={item.description}
        speaker={item.speakers[0].name}
        level={item.level}
        room={item.room}
      />
    </View>
  );
};

type SessionsListProps = PropsWithChildren<{
  id: number;
  desc: string;
  level: string;
  name: string;
  room: string;
  speaker: string;
}>;

const SessionsList = (props: SessionsListProps) => {
  const [moreInfo, setMoreInfo] = useState(false);
  return (
    <View key={props.id} style={sharedStyles.sectionContainer}>
      <Text style={sharedStyles.sectionTitle}>{'Session : ' + props.name}</Text>
      <Text style={sharedStyles.sectionDescription}>
        {'Speaker : ' + props.speaker}
      </Text>
      <TouchableOpacity onPress={() => setMoreInfo(!moreInfo)}>
        <Text style={sharedStyles.clickableText}>
          {moreInfo ? 'Hide Details' : 'Show More Details'}
        </Text>
      </TouchableOpacity>
      {moreInfo && (
        <>
          <Text style={sharedStyles.sectionDescription}>
            {'Details : ' + props.desc}
          </Text>
          <Text style={sharedStyles.sectionDescription}>
            {'Room : ' + props.room}
          </Text>
          <Text style={sharedStyles.sectionDescription}>
            {'Level : ' + props.level}
          </Text>
        </>
      )}
    </View>
  );
};

const SeparatorComponent = () => {
  return <View style={sharedStyles.seperatorStyle} />;
};

const HeaderComponent = () => {
  return (
    <Header
      image={require('./images/sec2.jpg')}
      heading={'Awesome Sessions!!'}
      style={sharedStyles.sectionTitle}
    />
  );
};

const FooterComponent = () => {
  return <Footer />;
};

export default Sessions;
