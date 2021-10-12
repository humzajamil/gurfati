import React, {useEffect} from 'react';
import {useIsFocused} from '@react-navigation/native';
import {StyleSheet, Text, View} from 'react-native';
import COLORS from '../../constants/COLORS';
import Body from './Body';

// const Home = ({navigation}) => {
//   useEffect(() => {
//     console.log(new Date());
//     console.log(navigation, 'main Index');
//   }, []);
//   return (
//     <View style={{flex: 1, backgroundColor: COLORS.secondary}}>
//       <Body navigation={navigation} />
//     </View>
//   );
// };
const Home = ({route, navigation}) => {
  const isFocused = useIsFocused();
  useEffect(() => {
    console.log('indx', route);
  }, [route, isFocused]);
  return (
    <View style={{flex: 1, backgroundColor: COLORS.secondary}}>
      <Body navigation={navigation} route={route} />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
