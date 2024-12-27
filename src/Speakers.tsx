import React, {PropsWithChildren, useState} from 'react';
import {Text, FlatList, View, TextInput, Pressable, Image} from 'react-native';
import {sharedStyles} from './sharedStyles';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import {speakers} from './data/speakers.json';

function Speakers() {
  const [filteredSpeakers, setFilteredSpeakers] = useState<any>(speakers);

  const getSearchText = (text: string) => {
    let filteredSpeakersList = speakers.filter((value) =>
      value.sessions[0].name.toLowerCase().includes(text.toLowerCase()),
    );
    setFilteredSpeakers(filteredSpeakersList);
  };

  return (
    <View>
      <SearchSessions getSearchText={getSearchText} />
      <FlatList
        keyboardDismissMode={'on-drag'}
        keyboardShouldPersistTaps={'always'}
        data={filteredSpeakers}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        ItemSeparatorComponent={SeparatorComponent}
        pagingEnabled={false}
        ListHeaderComponent={HeaderComponent}
        ListFooterComponent={FooterComponent}
      />
    </View>
  );
}

type SearchSessionsProps = PropsWithChildren<{
  getSearchText: (d: string) => void;
}>;
const SearchSessions = (props: SearchSessionsProps) => {
  const [searchText, setSearchText] = useState('');

  let textInputRef: TextInput | null;

  const handleSearch = (text: string) => {
    setSearchText(text);
    props.getSearchText(text);
  };

  const clearSearch = () => {
    textInputRef?.clear();
    props.getSearchText('');
  };

  return (
    <View style={sharedStyles.container}>
      <TextInput
        ref={(ref) => {
          textInputRef = ref;
        }}
        style={sharedStyles.searchInput}
        value={searchText}
        onChangeText={(text) => handleSearch(text)}
        placeholder={'Search Sessions'}
        returnKeyType={'go'}
        autoCorrect={false}
        autoFocus={false}
        keyboardType={'default'}
        multiline={false}
        selectionColor={'green'}
      />
      <Pressable onPress={clearSearch} style={sharedStyles.clearContainer}>
        <Image
          style={sharedStyles.clearImage}
          source={require('./images/multiply-1_Orange.png')}
        />
      </Pressable>
    </View>
  );
};


const renderItem = ({item, id}: any) => {
  return (
    <View>
      <SpeakerList
        id={id}
        name={item.name}
        bio={item.bio}
        session={item.sessions[0].name}
      />
    </View>
  );
};

type SpeakerListProps = PropsWithChildren<{
  id: number;
  name: string;
  bio: string;
  session: string;
}>;
const SpeakerList = (speaker : SpeakerListProps) => {
  return (
    <View style={sharedStyles.sectionContainer} key={speaker.id}>
      <Text style={sharedStyles.sectionTitle}>{'Speaker Name: ' + speaker.name}</Text>
      <Text style={sharedStyles.sectionDescription}>{'Bio: ' + speaker.bio}</Text>
      <Text style={sharedStyles.sectionDescriptionBold}>{'Session: ' + speaker.session}</Text>
    </View>
  );
};

const SeparatorComponent = () => {
  return <View style={sharedStyles.seperatorStyle} />;
};

const HeaderComponent = () => {
  return (
    <Header
      image={require('./images/girl.png')}
      heading={'Awesome Speakers Lineup!!'}
      style={sharedStyles.sectionTitleGreen}
    />
  );
};

const FooterComponent = () => {
  return <Footer />;
};
export default Speakers;
