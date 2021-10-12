import React, {useEffect} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {HOTELS} from '../Search/Category';
import HotelList from './HotelList';

const List_view = ({navigation}) => {
  useEffect(() => {
    console.log(new Date());
    console.log(navigation, 'List View');
  }, []);

  const avialableHotels = HOTELS;

  if (avialableHotels.length <= 0) {
    return (
      <View style={styles.screen}>
        <Text>No Hotels Found? check your filters..</Text>
      </View>
    );
  } else {
    return <HotelList listdata={HOTELS} navigation={navigation} />;
  }
};

export default List_view;
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 15,
    marginVertical: 15,
  },
});
