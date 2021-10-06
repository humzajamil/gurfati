import React from 'react';
import { View , StyleSheet, Text} from 'react-native';
import {HOTELS}  from '../Search/Category'
import HotelList from './HotelList';







    

const List_view = props => {
   
 
    const avialableHotels=HOTELS;
    console.log(HOTELS)

    if(avialableHotels.length<=0)
    {return <View style={styles.screen}>
        <Text>No Hotels Found? check your filters..</Text>
    </View>}
    else
    {return <HotelList  listdata={HOTELS} />;}
}
 



export default List_view;
 const styles = StyleSheet.create(
     {
        screen:{
            flex:1,
            alignItems:'center',
            justifyContent:'center',
            paddingHorizontal:15,
            marginVertical:15
        }
     }
 )