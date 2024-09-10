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
import GoNavigationText from '../components/GoNavigationText';
import GoBottomText from '../components/GoBottomText';
import {signFun} from '../reduxFolder/actions/LoginAction';
import GoError from '../components/GoError';
import {useDispatch} from 'react-redux';
const SignUpScreen = props => {
  const {navigation} = props;
  const dispatch = useDispatch();

  //local State

  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [checkTerm, setCheckTerm] = useState(false);
  const [isPasswordVisible, setPasswordVisible] = useState(true);

  const [inputError, setInputErrors] = useState({
    nameError: '',
    phoneError: '',
    passwordError: '',
    checkBoxError: '',
  });
  const userSignUpFun = () => {
    let errors = {};
    if (name.trim() === '') {
      errors.nameError = 'Name is required';
    }
    if (checkTerm == false) {
      errors.checkBoxError = 'Please Agree all terms and condition';
    }

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
      console.log('Hello222');
      setInputErrors({...inputError, ...errors});
      return;
    } else {
      console.log('Hello');
      dispatch(signFun(phone, password, name, navigation));
    }
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
            onChangeText={text => {
              setName(text);
              setInputErrors(prevState => ({
                ...prevState,
                nameError: '',
              }));
            }}
            value={name}
            iconColor={name.length > 0 ? '#8FE8D8' : '#000000'}
          />
          {inputError?.nameError ? (
            <GoError errorText={inputError?.nameError} />
          ) : null}
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
          <GoCheckBox
            checked={checkTerm}
            onPress={() => {
              setCheckTerm(!checkTerm);
              setInputErrors(prevState => ({
                ...prevState,
                checkBoxError: false,
              }));
            }}
          />
          {inputError?.checkBoxError ? (
            <GoError errorText={inputError?.checkBoxError} />
          ) : null}
          <GoButton title={'Sign Up'} onPress={userSignUpFun} />

          <GoNavigationText
            style={{marginTop: 20}}
            mainText={'Already have an account?'}
            subText={'Sign in'}
            onPress={() => navigation.navigate('LoginScreen')}
          />

          <GoBottomText
            style={{marginTop: 0}}
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
          position: 'absolute',
          bottom: -10,
          right: -10,
          zIndex: -10,
          borderBottomRightRadius: 5,
          borderBottomLeftRadius: 5,
        }}
        source={require('../assets/images/bottomSignUpImg.png')}></Image>
    </SafeAreaView>
  );
};

export default SignUpScreen;
