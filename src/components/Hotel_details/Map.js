import React from 'react';
import MapView, {Marker} from 'react-native-maps';
import {
  StyleSheet,
  View
} from 'react-native';


const Map = props => {
  
   
  
  return (
    <View style={styles.style}>
    <MapView
    style={{
      height: 400,
      width: '90%',
      alignSelf: 'center',
      marginBottom: 30,
    }}
    // onRegionChange={getLocation}
    initialRegion={{
      latitude: Number(24.8655364),
      longitude: Number(67.0583857),
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }}>
    <Marker
      coordinate={{
        latitude: Number(24.8655364),
        longitude: Number(67.0583857),
      }}
    />
  </MapView>
  </View>
  );
};

export default Map;

const styles = StyleSheet.create({
    style:{
        flex:1,
        marginTop:20
    }
});
