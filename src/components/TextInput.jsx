import React from 'react';
import { TextInput as NativeTextInput, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    font: {
        borderWidth:1,
        borderRadius:5,
      },
      fontRed: {
        borderWidth:1,
        borderRadius:5,
        borderColor: '#d73a4a'
      },
});

const TextInput = ({ style, error, ...props }) => {

  if (error){
    return <NativeTextInput style={styles.fontRed} {...props}  />;
  }

  return <NativeTextInput style={styles.font} {...props}  />;
};

export default TextInput;