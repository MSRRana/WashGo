import {View, Text} from 'react-native';
import React from 'react';

const GoBottomText = props => {
  const {mainText, subText, style} = props;
  return (
    <View
      style={[
        {
          alignItems: 'center',
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
        }}>
        {mainText}
      </Text>
      <Text
        style={{
          fontSize: 14,
          lineHeight: 20,
          color: '#808080',
          fontWeight: 400,
        }}>
        {subText}
      </Text>
    </View>
  );
};

export default GoBottomText;
