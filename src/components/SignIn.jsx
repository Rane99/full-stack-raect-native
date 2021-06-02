import React from 'react';
import { Text, Pressable, View, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import FormikTextInput from './FormikTextInput';
import * as yup from 'yup';
import theme from '../theme';


const validationSchema = yup.object().shape({
  username: yup
    .string()
    .required('Weight is required'),
  password: yup
    .string()
    .required('Height is required'),
});

const initialValues = {
  username: '',
  password: '',
};

const styles = StyleSheet.create({
    rowContainer: {
        flexDirection: 'column',
        padding: 15
        
      },
      button: {
        backgroundColor: '#0366d6',
        fontSize: 20,
        borderRadius: 5,
        paddingTop: 10,
        paddingBottom: 10,
        marginTop: 10,
        textAlign: 'center',
        fontFamily: theme.fonts.platformFonts,
        color: "white"
        
      },
  });

const SignIn = ({ onSubmit }) => {
    return (
      <View style={styles.rowContainer}>
        <FormikTextInput name="username" placeholder="Username" />
        <FormikTextInput name="password" placeholder="Password" secureTextEntry/>
        <Pressable onPress={onSubmit}>
          <Text style={styles.button} >Sign In</Text>
        </Pressable>
      </View>
    );
  };

const SignInForm = () => {
    const onSubmit = (values) => {
        console.log(values);
      };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
      {({ handleSubmit }) => <SignIn onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default SignInForm;