import { ImageBackground, StyleSheet, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import StartGameScreen from './screens/StartGameScreen';
export default function App() {

  return (
    <LinearGradient   colors={['#4e0329', '#ddb52f']}
    style={styles.rootScreen}>
    <ImageBackground resizeMode='cover' source={require('./assets/images/unsplash_sea.jpg')}
   style ={styles.rootScreen}  
   imageStyle={{ opacity: 0.25 }}>
      <StartGameScreen />
    </ImageBackground>
    
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1
    }
});
