import React, {useState, useEffect} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  TouchableOpacity,
  View,
  ActivityIndicator,
} from 'react-native';
import {Button, Icon} from 'react-native-elements';
import COLORS from '../../constants/COLORS';
import {height, width} from '../../constants/Dimensions';
import {hotel_types} from '../../DATA/hotel_types';
import moment from 'moment';
import CheckOutTime from './CheckOutTime';
import CheckInTime from './CheckInTime';
import {NavigationContainer} from '@react-navigation/native';

const Footer = ({navigation}) => {
  const [showCheckInCaret, setShowCheckInCaret] = useState(true);
  const [showCheckOutCaret, setShowCheckOutCaret] = useState(false);
  const [hotelType, setHotelType] = useState(0);
  const [months, setMonths] = useState([]);
  const [dates, setDates] = useState({});
  const [show, setShow] = useState(true);
  const [monthPressed, setMonthPressed] = useState(false);
  const [datePressed, setDatePressed] = useState(false);
  const [monthID, setMonthID] = useState('');
  const [dateID, setDateID] = useState('');
  const [calender, setCalender] = useState(
    moment().add(0, 'month').startOf('month').format('MMM'),
  );
  const [checkInDate, setCheckInDate] = useState(moment());
  const [checkOutDate, setCheckOutDate] = useState(moment().add(1, 'days'));

  let weekDays = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];
  let monthDays = {};

  useEffect(() => {
    let monthsArray = [];
    // console.log(moment().add(0, 'month').startOf('month').format('MMM'));
    for (let i = 0; i <= 11; i++) {
      monthsArray.push(moment().add(i, 'month').startOf('month').format('MMM'));
      console.log(monthsArray[i]);
      if (i == 0) {
        console.log('in');
        let curr = moment();
        let end = moment().endOf('month');
        let days = end.diff(curr, 'days');
        monthDays[monthsArray[i]] = {dates: [], days: []};

        for (let j = 0; j <= days; j++) {
          monthDays[monthsArray[i]].dates.push(moment().add(j, 'days'));
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
          monthDays[monthsArray[i]].dates.push(moment(curr).add(k, 'days'));
          monthDays[monthsArray[i]].days.push(
            weekDays[moment(curr).add(k, 'days').day()],
          );
        }
      }
      setDates(monthDays);
      console.log(
        monthDays[monthsArray[i]].dates[0],
        monthDays[monthsArray[i]].days[0],
      );
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
    setMonthPressed(true);
    setMonthID(month);
    console.log('inside press', month);
    setCalender(month);
  };

  const handleDatePressed = date => {
    setDatePressed(true);
    setDateID(date.date());
    if (showCheckInCaret) {
      setCheckInDate(date);
      setCheckOutDate(moment(date).add(1, 'days'));
    } else {
      setCheckOutDate(date);
    }
    console.log('inside press', date);
  };

  return (
    <View style={{flex: 1, justifyContent: 'flex-end'}}>
      {show && dates ? (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <ActivityIndicator color={COLORS.primary} size="large" />
        </View>
      ) : (
        <>
          <View
            style={{
              flex: 1,
              height: height * 0.1,
              justifyContent: 'flex-end',
            }}>
            <View
              style={{
                backgroundColor: 'rgba(52, 52, 52, 0.8)',
                height: height * 0.1,
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <View
                style={{justifyContent: 'center', marginLeft: width * 0.05}}>
                <TouchableOpacity
                  onPress={() => {
                    setShowCheckInCaret(true);
                    setShowCheckOutCaret(false);
                  }}
                  style={{
                    flexDirection: 'row',
                    alignItems: 'flex-start',
                    marginTop: width * 0.02,
                  }}>
                  <CheckInTime
                    date={checkInDate}
                    showCaret={showCheckInCaret}
                  />
                </TouchableOpacity>
              </View>
              <View style={{justifyContent: 'center'}}>
                <Icon
                  name="calendar"
                  type="evilicon"
                  color={COLORS.primary}
                  size={35}
                />
              </View>
              <TouchableOpacity
                onPress={() => {
                  setShowCheckInCaret(false);
                  setShowCheckOutCaret(true);
                }}
                style={{
                  justifyContent: 'center',
                  marginRight: width * 0.05,
                }}>
                <CheckOutTime
                  date={checkOutDate}
                  showCaret={showCheckOutCaret}
                />
              </TouchableOpacity>
            </View>
          </View>
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
              <TouchableWithoutFeedback
                onPress={() => handleDatePressed(date)}
                key={moment(date).date()}
                style={{backgroundColor: 'red'}}>
                <View
                  style={{
                    alignSelf: 'center',
                    backgroundColor:
                      (datePressed && moment(date).date() == dateID) ||
                      (moment(date).date() == moment().add(0, 'days').date() &&
                        !datePressed)
                        ? COLORS.primary
                        : COLORS.secondary,
                    alignItems: 'center',
                    height: height * 0.045,
                    justifyContent: 'space-around',
                    borderRadius: 5,
                    marginRight: width * 0.028,
                  }}>
                  <Text
                    style={{
                      padding: width * 0.02,
                      borderRadius: 5,
                      fontSize: 10,
                      color:
                        (datePressed && moment(date).date() == dateID) ||
                        (moment(date).date() ==
                          moment().add(0, 'days').date() &&
                          !datePressed)
                          ? COLORS.secondary
                          : '#404040',
                    }}>
                    {moment(date).date()}
                  </Text>
                  <Text
                    style={{
                      padding: width * 0.02,
                      borderRadius: 5,
                      fontSize: 10,
                      color:
                        (datePressed && moment(date).date() == dateID) ||
                        (moment(date).date() ==
                          moment().add(0, 'days').date() &&
                          !datePressed)
                          ? COLORS.secondary
                          : 'lightgrey',
                    }}>
                    {dates[calender].days[index]}
                  </Text>
                </View>
              </TouchableWithoutFeedback>
            ))}
          </ScrollView>

          <View
            style={{
              height: 1,
              backgroundColor: 'lightgrey',
              width: width * 1,
            }}></View>
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
                  paddingRight: width * 0.023,
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
                        (monthPressed && month == monthID) ||
                        (month ==
                          moment()
                            .add(0, 'month')
                            .startOf('month')
                            .format('MMM') &&
                          !monthPressed)
                          ? COLORS.secondary
                          : '#404040',
                      backgroundColor:
                        (monthPressed && month == monthID) ||
                        (month ==
                          moment()
                            .add(0, 'month')
                            .startOf('month')
                            .format('MMM') &&
                          !monthPressed)
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
            <Text style={{color: COLORS.secondary, fontSize: 12}}>
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
