import {Alert} from 'react-native';
import {SET_USER_DETAILS} from '../actions/ActionType';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const loginFun = (phone, password, navigation) => {
  return async dispatch => {
    const apiUrl = 'https://tor.appdevelopers.mobi/api/login';
    const data = {
      phone: phone.trim(),
      password: password.trim(),
    };

    try {
      const response = await axios.post(apiUrl, data);
      console.log(response.data, 'response.data====>');
      if (response.data.status == true) {
        dispatch({type: SET_USER_DETAILS, payload: response.data.data});
        AsyncStorage.setItem('login_data', JSON.stringify(response.data.data));
        navigation.navigate('HomeScreen');
      } else {
        Alert.alert('Invalid Error!', 'Phone Number or Password');
      }
    } catch (error) {
      console.log('Error', error);
    }
  };
};

export const signFun = (phone, password, Name, navigation) => {
  return async dispatch => {
    const apiUrl = 'https://tor.appdevelopers.mobi/api/register';
    const data = {
      name: Name,
      phone: phone.trim(),
      password: password.trim(),
    };
    console.log(data, 'data====>');
    const requestOptions = {
      headers: {'Content-Type': 'application/json'},
      body: data,
    };
    const headers = {'Content-Type': 'application/json'};

    try {
      const response = await axios.post(apiUrl, data, headers);
      if (response.data.status == true) {
        dispatch({type: SET_USER_DETAILS, payload: response.data.data});
        AsyncStorage.setItem('login_data', JSON.stringify(response.data.data));
        navigation.navigate('HomeScreen');
      } else {
        Alert.alert(response.data.message, 'Phone Number or Password');
      }
    } catch (error) {
      console.log('Error', error);
    }
  };
};

export const setUserData = data => {
  return async dispatch => {
    dispatch({type: SET_USER_DETAILS, payload: data});
  };
};

export const logoutFuc = navigation => {
  return async dispatch => {
    AsyncStorage.getItem('login_data');
    await AsyncStorage.clear();

    dispatch({type: SET_USER_DETAILS, payload: {}});
    navigation.reset({
      index: 0,
      routes: [{name: 'WelcomeScreen'}],
    });
  };
};
