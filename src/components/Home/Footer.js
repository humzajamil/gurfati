import React, {useState, useEffect} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
  ActivityIndicator,
} from 'react-native';
import {Button, Icon} from 'react-native-elements';
import COLORS from '../../constants/COLORS';
import {height, width} from '../../constants/Dimensions';
import {hotel_types} from '../../DATA/hotel_types';
import moment from 'moment';

const Footer = () => {
  const [hotelType, setHotelType] = useState(0);
  const [months, setMonths] = useState([]);
  const [dates, setDates] = useState({});
  const [show, setShow] = useState(true);
  const [pressed, setPressed] = useState(false);
  const [id, setID] = useState('');

  useEffect(() => {
    let monthsArray = [];
    console.log(moment().add(0, 'month').startOf('month').format('MMM'));
    for (let i = 0; i <= 11; i++) {
      monthsArray.push(moment().add(i, 'month').startOf('month').format('MMM'));
      handleMonthPressed(
        moment().add(i, 'month').startOf('month').format('MMM'),
      );
    }
    setMonths(monthsArray);
    setShow(false);
  }, []);

  const handleLeftChevron = () => {
    if (hotelType != 0) {
      let prev = hotelType - 1;
      setHotelType(prev);
    }
  };

  const handleRightChevron = () => {
    if (hotelType != hotel_types.length - 1) {
      let next = hotelType + 1;
      setHotelType(next);
    }
  };
  let weekDays = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];
  let monthDays = {};

  const handleMonthPressed = month => {
    if (month == moment().add(0, 'month').startOf('month').format('MMM')) {
      let curr = moment();
      let end = moment().endOf('month');
      let days = end.diff(curr, 'days');
      monthDays[month] = {dates: [], days: []};

      for (let i = 0; i <= days; i++) {
        monthDays[month].dates.push(moment().add(i, 'days').date());
        monthDays[month].days.push(weekDays[moment().add(i, 'days').day()]);
      }
      setDates(monthDays);
      console.log(monthDays);
    }
  };
  return (
    <View style={{flex: 1, justifyContent: 'flex-end'}}>
      {show ? (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <ActivityIndicator color={COLORS.primary} size="large" />
        </View>
      ) : (
        <>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              justifyContent: 'space-between',
              alignItems: 'center',
              height: height * 0.07,
              alignSelf: 'flex-end',
              marginLeft: width * 0.02,
            }}>
            {dates['Sep'].dates.map((date, index) => (
              <View
                key={date}
                style={{
                  paddingRight: width * 0.065,
                }}>
                <Text
                  onPress={() => {
                    setPressed(true);
                    setID('');
                    handleMonthPressed('');
                  }}
                  style={{
                    padding: width * 0.02,
                    borderRadius: 5,
                    fontSize: 12,
                    color:
                      pressed && month == id ? COLORS.secondary : '#404040',
                    backgroundColor:
                      pressed && month == id
                        ? COLORS.primary
                        : COLORS.secondary,
                  }}>
                  {date}
                </Text>
                <Text
                  onPress={() => {
                    setPressed(true);
                    setID('');
                    handleMonthPressed('');
                  }}
                  style={{
                    padding: width * 0.02,
                    borderRadius: 5,
                    fontSize: 12,
                    color:
                      pressed && month == id ? COLORS.secondary : '#404040',
                    backgroundColor:
                      pressed && month == id
                        ? COLORS.primary
                        : COLORS.secondary,
                  }}>
                  {dates['Sep'].days[index]}
                </Text>
              </View>
            ))}
          </ScrollView>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              justifyContent: 'space-between',
              alignItems: 'center',
              height: height * 0.07,
              alignSelf: 'flex-end',
              marginLeft: width * 0.02,
            }}>
            {months.map(month => (
              <View
                key={month}
                style={{
                  paddingRight: width * 0.065,
                }}>
                <Text
                  onPress={() => {
                    setPressed(true);
                    setID(month);
                    handleMonthPressed(month);
                  }}
                  style={{
                    padding: width * 0.02,
                    borderRadius: 5,
                    fontSize: 12,
                    color:
                      pressed && month == id ? COLORS.secondary : '#404040',
                    backgroundColor:
                      pressed && month == id
                        ? COLORS.primary
                        : COLORS.secondary,
                  }}>
                  {month}
                </Text>
              </View>
            ))}
          </ScrollView>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              backgroundColor: 'rgba(52, 52, 52, 1)',
              height: height * 0.06,
            }}>
            <TouchableWithoutFeedback onPress={handleLeftChevron}>
              <Icon
                name="chevron-left"
                type="evilicon"
                color={COLORS.secondary}
                size={25}
                style={{
                  paddingRight: width * 0.015,
                  paddingLeft: width * 0.015,
                }}
              />
            </TouchableWithoutFeedback>
            <Text style={{color: COLORS.secondary}}>
              {hotel_types[hotelType]}
            </Text>
            <TouchableWithoutFeedback onPress={handleRightChevron}>
              <Icon
                name="chevron-right"
                type="evilicon"
                color={COLORS.secondary}
                size={25}
                style={{
                  paddingRight: width * 0.015,
                  paddingLeft: width * 0.015,
                }}
              />
            </TouchableWithoutFeedback>
          </View>
          <Button
            title="Search"
            titleStyle={{
              color: COLORS.secondary,
              fontSize: 20,
              fontWeight: 'bold',
            }}
            buttonStyle={{
              backgroundColor: COLORS.primary,
              height: height * 0.074,
            }}
          />
        </>
      )}
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({});
