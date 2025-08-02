import { StyleSheet, Text, View  , Button} from 'react-native';
import { useContext } from 'react';
import { AuthContext } from '../store/auth-context';
function WelcomeScreen() {
  const authContext = useContext(AuthContext);
  function logoutHandler() {
    authContext.logout();
  }
  return (
    <View style={styles.rootContainer}>
      <Text style={styles.title}>Welcome!</Text>
      <Text>You authenticated successfully!</Text>
      <Button title='logout'  onPress={logoutHandler}></Button>
    </View>
  );
}

export default WelcomeScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 32,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
});
