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
const HomeScreen = props => {
  const {navigation} = props;

  //local State

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = async event => {
    navigation.navigate('SignUpScreen');
  };

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
          Welcome User
        </Text>

        <GoButton
          title={'Logout'}
          onPress={handleSubmit}
          style={{marginTop: 100}}
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
