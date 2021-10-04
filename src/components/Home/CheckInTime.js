import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import COLORS from '../../constants/COLORS';
import {height, width} from '../../constants/Dimensions';
import {Icon} from 'react-native-elements';

const CheckInTime = props => {
  const [showCheckInCaret, setShowCheckInCaret] = useState(true);

  return (
    <View>
      <Text
        style={{
          color: COLORS.secondary,
          fontSize: 10,
          alignSelf: 'center',
        }}>
        Check In
      </Text>

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'flex-start',
          marginTop: width * 0.02,
        }}>
        <View style={{marginRight: width * 0.03}}>
          <Text style={{color: COLORS.secondary, fontSize: 16}}>
            {props.day}
          </Text>
          <Text style={{color: COLORS.secondary, fontSize: 10}}>
            {props.month} 22
          </Text>
        </View>
        <View>
          <Text style={{color: COLORS.secondary, fontSize: 30}}>
            {props.date}
          </Text>
        </View>
      </View>
      {showCheckInCaret ? (
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

export default CheckInTime;

const styles = StyleSheet.create({});
