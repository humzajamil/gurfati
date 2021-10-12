import React, {useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TouchableNativeFeedback,
  StyleSheet,
  Platform,
  ImageBackground,
} from 'react-native';
import {Rating, AirbnbRating} from 'react-native-ratings';

const Hotel_tile = props => {
  // useEffect(() => {
  //     console.log(new Date());
  //     console.log(navigation, 'Hotel tile');
  //   }, []);
  let TouchableComp = TouchableOpacity;
  if (Platform.OS === 'android' && Platform.Version >= 21) {
    TouchableComp = TouchableNativeFeedback;
  }
  return (
    <View style={styles.mealItem}>
      <TouchableComp
        onPress={() => props.navigation.navigate('Hotel_detail_screen')}>
        <View>
          <View style={{...styles.mealRow, ...styles.mealHeader}}>
            <ImageBackground source={{uri: props.image}} style={styles.bgImage}>
              <Text style={styles.title} numberOfLines={1}>
                {props.title}
              </Text>
            </ImageBackground>
          </View>
          <View style={{...styles.mealRow, ...styles.mealDetail}}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Rating
                startingValue={Number(Math.random() + 0.3)}
                readonly={true}
                imageSize={12}
                ratingColor="#3498db"
                ratingCount={1}
                tintColor="#f5f5f5"
              />
              <Text>{Math.round((Math.random() * 1 + 4) * 10) / 10}</Text>
            </View>
            <Text>{props.complexity.toUpperCase()}</Text>
            <Text style={{color: 'darkorange'}}>
              $ {Math.floor(Math.random() * 1000 + 1000)}
            </Text>
          </View>
        </View>
      </TouchableComp>
    </View>
  );
};

export default Hotel_tile;

const styles = StyleSheet.create({
  mealItem: {
    height: 200,
    width: '100%',
    backgroundColor: '#f5f5f5',
    borderRadius: 15,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOpacity: 0.5,
  },
  mealRow: {
    flexDirection: 'row',
  },
  mealHeader: {
    height: '85%',
  },
  mealDetail: {
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    height: '15%',
    alignItems: 'center',
  },
  bgImage: {
    height: '100%',
    width: '100%',

    justifyContent: 'flex-end',
  },
  title: {
    fontSize: 22,
    paddingVertical: 5,
    color: 'white',
    backgroundColor: 'rgba(0,0,0,0.7)',
    paddingHorizontal: 12,
  },
});
