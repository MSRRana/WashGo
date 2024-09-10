import {View, Text} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

const GoIcons = props => {
  const {style, iconName} = props;
  return (
    <View
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
    </View>
  );
};

export default GoIcons;
