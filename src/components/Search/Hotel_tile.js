import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    TouchableNativeFeedback,
    StyleSheet, 
    Platform, 
    ImageBackground
} from 'react-native';

const Hotel_tile= props=>{
    let TouchableComp = TouchableOpacity;
    if (Platform.OS === 'android' && Platform.Version >= 21) {
        TouchableComp = TouchableNativeFeedback;
    }
    return (
        <View style={styles.mealItem}>
            <TouchableComp onPress={props.onSelectMeal}>
                
                <View >
                   
                    <View style={{...styles.mealRow, ...styles.mealHeader}} >
                    
                        <ImageBackground source={{uri: props.image}} style={styles.bgImage}>  
                        < Text style={styles.title} numberOfLines={1}> {props.title} </Text>    
                        </ImageBackground>
                       
                    </View>                
                    <View style={{...styles.mealRow, ...styles.mealDetail}}>
                        <Text>{props.duration} m</Text>
                        <Text>{props.complexity.toUpperCase()}</Text>
                        <Text>{props.affordibility.toUpperCase()}</Text>

                   
                    </View>
                </View>
            </TouchableComp>
        </View>
    );
};

export default Hotel_tile;

 const styles= StyleSheet.create(
     {
         mealItem:{
             height:200,
             width:'100%',
             backgroundColor:'#f5f5f5',
             borderRadius:15,
             overflow:'hidden'
         },
         mealRow:{
             flexDirection:'row',
             
         },
         mealHeader:{
             height:'85%',
         },
         mealDetail:{
             paddingHorizontal: 20,
             justifyContent:'space-between',
             height:'15%',
             alignItems:'center'

         },
         bgImage:{
            height: '100%',
            width:'100%',
           
            justifyContent:'flex-end'

        },
        title:{
            fontSize: 22,
            paddingVertical: 5,
            color: 'white',
            backgroundColor:'rgba(0,0,0,0.7)',
            paddingHorizontal:12
        }

     }
 )