import React, { useState, useCallback ,useContext } from 'react';
import { Alert , View, StyleSheet } from 'react-native';
import AuthContent from '../components/Auth/AuthContent';
import { loginUser } from './utils/auth';
import LoadingOverlay from '../components/ui/LoadingOverlay'; // ensure path/casing matches
import { AuthContext } from '../store/auth-context';
function LoginScreen({ navigation }) {
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const authContext = useContext(AuthContext);
  const authenticateApicall = useCallback(async (email, password) => {
    console.log('authenticateApicall inputs:', { email, password });
    if (typeof email !== 'string' || typeof password !== 'string') {
      Alert.alert('Invalid input', 'Email and password must be strings.');
      return;
    }

    setIsAuthenticating(true);
    try {
      const response = await loginUser(email.trim(), password);
      console.log('User logged in successfully:', response);
      authContext.login(response.data.idToken); // Assuming idToken is the token you need
      // proceed: e.g., navigation.replace('SomeScreen');
    } catch (error) {
      console.error(
        'Error logging in user:',
        error?.response?.data || error?.message || error
      );
      Alert.alert(
        'Authentication failed',
        'Could not log in. Please try again later.'
      );
      setIsAuthenticating(false);
    } finally {
     
    }
  }, []);

  const handleAuthenticate = ({ email, password }) => {
    authenticateApicall(email, password);
  };

  // if (isAuthenticating) {
  //   return <LoadingOverlay message="Logging in..." />;
  // }

  // return (
  //   <AuthContent
  //     isLogin
  //     navigation={navigation}
  //     onAuthenticate={handleAuthenticate}
  //   />
  // );


  return (
    <View style={styles.container}>
      <AuthContent
        isLogin
        navigation={navigation}
        onAuthenticate={({ email, password }) => authenticateApicall(email, password)}
      />
      {isAuthenticating && (
        <View style={StyleSheet.absoluteFill}>
          <LoadingOverlay message="Logging in..." />
        </View>
      )}
    </View>
  );
}

export default LoginScreen;
const styles = StyleSheet.create({
  container: { flex: 1 },
});