import {View, Text, SafeAreaView, Image} from 'react-native';
import React from 'react';
import GoTextInput from '../components/GoTextInput';
const signUpScreen = () => {
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
              fontSize: 16,
              lineHeight: 24,
              color: '#808080',
              fontWeight: 400,
              marginTop: 10,
            }}>
            Hi ! Welcome back, you{'\n'}have been missed
          </Text>
          <GoTextInput />
        </View>
        <View style={{flex: 1, backgroundColor: '#0cc'}}></View>
      </View>
    </SafeAreaView>
  );
};

export default signUpScreen;
