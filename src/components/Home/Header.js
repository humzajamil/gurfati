import React, {useEffect} from 'react';
import {useIsFocused} from '@react-navigation/native';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {Icon} from 'react-native-elements';
import COLORS from '../../constants/COLORS';
import {width, height} from '../../constants/Dimensions';

const Header = ({navigation, route}) => {
  const isFocused = useIsFocused();
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.drawerIcon}>
        <Icon
          name="navicon"
          type="evilicon"
          color={COLORS.secondary}
          size={30}
          onPress={() => navigation.openDrawer()}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('Search_city')}
        style={styles.searchContainer}>
        <Icon
          name="search"
          type="evilicon"
          color={COLORS.secondary}
          size={25}
          style={{paddingRight: width * 0.015, paddingLeft: width * 0.015}}
        />
        <Text style={styles.searchText}>
          {route.params != undefined
            ? route.params.title
            : 'City, area, hotel name'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: height * 0.02,
    marginLeft: height * 0.02,
  },
  drawerIcon: {
    marginRight: width * 0.15,
  },
  searchContainer: {
    backgroundColor: 'rgba(52, 52, 52, 0.1)',
    flexDirection: 'row',
    paddingTop: height * 0.01,
    paddingBottom: height * 0.01,
    borderRadius: 10,
  },
  searchText: {
    width: width * 0.5,
    paddingRight: 10,
    color: COLORS.secondary,
    fontSize: 16,
  },
});
