import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button} from 'react-native-elements';
import COLORS from '../../constants/COLORS';

const Footer = () => {
  return (
    <View style={{flex: 1, justifyContent: 'flex-end'}}>
      <Button
        title="Search"
        titleStyle={{color: COLORS.secondary}}
        buttonStyle={{backgroundColor: COLORS.primary}}
      />
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({});
