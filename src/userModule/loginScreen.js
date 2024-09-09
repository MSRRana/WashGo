import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';

const loginScreen = props => {
  const {navigation} = props;
  return (
    <SafeAreaView style={{flex: 1}}>
      <Text>loginScreen</Text>
    </SafeAreaView>
  );
};

export default loginScreen;
