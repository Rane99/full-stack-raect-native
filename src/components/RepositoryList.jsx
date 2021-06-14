import React from 'react';
import { FlatList, View, StyleSheet, Text } from 'react-native';
import RepositoryItem from './RepositoryItem';
import { useQuery } from '@apollo/client';
import { GET_REPOSITORIES } from '../graphql/queries';



const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});



const ItemSeparator = () => <View style={styles.separator} />;

const renderItem = ({ item }) => (
    <RepositoryItem item={item} />
  );

const RepositoryList = () => {

  const result = useQuery(GET_REPOSITORIES);

  if ( result.loading ) {
    return <Text>loading...</Text>;
  }

  

  // Get the nodes from the edges array
  const repositoryNodes = result
    ? result.data.repositories.edges.map(edge => edge.node)
    : [];

  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={renderItem}
    />
  );
};

export default RepositoryList;