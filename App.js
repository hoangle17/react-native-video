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
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  FlatList,
} from 'react-native';
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
// import Icon from 'react-native-vector-icons/MaterialIcon';
// import { AntDesign } from '@expo/vector-icons';
import VideoItem from './app/components/videoitem';
import data from './data.json';
const App: () => React$Node = () => {
  return (
    <View style={styles.container}>
      <View style={styles.navBar}>
        {/* <Image source={equire("./app/images/logo.jpg")} style={{width:100, height:30}}></Image> */}
        {/* <AntDesign name="search1" size={24} color="black" /> */}
        {/* <Icon name = "search" size={25}></Icon> */}
      </View>
      <View style={styles.body}>
        {/* show items video */}
        <FlatList
          data={data.items}
          renderItem={video => <VideoItem video={video.item} />}
          keyExtractor={item => item.id}
          ItemSeparatorComponent={() => (
            <View style={{height: 0.5, backgroundColor: '#E5E5E5'}} />
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  navBar: {
    height: 55,
    backgroundColor: 'white',
    elevation: 3,
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  body: {
    flex: 1,
  },
});

export default App;
