import * as React from 'react';
import DeviceInfo from 'react-native-device-info';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import loginScreen from '../userModule/loginScreen';
import splashScreen from '../userModule/splashScreen';
import signUpScreen from '../userModule/signUpScreen';
import welcomeScreen from '../userModule/welcomeScreen';

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
          name="splashScreen"
          component={splashScreen}
          options={{
            headerShown: false,
            orientation: deviceType === 'Handset' ? 'portrait' : 'landscape',
          }}
        />
        <Stack.Screen
          name="loginScreen"
          component={loginScreen}
          options={{
            headerShown: false,
            orientation: deviceType === 'Handset' ? 'portrait' : 'landscape',
          }}
        />
        <Stack.Screen
          name="signUpScreen"
          component={signUpScreen}
          options={{
            headerShown: false,
            orientation: deviceType === 'Handset' ? 'portrait' : 'landscape',
          }}
        />
        <Stack.Screen
          name="welcomeScreen"
          component={welcomeScreen}
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
