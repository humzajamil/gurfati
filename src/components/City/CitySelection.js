// import {NavigationContainer} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  ScrollView,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import {Button, Icon, Input, Text} from 'react-native-elements';
// import index from '.';
import COLORS from '../../constants/COLORS';
import {width, height} from '../../constants/Dimensions';

const CitySelection = ({route, navigation}) => {
  const [citiesSelected, setCitiesSelected] = useState(true);
  const [recentSelected, setRecentSelected] = useState(false);

  const cities = [
    'Riyadh',
    'Abha',
    'Dammam',
    'Dubai',
    'Jeddah',
    'Makkah',
    'Taif',
  ];

  return (
    <View>
      {/* search bar parent view */}
      <View
        style={{
          height: height * 0.1,
          backgroundColor: COLORS.primary,
          justifyContent: 'center',
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: COLORS.secondary,
            width: width * 0.8,
            height: height * 0.05,
            alignSelf: 'center',
            borderRadius: 8,
          }}>
          <Icon
            name="search"
            type="evilicon"
            color={COLORS.placeholder}
            size={25}
            style={{paddingRight: width * 0.015, paddingLeft: width * 0.015}}
          />
          <TextInput
            autoFocus
            placeholder="Destination hotel or property"
            placeholderTextColor={COLORS.placeholder}
          />
        </View>
      </View>
      <View style={{marginTop: height * 0.05, alignSelf: 'center'}}>
        <View
          style={{
            flexDirection: 'row',
            borderColor: '#007AFF',
            borderWidth: 0.75,
          }}>
          <Button
            type={citiesSelected ? 'solid' : 'outline'}
            onPress={() => {
              setCitiesSelected(true);
              setRecentSelected(false);
            }}
            title="Cities"
            buttonStyle={{
              borderColor: 'white',
              backgroundColor: citiesSelected ? '#007AFF' : null,
            }}
            containerStyle={{
              width: width * 0.4,
              borderRadius: 0,
              backgroundColor: citiesSelected ? '#007AFF' : null,
            }}
          />
          <Button
            onPress={() => {
              setCitiesSelected(false);
              setRecentSelected(true);
            }}
            type={recentSelected ? 'solid' : 'outline'}
            title="Recent"
            buttonStyle={{
              borderColor: 'white',
              backgroundColor: recentSelected ? '#007AFF' : null,
            }}
            containerStyle={{
              width: width * 0.4,
              borderRadius: 0,
              backgroundColor: recentSelected ? '#007AFF' : null,
            }}
          />
        </View>
      </View>
      {citiesSelected ? (
        <ScrollView style={{marginTop: height * 0.03}}>
          {cities.map((city, index) => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('Home', {
                  screen: 'Feed',
                  params: {title: city, index: index},
                })
              }
              key={index}
              style={{
                width: width * 0.9,
                alignSelf: 'center',
                borderBottomColor: COLORS.placeholder,
                borderBottomWidth: 0.75,
              }}>
              <Text style={{color: 'black', padding: 5}}>{city}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      ) : null}
    </View>
  );
};

export default CitySelection;

const styles = StyleSheet.create({});
