import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import {Icon} from 'react-native-elements';
import {riyadh} from '../../assets/index';
import {Image} from 'react-native-elements';
import Header from './Header';
import Footer from './Footer';
import {height, width} from '../../constants/Dimensions';
import COLORS from '../../constants/COLORS';

const Body = () => {
  const [showCheckInCaret, setShowCheckInCaret] = useState(true);
  const [showCheckOutCaret, setShowCheckOutCaret] = useState(false);

  return (
    <View
      style={{
        flex: 1,
      }}>
      <ImageBackground
        source={riyadh}
        style={{width: width * 1, height: height * 0.77}}>
        <Header />
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
            <View style={{justifyContent: 'center', marginLeft: width * 0.05}}>
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
      <Footer />
    </View>
  );
};

export default Body;

const styles = StyleSheet.create({});
