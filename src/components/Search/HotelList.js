import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import Hotel_tile from '../Search/Hotel_tile';




    

const HotelList = props => {
    const renderHotel = itemData => {
        return  <Hotel_tile 
            title={ itemData.item.title} 
            duration={itemData.item.duration}
            affordibility={itemData.item.affordibility}
            complexity={itemData.item.complexity}
            image={itemData.item.imageUrl}/>
        
    }

     

    return (
        <View style={styles.list}>
       <FlatList 
       data={props.listdata} 
       renderItem={renderHotel}
       keyExtractor={(item,index)=>item.id } 
       style={{width:'100%'}}/>
       </View>
    );
}
 


const styles = StyleSheet.create({

    list: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin:10

    }
})
export default HotelList;