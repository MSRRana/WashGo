import {View, Text, Image, ImageBackground, Dimensions} from 'react-native';
import React, {useEffect} from 'react';

import {useDispatch, useSelector} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {setUserData} from '../reduxFolder/actions/LoginAction';

const {width, height} = Dimensions.get('window');
const SplashScreen = props => {
  const {navigation} = props;

  const dispatch = useDispatch();
  const {userDetails} = useSelector(state => state.loginscreen);
  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const token = await AsyncStorage.getItem('login_data');

        if (token) {
          navigation.navigate('HomeScreen');
          dispatch(setUserData(JSON.parse(token)));
        } else {
          navigation.navigate('WelcomeScreen');
        }
      } catch (error) {
        console.error('Error checking login status:', error);
      }
    };

    checkLoginStatus();
  }, [navigation]);

  // console.log(userDetails, 'userDetails');
  return (
    <ImageBackground
      style={{flex: 1}}
      source={require('../assets/images/splashScreenImage/splashScreen.png')}></ImageBackground>
  );
};

export default SplashScreen;
