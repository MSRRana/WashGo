import {View, Text, TextInput, StyleSheet} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

const GoTextInput = () => {
  return (
    <View style={styles.container}>
      <Icon
        name="mail-open-outline"
        size={20}
        color="gray"
        style={styles.icon}
      />
      <TextInput
        style={styles.input}
        placeholder="xyz@gmail.com"
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    height: 40,
  },
});

export default GoTextInput;
