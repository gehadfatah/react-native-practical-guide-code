import { ImageBackground, StyleSheet, View ,SafeAreaView, ActivityIndicator} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import StartGameScreen from './screens/StartGameScreen';
import { useState } from 'react';
 import GameScreen from './screens/GameScreen'; 
import GameOverScreen from './screens/GameOverScreen';
import { useFonts} from 'expo-font';
import AppLoading from 'expo-app-loading';

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [correctNumber, setCorrectNumber] = useState(true);
  const [guessCount, setGuessCount] = useState(0);
  function confirmUserNumber(selectedNumber) {
    setUserNumber(selectedNumber);
    setCorrectNumber(false);
  }
  function correctHandleer(count) {
    setCorrectNumber(true);
   // setUserNumber(null);
    setGuessCount(count);
  }
  function onStartNewGame() {
    setUserNumber(null);
    setCorrectNumber(false);
    setGuessCount(0);
  }
  let screen = <StartGameScreen onConfirmNumber={confirmUserNumber} />;
  if (userNumber && !correctNumber) {
    screen = <GameScreen userNumber={userNumber} correct={correctHandleer} />;
  } else if (userNumber && correctNumber) {
    screen = <GameOverScreen userNumber={userNumber} roundsNumber={guessCount} onStartNewGame={onStartNewGame} />;
  }


  const [fontsLoaded] = useFonts({
    'roboto_thin': require('./assets/fonts/roboto_thin.ttf'),
  });
  if (!fontsLoaded) {
    return <>
    
    <View style={styles.loadingContainer}>
   <AppLoading />
    <ActivityIndicator size="large" color="#ddb52f" />
    </View>

    </>
  }
  return (
    <LinearGradient   colors={['#4e0329', '#ddb52f']}
    style={styles.rootScreen}>
    <ImageBackground resizeMode='cover' source={require('./assets/images/unsplash_sea.jpg')}
   style ={styles.rootScreen}  
   imageStyle={{ opacity: 0.25 }}>
<View style={styles.rootScreen}> 
        {/* {!userNumber  ? (
          <StartGameScreen onConfirmNumber={confirmUserNumber} />
        ) : (
          correctNumber ? (
            <GameOverScreen userNumber={userNumber} roundsNumber={guessCount} onStartNewGame={onStartNewGame} />
          ) : (
          <GameScreen userNumber={userNumber} correct={(count ) => correctHandleer.bind(this, count)} />
        )
        )} */
        screen }
        
     </View>
    </ImageBackground>
    
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1
    },
    loadingContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#4e0329',
    }
});
