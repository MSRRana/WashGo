import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const GoCheckBox = props => {
  const {style, onPress, checked, iconStyle} = props;
  const [isSelected, setSelection] = useState(false);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={onPress}
        style={[{flexDirection: 'row'}, style]}>
        <Icon
          name={!checked ? 'checkbox-blank-outline' : 'checkbox-marked'}
          color={checked ? '#93E4FF' : '#CCC'}
          size={22}
          style={iconStyle}
        />
        <Text style={styles.text}>
          Agree with{' '}
          <Text style={styles.link} activeOpacity={0.7}>
            Terms & Conditions
          </Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  checkbox: {
    marginRight: 10,
  },
  text: {
    fontSize: 16,
    marginLeft: 5,
  },
  link: {
    color: 'gray',
    textDecorationLine: 'underline',
  },
});

export default GoCheckBox;
