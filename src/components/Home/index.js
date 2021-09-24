import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Body from './Body';
import Footer from './Footer';
import Header from './Header';

const Home = ({navigation}) => (
  <View style={{flex: 1}}>
    {/* <Header /> */}
    <Body />
    {/* <Footer /> */}
  </View>
);

export default Home;

const styles = StyleSheet.create({});
