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
const LoginScreen = props => {
  const {navigation} = props;

  //local State

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = async event => {
    navigation.navigate('SignUpScreen');
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
            Sign In
          </Text>

          <Text
            style={{
              fontSize: 14,
              lineHeight: 20,
              color: '#808080',
              fontWeight: 400,
              marginVertical: 10,
            }}>
            Hi ! Welcome back, you{'\n'}have been missed
          </Text>

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
            hiddenIcon={'eye-outline'}
            hiddenOnPress={() => console.log('hidden')}
          />
          <Text
            onPress={() => navigation.navigate('HomeScreen')}
            style={{
              color: '#000',
              textDecorationLine: 'underline',
              fontWeight: 700,
              textAlign: 'right',
              marginTop: 10,
              marginBottom: 20,
            }}>
            Forgot password?
          </Text>
          <GoButton title={'Sign In'} onPress={handleSubmit} />
          <View
            style={{
              marginTop: 20,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <View
              style={{
                backgroundColor: '#A3CFFF',
                width: 100,
                borderWidth: 0.5,
                borderColor: '#A3CFFF',
              }}></View>
            <Text style={{marginHorizontal: 10, color: '#666161'}}>or</Text>
            <View
              style={{
                backgroundColor: '#A3CFFF',
                width: 100,
                borderWidth: 0.5,
                borderColor: '#A3CFFF',
              }}></View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              marginVertical: 20,
            }}>
            <GoIcons iconName={'logo-google'} />
            <GoIcons style={{marginLeft: 20}} iconName={'logo-apple'} />
          </View>
          <View
            style={{
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'center',
              marginTop: 10,
            }}>
            <Text
              style={{
                fontSize: 14,
                lineHeight: 20,
                color: '#808080',
                fontWeight: 400,
                marginVertical: 10,
              }}>
              Don't have an account?{' '}
            </Text>

            <Text
              style={{
                color: '#000',
                textDecorationLine: 'underline',
                fontWeight: 700,
              }}>
              Sign Up
            </Text>
          </View>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: 40,
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
          bottom: -10,
          left: 2,
          position: 'absolute',
        }}
        source={require('../assets/images/bottomLoginImg.png')}></Image>
    </SafeAreaView>
  );
};

export default LoginScreen;
