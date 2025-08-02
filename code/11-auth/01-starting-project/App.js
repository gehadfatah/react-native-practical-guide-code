import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';

import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import { Colors } from './constants/styles';
import {AuthenticationProvider} from './store/auth-context';
import { useContext } from 'react';
import { AuthContext } from './store/auth-context';
import IconButton from './components/ui/IconButton';

const Stack = createNativeStackNavigator();

function AuthStack() {
  
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: Colors.primary500 },
        headerTintColor: 'white',
        contentStyle: { backgroundColor: Colors.primary100 },
      }}
    >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
    </Stack.Navigator>
  );
}

function AuthenticatedStack( { context }) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: Colors.primary500 },
        headerTintColor: 'white',
        contentStyle: { backgroundColor: Colors.primary100 },
        
      }}
    >
     <Stack.Screen
  name="Welcome"
  component={WelcomeScreen}
  options={({ navigation, route }) => {
    const authContext = useContext(AuthContext);
    return {
      headerRight: () => (
        <IconButton
          size={24}
          icon="log-out-outline"
          color="white"
          onPress={() => authContext.logout()}
        />
      ),
    };
  }}
/>

{/* <Stack.Screen name="Welcome" component={WelcomeScreen} 
      headerRight={(tintColor) => (
        <Iconbutton size={24} icon='exit' color={tintColor}
         
          onPress={() => {
          
            context.logout();
          }}
        />
      )} */}
    </Stack.Navigator>
  );
}

function Navigation() {
  const authContext = useContext(AuthContext);

  return (
     
    <NavigationContainer>
    {authContext.isAuthenticated ? <AuthenticatedStack context = {authContext}/> : <AuthStack />}
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <AuthenticationProvider>
        <Navigation />
      </AuthenticationProvider>
    </>
  );
}
