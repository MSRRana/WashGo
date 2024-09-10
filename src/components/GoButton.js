import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

const GoButton = props => {
  const {onPress, title, style} = props;
  return (
    <TouchableOpacity
      style={[
        {
          backgroundColor: '#A3CFFF',
          paddingVertical: 15,
          alignItems: 'center',
          borderRadius: 50,
          shadowColor: '#A3CFFF',
          shadowOffset: {
            width: 0,
            height: 1,
          },
          shadowOpacity: 0.22,
          shadowRadius: 2.22,
          elevation: 3,
          marginTop: 10,
        },
        style,
      ]}
      onPress={onPress}>
      <Text style={{fontSize: 22, fontWeight: '700', color: '#092A4D'}}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default GoButton;
