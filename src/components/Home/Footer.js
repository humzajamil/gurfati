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
  const [calender, setCalender] = useState(
    moment().add(0, 'month').startOf('month').format('MMM'),
  );

  let weekDays = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];
  let monthDays = {};

  useEffect(() => {
    let monthsArray = [];
    // console.log(moment().add(0, 'month').startOf('month').format('MMM'));
    for (let i = 0; i <= 11; i++) {
      monthsArray.push(moment().add(i, 'month').startOf('month').format('MMM'));
      // console.log(moment().add(i, 'M').startOf('month').format('YYYY-MM-DD'));
      // console.log(moment().add(i, 'M').endOf('month').format('YYYY-MM-DD'));
      console.log(monthsArray[i]);
      if (i == 0) {
        console.log('in');
        let curr = moment();
        let end = moment().endOf('month');
        let days = end.diff(curr, 'days');
        monthDays[monthsArray[i]] = {dates: [], days: []};

        for (let j = 0; j <= days; j++) {
          monthDays[monthsArray[i]].dates.push(moment().add(j, 'days').date());
          monthDays[monthsArray[i]].days.push(
            weekDays[moment().add(j, 'days').day()],
          );
        }
        console.log(monthDays[monthsArray[i]]);
      } else {
        let curr = moment(
          moment().add(i, 'M').startOf('month').format('YYYY-MM-DD'),
        );
        let end = moment(
          moment().add(i, 'M').endOf('month').format('YYYY-MM-DD'),
        );
        let days = end.diff(curr, 'days');
        monthDays[monthsArray[i]] = {dates: [], days: []};

        for (let k = 0; k <= days; k++) {
          monthDays[monthsArray[i]].dates.push(
            moment(curr).add(k, 'days').date(),
          );
          monthDays[monthsArray[i]].days.push(
            weekDays[moment(curr).add(k, 'days').day()],
          );
        }
      }
      setDates(monthDays);
      console.log(monthDays[monthsArray[i]]);
    }
    setMonths(monthsArray);
    setShow(false);
    // console.log(monthDays);
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

  const handleMonthPressed = month => {
    setPressed(true);
    setID(month);
    console.log('inside press', month);
    setCalender(month);
  };
  return (
    <View style={{flex: 1, justifyContent: 'flex-end'}}>
      {show && dates ? (
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
            {dates[calender].dates.map((date, index) => (
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
                    color: '#404040',
                    backgroundColor: COLORS.secondary,
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
                    color: '#404040',
                    backgroundColor: COLORS.secondary,
                  }}>
                  {dates[calender].days[index]}
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
                <TouchableWithoutFeedback
                  onPress={() => {
                    handleMonthPressed(month);
                  }}>
                  <Text
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
                </TouchableWithoutFeedback>
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
