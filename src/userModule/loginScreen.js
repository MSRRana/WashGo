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
import GoIcons from '../components/GoIcons';
import GoButton from '../components/GoButton';
import GoBottomText from '../components/GoBottomText';
import GoNavigationText from '../components/GoNavigationText';
import GoError from '../components/GoError';
import {loginFun} from '../reduxFolder/actions/LoginAction';
import {useDispatch, useSelector} from 'react-redux';
const LoginScreen = props => {
  const {navigation} = props;
  const dispatch = useDispatch();
  //local State

  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setPasswordVisible] = useState(true);

  const [inputError, setInputErrors] = useState({
    phoneError: '',
    passwordError: '',
  });

  const passwordRegex = new RegExp(
    '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$',
  );
  const handleSubmit = () => {
    let errors = {};

    if (phone.trim() === '') {
      errors.phoneError = 'Phone number is required';
    } else if (phone.length !== 10) {
      errors.phoneError = 'Phone number must be of 10 digits';
    }

    if (password.trim() === '') {
      errors.passwordError = 'Password is required';
    } else if (password.length < 6) {
      errors.passwordError = 'Password must be of 6 characters';
    }

    if (Object.keys(errors).length > 0) {
      setInputErrors({...inputError, ...errors});
      return;
    } else {
      dispatch(loginFun(phone, password, navigation));
    }
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
            maxLength={10}
            title={'Phone'}
            placeholder={'Enter your Phone No'}
            iconName={'call-outline'}
            keyboardType={'numeric'}
            autoCorrect={false}
            onChangeText={text => {
              setPhone(text);
              setInputErrors(prevState => ({
                ...prevState,
                phoneError: '',
              }));
            }}
            value={phone}
            iconColor={phone.length == 10 ? '#8FE8D8' : '#000000'}
          />

          {inputError?.phoneError ? (
            <GoError errorText={inputError?.phoneError} />
          ) : null}
          <GoTextInput
            maxLength={20}
            title={'Password'}
            placeholder={'password'}
            iconName={'lock-closed-outline'}
            autoCorrect={false}
            hiddenIcon={!isPasswordVisible ? 'eye-outline' : 'eye-off-outline'}
            onChangeText={text => {
              setPassword(text);
              setInputErrors(prevState => ({
                ...prevState,
                passwordError: false,
              }));
            }}
            value={password}
            iconColor={password.length >= 6 ? '#8FE8D8' : '#000000'}
            hiddenOnPress={() => setPasswordVisible(!isPasswordVisible)}
            secureTextEntry={isPasswordVisible}
          />
          {inputError?.passwordError ? (
            <GoError errorText={inputError?.passwordError} />
          ) : null}
          <Text
            onPress={() => Alert.alert('This functionality is not added')}
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
            <GoIcons
              iconName={'logo-google'}
              onPress={() => Alert.alert('This functionality is not added')}
            />
            <GoIcons
              style={{marginLeft: 20}}
              iconName={'logo-apple'}
              onPress={() => Alert.alert('This functionality is not added')}
            />
          </View>
          <GoNavigationText
            style={{marginTop: 20}}
            mainText={`Don't have an account?`}
            subText={'Sign Up'}
            onPress={() => navigation.navigate('SignUpScreen')}
          />
          <GoBottomText
            mainText={'By login or sign up, you agree to our terms of use and'}
            subText={'privacy policy'}
          />
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
          zIndex: -10,
        }}
        source={require('../assets/images/bottomLoginImg.png')}></Image>
    </SafeAreaView>
  );
};

export default LoginScreen;
