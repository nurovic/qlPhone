import {TextInput} from 'react-native';
import React from 'react';

export default function Input({
  placeholder,
  value,
  handleChangeField,
  focus,
  onBlur,
  autoCorrect,
  secureTextEntry,
}: any) {
  return (
    <TextInput
      placeholder={placeholder}
      onFocus={focus}
      onBlur={onBlur}
      value={value}
      onChangeText={handleChangeField}
      autoCapitalize="none"
      autoCorrect={autoCorrect}
      style={{flex: 1}}
      secureTextEntry={secureTextEntry}
    />
  );
}
