import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import ListView from '../Search/List_view';
import Tabs from '../Search/Tabs';
import Header from '../Search/Header';

const Search_screen = ({navigation}) => {
  useEffect(() => {
    console.log(new Date());
    console.log(navigation, 'Search screen');
  }, []);

  return (
    <View
      style={{
        flex: 1,
      }}>
      <Header />
      <Tabs />
      <ListView navigation={navigation} />
    </View>
  );
};

export default Search_screen;

const styles = StyleSheet.create({});
