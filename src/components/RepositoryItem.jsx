import React from 'react';
import { View, Image, StyleSheet  } from 'react-native';
import Text from './Text';

const styles = StyleSheet.create({
    tinyLogo: {
      width: 50,
      height: 50,
      padding: 10
    },
    rowContainer: {
        flexDirection: 'row',
        padding: 10
      },
    rowContainer2: {
        flexDirection: 'row',
        justifyContent: 'space-around',
      },
    columnContainer: {
        flexDirection: 'column',
        backgroundColor: 'white'
      },
    columnContainer2: {
        flexDirection: 'column',
        paddingLeft: 15,
      },
    language: {
        backgroundColor: '#0366d6',
        alignSelf: 'flex-start',
        borderRadius: 10,
        padding:10,
        marginTop: 10,
        color: '#ffffff'
    },
    textPadding: {
        paddingTop: 10
    }
   
   
  });

const RepositoryItem = ({ item }) => (

    
    <View style={styles.columnContainer} >

        <View style={styles.rowContainer}>
            <Image
                 style={styles.tinyLogo}
                 source={{uri: item.ownerAvatarUrl}}
              />
              
              <View style={styles.columnContainer2}>
                <Text style={styles.textPadding} fontWeight='bold'>{item.fullName}</Text>
                <Text style={styles.textPadding} color='textSecondary' >{item.description}</Text>
                
                <Text style={styles.language}>{item.language}</Text>
              </View>
            
            
        </View >

        <View style={styles.rowContainer2}>
            <View style={styles.columnContainer}>
                <Text >{item.stargazersCount >= 1000 ? (item.stargazersCount/1000).toFixed(1) + 'k' : item.stargazersCount}</Text>
                <Text color='textSecondary'>Stars</Text>
            </View>
            <View style={styles.columnContainer}>
                <Text >{item.forksCount >= 1000 ? (item.forksCount/1000).toFixed(1) + 'k' : item.forksCount}</Text>
                <Text color='textSecondary'>Forks</Text>
            </View>
            <View style={styles.columnContainer}>
                <Text >{item.reviewCount}</Text>
                <Text color='textSecondary'>Reviews</Text>
            </View>
            <View style={styles.columnContainer}>
                <Text >{item.ratingAverage}</Text>
                <Text color='textSecondary'>Rating</Text>
            </View>

        </View>

       
        
    </View>
  );

  export default RepositoryItem;