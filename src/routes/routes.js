import * as React from 'react';
import DeviceInfo from 'react-native-device-info';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../userModule/loginScreen';
import SplashScreen from '../userModule/splashScreen';
import SignUpScreen from '../userModule/signUpScreen';
import WelcomeScreen from '../userModule/welcomeScreen';
import HomeScreen from '../userModule/homeScreen';

const Stack = createNativeStackNavigator();
const deviceType = DeviceInfo.getDeviceType();
const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#ffffff',
  },
};
const MainRoutes = () => {
  return (
    <NavigationContainer independent={true} theme={MyTheme}>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{
            headerShown: false,
            orientation: deviceType === 'Handset' ? 'portrait' : 'landscape',
          }}
        />
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{
            headerShown: false,
            orientation: deviceType === 'Handset' ? 'portrait' : 'landscape',
          }}
        />
        <Stack.Screen
          name="SignUpScreen"
          component={SignUpScreen}
          options={{
            headerShown: false,
            orientation: deviceType === 'Handset' ? 'portrait' : 'landscape',
          }}
        />
        <Stack.Screen
          name="WelcomeScreen"
          component={WelcomeScreen}
          options={{
            headerShown: false,
            orientation: deviceType === 'Handset' ? 'portrait' : 'landscape',
          }}
        />
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            headerShown: false,
            orientation: deviceType === 'Handset' ? 'portrait' : 'landscape',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainRoutes;
