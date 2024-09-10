import {View, Text} from 'react-native';
import React from 'react';

const GoError = props => {
  const {errorText} = props;
  return <Text style={{color: 'red'}}>{errorText}</Text>;
};

export default GoError;
