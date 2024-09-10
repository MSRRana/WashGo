import {View, Text, Image, ImageBackground, Dimensions} from 'react-native';
import React, {useEffect} from 'react';
import {setUserDetails} from '../reduxFolder/actions/LoginAction';

import {useDispatch, useSelector} from 'react-redux';

const {width, height} = Dimensions.get('window');
const SplashScreen = props => {
  const {navigation} = props;

  const dispatch = useDispatch();
  const {userDetails} = useSelector(state => state.loginscreen);

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('WelcomeScreen');
    }, 500);
  }, []);

  // console.log(userDetails, 'userDetails');
  return (
    <ImageBackground
      style={{flex: 1}}
      source={require('../assets/images/splashScreenImage/splashScreen.png')}></ImageBackground>
  );
};

export default SplashScreen;
