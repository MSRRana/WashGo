import {View, Text, SafeAreaView, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import GoNavigationText from '../components/GoNavigationText';
const WelcomeScreen = props => {
  const {navigation} = props;
  return (
    <View style={{flex: 1}}>
      <View style={{flex: 1.6}}>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <Image
            source={require('../assets/images/welcomeImg/topLeftWelcomeImg.png')}></Image>
          <Image
            style={{width: 200, height: 240}}
            source={require('../assets/images/welcomeImg/topRightWelcomeImg.png')}></Image>
        </View>

        <Image
          source={require('../assets/images/splashScreenImage/mainSplashImg.png')}></Image>
      </View>
      <View style={{flex: 1}}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 600,
            textAlign: 'center',
            color: '#808080',
            marginHorizontal: 60,
          }}>
          Sparkle & Shine Transform Your Drive with Every Wash!
        </Text>

        <TouchableOpacity
          style={{
            backgroundColor: '#A3CFFF',
            marginHorizontal: 30,
            paddingVertical: 10,
            alignItems: 'center',
            borderRadius: 50,
            marginTop: 100,
            shadowColor: '#A3CFFF',
            shadowOffset: {
              width: 0,
              height: 1,
            },
            shadowOpacity: 0.22,
            shadowRadius: 2.22,
            elevation: 3,
          }}
          onPress={() => navigation.navigate('SignUpScreen')}>
          <Text style={{fontSize: 20, fontWeight: '700', color: '#092A4D'}}>
            Let’s Start
          </Text>
        </TouchableOpacity>
        <GoNavigationText
          style={{marginTop: 20}}
          mainText={'Already have an account?'}
          subText={'Sign in'}
          onPress={() => navigation.navigate('LoginScreen')}
        />
      </View>
    </View>
  );
};

export default WelcomeScreen;
