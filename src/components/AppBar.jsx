import React from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import theme from '../theme';
import { Link } from "react-router-native";

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    flexDirection: 'row',
    paddingBottom:30,
    backgroundColor: theme.colors.appBar
    
    // ...
  },
    texitem: {
        color: '#ffffff',
        fontSize: 20,
        paddingTop: 40,
        paddingLeft: 20,
        
    }
  // ...
});

const AppBar = () => {
  return <View style={styles.container}>
    <ScrollView horizontal={true}>
    <Link to="/">
      <Text style={styles.texitem}>Repositories</Text>
      </Link>
      <Link to="/signin">
      <Text style={styles.texitem}>Sign In</Text>
      </Link>

    </ScrollView>
      
  </View>;
};

export default AppBar;