import React from 'react';
import { View, StyleSheet, Text, ScrollView, Pressable } from 'react-native';
import Constants from 'expo-constants';
import theme from '../theme';
import { Link } from "react-router-native";

import { useApolloClient, useQuery } from '@apollo/client';
import { useHistory } from 'react-router-native';

import useAuthStorage from '../hooks/useAuthStorage';
import { GET_AUTHORIZED_USER } from '../graphql/queries';

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

  const apolloClient = useApolloClient();
  const authStorage = useAuthStorage();
  const history = useHistory();

  const { data } = useQuery(GET_AUTHORIZED_USER);
  const authorizedUser = data ? data.authorizedUser : undefined;

  console.log("Authorized user", authorizedUser);

  const onSignOut = async () => {
    console.log("log out");
    await authStorage.removeAccessToken();
    apolloClient.resetStore();
    history.push('/');
  };


  return <View style={styles.container}>
    <ScrollView horizontal={true}>
    <Link to="/">
      <Text style={styles.texitem}>Repositories</Text>
      </Link>
      


      {authorizedUser ? (
          <Pressable onPress={onSignOut}><Text style={styles.texitem}>Sign Out</Text></Pressable>
        ) : (
          <Link to="/signin">
              <Text style={styles.texitem}>Sign In</Text>
          </Link>
        )}


    </ScrollView>
      
  </View>;
};

export default AppBar;