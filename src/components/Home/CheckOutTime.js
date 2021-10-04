import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import COLORS from '../../constants/COLORS';
import {height, width} from '../../constants/Dimensions';
import {Icon} from 'react-native-elements';

const CheckOutTime = props => {
  const [showCheckOutCaret, setShowCheckOutCaret] = useState(false);

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
          <Text style={{color: COLORS.secondary, fontSize: 16}}>SUN</Text>
          <Text style={{color: COLORS.secondary, fontSize: 10}}>JUL 22</Text>
        </View>
        <View>
          <Text style={{color: COLORS.secondary, fontSize: 30}}>03</Text>
        </View>
      </View>
      {showCheckOutCaret ? (
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
