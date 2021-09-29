import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import COLORS from '../../constants/COLORS';
import Body from './Body';

const Home = ({navigation}) => (
  <View style={{flex: 1, backgroundColor: COLORS.secondary}}>
    <Body navigation={navigation} />
  </View>
);

export default Home;

const styles = StyleSheet.create({});
