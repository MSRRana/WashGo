import {
  View,
  Text,
  SafeAreaView,
  Image,
  Alert,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import GoTextInput from '../components/GoTextInput';
import GoButton from '../components/GoButton';
import GoCheckBox from '../components/GoCheckBox';
const SignUpScreen = props => {
  const {navigation} = props;

  //local State

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = async event => {
    navigation.navigate('LoginScreen');
    // const myHeaders = new Headers();
    // myHeaders.append('Content-Type', 'application/json');

    // const raw = JSON.stringify({
    //   phone: phone,
    //   password: password,
    //   name: name,
    // });

    // const requestOptions = {
    //   method: 'POST',
    //   headers: myHeaders,
    //   body: raw,
    //   redirect: 'follow',
    // };

    // try {
    //   const response = await fetch(
    //     'https://tor.appdevelopers.mobi/api/register',
    //     requestOptions,
    //   );
    //   const result = await response.text();
    //   setResponse(result);
    // } catch (error) {
    //   setError(error.message);
    // }
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <Image
        style={{height: 150, width: 200, marginTop: 20, alignSelf: 'center'}}
        source={require('../assets/images/splashScreenImage/mainSplashImg.png')}></Image>

      <View style={{flex: 1}}>
        <View style={{flex: 1, marginHorizontal: 10}}>
          <Text style={{fontSize: 30, color: '#000', fontWeight: 600}}>
            Sign Up
          </Text>

          <Text
            style={{
              fontSize: 14,
              lineHeight: 20,
              color: '#808080',
              fontWeight: 400,
              marginVertical: 10,
            }}>
            Fill in the below form and add life to {'\n'}your car!
          </Text>

          <GoTextInput
            title={'Name'}
            placeholder={'Enter your Name'}
            iconName={'person-outline'}
            autoCorrect={false}
          />
          <GoTextInput
            title={'Phone'}
            placeholder={'Enter your Phone No'}
            iconName={'call-outline'}
            keyboardType={'numeric'}
            autoCorrect={false}
          />
          <GoTextInput
            title={'Password'}
            placeholder={'password'}
            iconName={'lock-closed-outline'}
            autoCorrect={false}
          />
          <GoCheckBox
            onTermsPress={() => {
              console.log('Hello');
            }}
          />
          <GoButton title={'Sign Up'} onPress={handleSubmit} />
          <View
            style={{
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                fontSize: 14,
                lineHeight: 20,
                color: '#808080',
                fontWeight: 400,
                marginVertical: 10,
              }}>
              Already have an account?{' '}
            </Text>

            <Text
              style={{
                color: '#000',
                // textDecorationLine: 'underline',
                fontWeight: 700,
              }}>
              Sign In
            </Text>
          </View>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: 10,
            }}>
            <Text
              style={{
                fontSize: 14,
                lineHeight: 20,
                color: '#808080',
                fontWeight: 400,
              }}>
              By login or sign up, you agree to our terms of use and
            </Text>
            <Text
              style={{
                fontSize: 14,
                lineHeight: 20,
                color: '#808080',
                fontWeight: 400,
              }}>
              privacy policy
            </Text>
          </View>
        </View>
      </View>
      <Image
        resizeMode="contain"
        style={{
          width: 250,
          height: 200,
          position: 'absolute',
          bottom: -10,
          right: -10,
          borderBottomRightRadius: 5,
          borderBottomLeftRadius: 5,
        }}
        source={require('../assets/images/bottomSignUpImg.png')}></Image>
    </SafeAreaView>
  );
};

export default SignUpScreen;
