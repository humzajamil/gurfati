import React, {useState} from 'react';
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

import {Icon} from 'react-native-elements';
import {images, riyadh} from '../../assets/index';
import Header from './Header';
import Footer from './Footer';
import {height, width} from '../../constants/Dimensions';
import COLORS from '../../constants/COLORS';

const Body = ({navigation}) => {
  const [showCheckInCaret, setShowCheckInCaret] = useState(true);
  const [showCheckOutCaret, setShowCheckOutCaret] = useState(false);

  const [index, setIndex] = useState(0);

  const config = {
    velocityThreshold: 0.01,
    directionalOffsetThreshold: 90,
  };

  const onSwipe = gestureName => {
    const {SWIPE_LEFT, SWIPE_RIGHT} = swipeDirections;
    switch (gestureName) {
      case SWIPE_LEFT:
        if (index != images.length - 1) {
          console.log('in');
          let i = index + 1;
          setIndex(i);
        }
        break;
      case SWIPE_RIGHT:
        if (index != 0) {
          console.log('in');
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
          <Header navigation={navigation} />

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
                <Text
                  style={{
                    color: COLORS.secondary,
                    fontSize: 10,
                    alignSelf: 'center',
                  }}>
                  Check In
                </Text>
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
                  <View style={{marginRight: width * 0.03}}>
                    <Text style={{color: COLORS.secondary, fontSize: 16}}>
                      SUN
                    </Text>
                    <Text style={{color: COLORS.secondary, fontSize: 10}}>
                      JUL 22
                    </Text>
                  </View>
                  <View>
                    <Text style={{color: COLORS.secondary, fontSize: 30}}>
                      03
                    </Text>
                  </View>
                </TouchableOpacity>
                {showCheckInCaret ? (
                  <Icon
                    name="caret-up-outline"
                    type="ionicon"
                    color={COLORS.primary}
                    size={15}
                    style={{alignSelf: 'center'}}
                  />
                ) : null}
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
                style={{justifyContent: 'center', marginRight: width * 0.05}}>
                <Text
                  style={{
                    color: COLORS.secondary,
                    fontSize: 10,
                    alignSelf: 'center',
                  }}>
                  Check Out
                </Text>

                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'flex-start',
                    marginTop: width * 0.02,
                  }}>
                  <View style={{marginRight: width * 0.03}}>
                    <Text style={{color: COLORS.secondary, fontSize: 16}}>
                      SUN
                    </Text>
                    <Text style={{color: COLORS.secondary, fontSize: 10}}>
                      JUL 22
                    </Text>
                  </View>
                  <View>
                    <Text style={{color: COLORS.secondary, fontSize: 30}}>
                      03
                    </Text>
                  </View>
                </View>
                {showCheckOutCaret ? (
                  <Icon
                    name="caret-up-outline"
                    type="ionicon"
                    color={COLORS.primary}
                    size={15}
                    style={{alignSelf: 'center'}}
                  />
                ) : null}
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </GestureRecognizer>
      <Footer navigation={navigation} />
    </View>
  );
};

export default Body;

const styles = StyleSheet.create({});
