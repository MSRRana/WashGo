import {
  View,
  Text,
  SafeAreaView,
  Image,
  Alert,
  ImageBackground,
} from 'react-native';
import React, {useState} from 'react';
import GoTextInput from '../components/GoTextInput';
import GoIcons from '../components/GoIcons';
import GoButton from '../components/GoButton';
import GoCheckBox from '../components/GoCheckBox';
import {logoutFuc} from '../reduxFolder/actions/LoginAction';
import {useDispatch, useSelector} from 'react-redux';
const HomeScreen = props => {
  const {navigation} = props;
  const dispatch = useDispatch();
  const {userDetails} = useSelector(state => state.loginscreen);
  //local State

  const handleLogout = () => {
    dispatch(logoutFuc(navigation));
  };
  console.log(userDetails.name, 'userDetails===>111');
  console.log(userDetails, 'userDetails===>');

  return (
    <SafeAreaView style={{flex: 1}}>
      <Image
        style={{height: 150, width: 200, marginTop: 20, alignSelf: 'center'}}
        source={require('../assets/images/splashScreenImage/mainSplashImg.png')}></Image>

      <View
        style={{
          marginTop: 100,
          marginHorizontal: 10,
        }}>
        <Text
          style={{
            fontSize: 30,
            color: '#000',
            fontWeight: 600,
            alignSelf: 'center',
          }}>
          Welcome {userDetails?.name}
        </Text>

        <GoButton
          title={'Logout'}
          onPress={handleLogout}
          style={{marginTop: 100}}
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
