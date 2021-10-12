import React from 'react';
import {StyleSheet, View} from 'react-native';
import Header from './Header';
import Map from './Map';

const Hotel_detail_screen = ({navigation}) => {
  return (
    <View
      style={{
        flex: 1,
      }}>
      <Header navigation={navigation} />
    </View>
  );
};

export default Hotel_detail_screen;

const styles = StyleSheet.create({});
