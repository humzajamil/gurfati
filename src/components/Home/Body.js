import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  TouchableWithoutFeedback,
  ScrollView,
} from 'react-native';

import {SliderBox} from 'react-native-image-slider-box';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';
import {useIsFocused} from '@react-navigation/native';
import {Icon} from 'react-native-elements';
import {images, riyadh} from '../../assets/index';
import Header from './Header';
import Footer from './Footer';
import {height, width} from '../../constants/Dimensions';
import COLORS from '../../constants/COLORS';
import CheckOutTime from './CheckOutTime';
import CheckInTime from './CheckInTime';

const Body = ({navigation, route}) => {
  const [showCheckInCaret, setShowCheckInCaret] = useState(true);
  const [showCheckOutCaret, setShowCheckOutCaret] = useState(false);
  const [index, setIndex] = useState(0);
  const isFocused = useIsFocused();

  useEffect(() => {
    setIndex(route.params != undefined ? route.params.index : 0);
  }, [route, isFocused]);

  const config = {
    velocityThreshold: 0.01,
    directionalOffsetThreshold: 90,
  };

  const onSwipe = gestureName => {
    const {SWIPE_LEFT, SWIPE_RIGHT} = swipeDirections;
    switch (gestureName) {
      case SWIPE_LEFT:
        if (index != images.length - 1) {
         
          let i = index + 1;
          setIndex(i);
        }
        break;
      case SWIPE_RIGHT:
        if (index != 0) {
          //.log('in');
          let i = index - 1;
          setIndex(i);
        }
        break;
    }
  };
  return (
    <View
      style={{
        flex: 1,
      }}>
      <GestureRecognizer
        config={config}
        onSwipe={(direction, state) => onSwipe(direction, state)}>
        <ImageBackground
          source={images[index]}
          style={{width: width * 1, height: height * 0.77}}>
          <Header navigation={navigation} route={route} />
        </ImageBackground>
      </GestureRecognizer>
      <Footer navigation={navigation} />
    </View>
  );
};

export default Body;

const styles = StyleSheet.create({});
