import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {Icon} from 'react-native-elements';
import COLORS from '../../constants/COLORS';
import {width, height} from '../../constants/Dimensions';

const Header = ({navigation}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.drawerIcon}>
        <Icon
          name="navicon"
          type="evilicon"
          color={COLORS.secondary}
          size={30}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.searchContainer}>
        <Icon
          name="search"
          type="evilicon"
          color={COLORS.secondary}
          size={25}
          style={{paddingRight: width * 0.015, paddingLeft: width * 0.015}}
        />
        <Text style={styles.searchText}>City, area, hotel name</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    flexDirection: 'row',
    // alignItems: 'center',
    // alignSelf: 'flex-start',
    marginTop: height * 0.02,
    marginLeft: height * 0.02,
    // justifyContent: 'flex-start',
    zIndex: 99,
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
    paddingRight: 10,
    color: COLORS.secondary,
  },
});
