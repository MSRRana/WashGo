import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

const GoNavigationText = props => {
  const {onPress, mainText, subText, style} = props;
  return (
    <View
      style={[
        {
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'center',
        },
        style,
      ]}>
      <Text
        style={{
          fontSize: 14,
          lineHeight: 20,
          color: '#808080',
          fontWeight: 400,
          marginVertical: 10,
        }}>
        {mainText}{' '}
      </Text>
      <TouchableOpacity onPress={onPress}>
        <Text
          style={{
            color: '#000',
            textDecorationLine: 'underline',
            fontWeight: 700,
            marginLeft: 4,
          }}>
          {subText}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default GoNavigationText;
