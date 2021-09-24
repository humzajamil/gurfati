import React from 'react';
import {StyleSheet, Text, View, ImageBackground} from 'react-native';
import {riyadh} from '../../assets/index';
import {Image} from 'react-native-elements';
import Header from './Header';
import Footer from './Footer';
import {height, width} from '../../constants/Dimensions';

const Body = () => {
  return (
    <View
      style={{
        flex: 1,
      }}>
      <ImageBackground
        source={riyadh}
        style={{width: width * 1, height: height * 0.75}}>
        <Header />
      </ImageBackground>
      <Footer />
    </View>
  );
};

export default Body;

const styles = StyleSheet.create({});
