import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import COLORS from '../../constants/COLORS';
import {height, width} from '../../constants/Dimensions';
import {Icon} from 'react-native-elements';

const CheckOutTime = props => {
  let weekDays = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];
  let monthNames = [
    'JAN',
    'FEB',
    'MAR',
    'APR',
    'MAY',
    'JUN',
    'JUL',
    'AUG',
    'SEP',
    'OCT',
    'NOV',
    'DEC',
  ];

  return (
    <View>
      <Text
        style={{
          color: COLORS.secondary,
          fontSize: 10,
          alignSelf: 'center',
        }}>
        Check Out
      </Text>

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'flex-start',
          marginTop: width * 0.02,
        }}>
        <View style={{marginRight: width * 0.03}}>
          <Text style={{color: COLORS.secondary, fontSize: 16}}>
            {weekDays[props.date.day()]}
          </Text>
          <Text style={{color: COLORS.secondary, fontSize: 10}}>{`${
            monthNames[props.date.month()]
          } ${props.date.year().toString().slice(2)}`}</Text>
        </View>
        <View>
          <Text style={{color: COLORS.secondary, fontSize: 30}}>
            {props.date.date()}
          </Text>
        </View>
      </View>
      {props.showCaret ? (
        <Icon
          name="caret-up-outline"
          type="ionicon"
          color={COLORS.primary}
          size={15}
          style={{alignSelf: 'center'}}
        />
      ) : null}
    </View>
  );
};

export default CheckOutTime;

const styles = StyleSheet.create({});
