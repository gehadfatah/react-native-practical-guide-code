import AuthContent from '../components/Auth/AuthContent';
import  {createUser}  from './utils/auth';
function SignupScreen({ navigation }) {

  const handleAuthenticate = ({ email, password }) => {
    authenticateApicall(email, password);
  };
  return <AuthContent  navigation={navigation}       onAuthenticate={handleAuthenticate}/>;
}
function authenticateApicall(email, password) {
  console.log('authenticateApicall inputs:', { email, password });

  createUser(email, password)
    .then(response => {
      console.log('User created successfully:', response.data);
    })
    .catch(error => {
      console.error('Error creating user:', error.response.data);
      Alert.alert('Authentication failed', 'Could not create user. Please try again later.');
    }
  );
}
export default SignupScreen;
