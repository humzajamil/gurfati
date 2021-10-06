import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import ListView from '../Search/List_view';
import Tabs from '../Search/Tabs';
import Header from '../Search/Header';



const Search_screen = ({navigation}) => {



  return (
    <View
      style={{
        flex: 1,
      }}>

         <Header />
         <Tabs/>
         <ListView/>
         
      </View>
  );
};

export default Search_screen;

const styles = StyleSheet.create({});
