import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button} from 'react-native-elements';
import COLORS from '../../constants/COLORS';
import {height} from '../../constants/Dimensions';

const Footer = () => {
  return (
    <View style={{flex: 1, justifyContent: 'flex-end'}}>
      <Button
        title="Search"
        titleStyle={{color: COLORS.secondary, fontSize: 20, fontWeight: 'bold'}}
        buttonStyle={{backgroundColor: COLORS.primary, height: height * 0.074}}
      />
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({});
