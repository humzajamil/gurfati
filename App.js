//built in components
import React, {useEffect} from 'react';
import {StatusBar} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

//third party components
import SplashScreen from 'react-native-splash-screen';

//project components
import COLORS from './src/constants/COLORS';
import Screens from './src/screens/Screens';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  });
  return (
    <SafeAreaProvider>
      <StatusBar backgroundColor={COLORS.primary} />
      <Screens />
    </SafeAreaProvider>
  );
};

export default App;
