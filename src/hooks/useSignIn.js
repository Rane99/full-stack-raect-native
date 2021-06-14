
import { useApolloClient, useMutation } from '@apollo/client';
import { AUTHORIZE } from '../graphql/mutations';
import useAuthStorage from '../hooks/useAuthStorage';
import { useHistory } from 'react-router-native';
const useSignIn = () => {

    const [mutate, result] = useMutation(AUTHORIZE);
    const apolloClient = useApolloClient();
    const authStorage = useAuthStorage();
    const history = useHistory();
    
  
    const signIn = async ({ username, password }) => {
        const credentials = { username, password };
      
        
      const resulte = await mutate({ variables: { credentials } });
      console.log(resulte.data.authorize.accessToken);
      
      
    const { data } = resulte;

    if (data && data.authorize) {
      await authStorage.setAccessToken(data.authorize.accessToken);
      apolloClient.resetStore();
      history.push('/');
    }

    return resulte;
      
    };
  
    
    return [signIn, result];
  };

  export default useSignIn;