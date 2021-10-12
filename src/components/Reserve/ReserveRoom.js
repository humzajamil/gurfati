import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import {Input} from 'react-native-elements';

const ReserveRoom = () => {
  const [show, setShow] = useState(false);
  const [dob, setDob] = useState('');

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || dob;
    setShow(false);
    setDob(currentDate);
  };

  return (
    <View>
      <Text style={{paddingLeft: 5, fontWeight: 'bold'}}>Check In:</Text>
      <TouchableHighlight
        onPress={() => {
          setShow(true);
        }}>
        <>
          <Input
            returnKeyType="next"
            blurOnSubmit={false}
            placeholder="Check in"
            keyboardType="default"
            disabled
            value={
              dob
                ? `${(dob.getMonth() + 1).toString()}/${dob
                    .getDate()
                    .toString()}/${dob.getFullYear().toString()}`
                : null
            }
          />
          {show && (
            <DateTimePicker
              testID="dateTimePicker"
              value={new Date()}
              onChange={onChange}
              minimumDate={new Date()}
            />
          )}
        </>
      </TouchableHighlight>
    </View>
  );
};

export default ReserveRoom;

const styles = StyleSheet.create({});
