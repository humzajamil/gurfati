import React, {useEffect} from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import Hotel_tile from '../Search/Hotel_tile';

const HotelList = props => {
  const renderHotel = itemData => {
    return (
      <View style={{marginBottom: 10, margin: 10}}>
        <Hotel_tile
          title={itemData.item.title}
          duration={itemData.item.duration}
          affordibility={itemData.item.affordibility}
          complexity={itemData.item.complexity}
          image={itemData.item.imageUrl}
          navigation={props.navigation}
        />
      </View>
    );
  };

  return (
    <View style={styles.list}>
      <FlatList
        data={props.listdata}
        renderItem={renderHotel}
        keyExtractor={(item, index) => item.id}
        style={{width: '100%'}}
        contentContainerStyle={{marginVertical: 10, paddingBottom: 20}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
});
export default HotelList;
