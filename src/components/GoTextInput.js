import {View, Text, TextInput, StyleSheet} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

const GoTextInput = props => {
  const {
    placeholder,
    keyboardType,
    autoCapitalize,
    value,
    iconName,
    autoCorrect,
    title,
    hiddenIcon,
    hiddenOnPress,
    onChangeText,
    iconColor,
    maxLength,
    secureTextEntry,
  } = props;
  return (
    <View style={styles.headContainer}>
      <Text>{title}</Text>
      <View style={styles.container}>
        <Icon name={iconName} size={20} color={iconColor} style={styles.icon} />
        <TextInput
          maxLength={maxLength}
          style={styles.input}
          value={value}
          placeholder={placeholder}
          keyboardType={keyboardType}
          autoCapitalize={autoCapitalize}
          autoCorrect={autoCorrect}
          onChangeText={onChangeText}
          secureTextEntry={secureTextEntry}
        />
        {hiddenIcon ? (
          <Icon
            name={hiddenIcon}
            size={20}
            color="gray"
            style={[styles.icon]}
            onPress={hiddenOnPress}
          />
        ) : null}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headContainer: {
    marginTop: 5,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginVertical: 5,
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
