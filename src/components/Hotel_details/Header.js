import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, TouchableHighlight} from 'react-native';

import {gallery, booking, services, map, dubai} from '../../assets/index';
import COLORS from '../../constants/COLORS';
import {SliderBox} from 'react-native-image-slider-box';
import Map from './Map';
import Services from './Services';
import Booking from './Booking';
import Details from './Details';

const Header = props => {
  const [mapView, setMapView] = useState(false);
  const [servicesView, setServicesView] = useState(false);
  const [BookingView, setBookingView] = useState(false);
  const [DetailView, setDetailView] = useState(true);
  let images = [
    'https://pix10.agoda.net/hotelImages/124/1246280/1246280_16061017110043391702.jpg?s=1024x768',
    'https://cdn2.hubspot.net/hubfs/439788/Blog/Featured%20Images/Best%20Hotel%20Website%20Designs.jpg',
    'https://ak-d.tripcdn.com/images/0222k1200084amt9u5416_Z_550_412_R5_Q70_D.jpg',
    'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/f7/8b/38/exterior.jpg?w=900&h=-1&s=1',
    'https://media.cntraveler.com/photos/5f678a13b981fb78a3045f90/master/w_2560,h_1707,c_limit/archipelagos-hotel-mykonos.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgFicM3hrLpJ0-7MJ4LHLt4sCwr_0JsUVp3Q&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5-X9IGkokOAV_-t62CmQJCVx5RkWXk20A2g&usqp=CAU',
    dubai,
  ];

  let Renderview = mapView ? (
    <Map />
  ) : servicesView ? (
    <Services />
  ) : BookingView ? (
    <Booking />
  ) : DetailView ? (
    <Details />
  ) : null;

  return (
    <View style={styles.mealItem}>
      <View>
        <SliderBox sliderBoxHeight={400} images={images} />
      </View>

      <View style={styles.bgImage}>
        <Text style={styles.title} numberOfLines={1}>
          {' Pearl continental'}
        </Text>
      </View>

      <View style={{...styles.mealRow, ...styles.mealDetail}}>
        <TouchableHighlight
          activeOpacity={0.9}
          underlayColor={COLORS.primary_transparent}
          style={{borderRadius: 25, overflow: 'hidden'}}
          onPress={() => {
            setServicesView(false);
            setMapView(false);
            setBookingView(false);
            setDetailView(true);
          }}
          style={{width: 25, flex: 1, alignItems: 'center'}}>
          <View style={{alignItems: 'center'}}>
            <Image style={{height: 25, width: 25}} source={gallery} />
            <Text>Details</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          activeOpacity={0.9}
          underlayColor={COLORS.primary_transparent}
          style={{borderRadius: 25, overflow: 'hidden'}}
          onPress={() => {
            setServicesView(true);
            setMapView(false);
            setBookingView(false);
          }}
          style={{width: 25, flex: 1, alignItems: 'center'}}>
          <View style={{alignItems: 'center'}}>
            <Image style={{height: 25, width: 25}} source={services} />
            <Text>Sevices</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          activeOpacity={0.9}
          underlayColor={COLORS.primary_transparent}
          style={{borderRadius: 25, overflow: 'hidden'}}
          onPress={() => {
            setServicesView(false);
            setMapView(false);
            setBookingView(true);
            props.navigation.navigate('Reserve');
          }}
          style={{width: 25, flex: 1, alignItems: 'center'}}>
          <View style={{alignItems: 'center'}}>
            <Image style={{height: 25, width: 25}} source={booking} />
            <Text>Reserve</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          activeOpacity={0.9}
          underlayColor={COLORS.primary_transparent}
          style={{borderRadius: 25, overflow: 'hidden'}}
          onPress={() => {
            setMapView(true);
            setServicesView(false);
            setBookingView(false);
          }}
          style={{width: 25, flex: 1, alignItems: 'center'}}>
          <View style={{alignItems: 'center'}}>
            <Image style={{height: 25, width: 25}} source={map} />
            <Text>Locations</Text>
          </View>
        </TouchableHighlight>
      </View>
      <View
        style={{
          flexDirection: 'row',
          height: 1.5,
          width: '100%',
          backgroundColor: 'lightgrey',
        }}></View>
      {Renderview}
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  mapstyle: {
    marginTop: 20,
  },
  mealItem: {
    flex: 1,
    backgroundColor: COLORS.secondary,
  },
  mealRow: {
    flexDirection: 'row',
  },

  mealDetail: {
    marginTop: 25,
    paddingTop: 20,
    marginBottom: 20,
    paddingHorizontal: 5,
    justifyContent: 'space-evenly',
    height: 40,
    alignItems: 'center',
  },
  bgImage: {
    width: '100%',
    backgroundColor: 'rgba(0,0,0,0.6)',
    marginTop: -65,
  },
  title: {
    fontSize: 22,
    color: 'white',
    paddingVertical: 5,
  },
  title_low: {
    fontSize: 16,
    paddingBottom: 5,
    fontStyle: 'italic',
    color: 'white',
    backgroundColor: 'rgba(0,0,0,0.4)',
    paddingHorizontal: 12,
  },
});
