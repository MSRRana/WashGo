import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

const GoIcons = props => {
  const {style, iconName, onPress} = props;
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      style={[
        {
          padding: 10,
          borderWidth: 0.5,
          borderRadius: 50,
          borderColor: '#A3CFFF',
        },
        style,
      ]}>
      <Icon name={iconName} color={'#000'} size={22} />
    </TouchableOpacity>
  );
};

export default GoIcons;
