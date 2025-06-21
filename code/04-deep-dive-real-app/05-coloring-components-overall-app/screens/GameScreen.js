import { Text,StyleSheet , View ,Alert, FlatList } from "react-native";
import Title from "../components/Title";
import NumberContainer from "../components/NumberContainer";
import { useState ,useEffect } from "react";
import PrimaryButton from "../components/PrimaryButton";
import {Ionicons} from '@expo/vector-icons';
import { Colors } from "react-native/Libraries/NewAppScreen";

let maxBoundry = 100;
let minBoundry = 1;

function generateRandomNumberBetween(min, max , exculde) {
  // if (min === max && min === userNumber) {
     
  //   correct(guessCount);
  //    return min;
  // }
  const randomNumber = Math.floor(Math.random() * (max - min )) + min;
  if (randomNumber === exculde) {
    return generateRandomNumberBetween(min, max, exculde);
  }else return randomNumber;
}

function GameScreen({userNumber, correct}) {

  const intialGuess = generateRandomNumberBetween(1, 100,userNumber);
  const [currentGuess, setCurrentGuess] = useState(intialGuess);
  const [guessCount, setGuessCount] = useState(0);
  const [guessHistory, setGuessHistory] = useState([intialGuess]);
  useEffect(() => {
   if(currentGuess === userNumber) {
      console.log('User guessed correctly!');
      correct(guessCount);
    }
  }, [userNumber, currentGuess, correct]);
   // run next if game run again for first time 
 useEffect(() => {
  minBoundry = 1;
  maxBoundry = 100;
  }, []);
  function handleGuessHigherOrLower(direction) {
    // Logic to handle the guess
    // For example, you can compare the currentGuess with the user's number
    // and update the game state accordingly.
    if (direction === 'lower' && currentGuess < userNumber||
      direction === 'higher' && currentGuess > userNumber
    ) {
      Alert.alert('Lier', ' your liar it not like this .', [
        { text: 'OK', style: 'cancel' }
      ]);
      return; 
    } 
    console.log(`Current Guess: ${currentGuess}, User Number: ${userNumber}`);
 
    if(direction === 'higher') {
      console.log('User guessed Higher');
      minBoundry = currentGuess + 1
    }
    else if(direction === 'lower') {
      maxBoundry = currentGuess 
      console.log('User guessed Lower');
    }
    const newGuess = generateRandomNumberBetween(minBoundry, maxBoundry, currentGuess);
    setCurrentGuess(newGuess);
    setGuessCount(prevGuessCount => prevGuessCount + 1);

    
   console.log(`New Guess: ${newGuess}, Guess Count: ${guessCount}`);
    setGuessHistory(prevHistory => [...prevHistory, newGuess]);
    console.log(`Guess History: ${guessHistory}`);
  }


  return (
    <View style={styles.inputContainer}>
      <Title  > Opponent's Guess</Title>
      <NumberContainer>
        {currentGuess}
      </NumberContainer>
      <View style={styles.actions} >
        <Text style={styles.actionTitle} >Higher or Lower ? </Text>
        
        <PrimaryButton onPressGetStarted = {handleGuessHigherOrLower.bind(this,'higher')} ><Ionicons
            name='add' size={24} color="white" />
      
          </PrimaryButton>
        <PrimaryButton onPressGetStarted ={handleGuessHigherOrLower.bind(this,'lower')} >
          <Ionicons
            name='remove' size={24} color="white" />
        </PrimaryButton>

       
      </View>
      <View style={{ flex: 1 , padding: 15 }}>
      {guessHistory.length > 0 && (
        <View >
          {/* <Text style={styles.text}>Guess History:</Text> */}
          {/* {guessHistory.map((guess, index) => (
            <Text key={guess} style={styles.text}>
              Guess {index + 1} : {guess}
            </Text>
          ))} */}

          <FlatList data={guessHistory}
            keyExtractor={(item) => item.toString()} 
            renderItem={({ item, index }) => (
              <View style={{ flexDirection: 'row', alignItems: 'center', borderColor: 'black', borderWidth: 1, marginVertical: 5 ,backgroundColor: Colors.accent500 ,width: '100%', padding: 8 , elevation : 4 , borderRadius: 40}}>
              <Ionicons name='checkmark' size={24} color="black" style={{ marginHorizontal: 8 }} />
              <Text style={styles.text}>
                list {index + 1}: {item}
              </Text>
              </View>
            )
          }></FlatList>
        </View>
      )}
      </View>

    </View>
  );
}
export default GameScreen;
const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    color: 'black',
    padding: 12,
  },
  inputContainer: {
    marginTop: 80,

    flex: 1,
    flexDirection: 'column',
    },
  actions: {
  
    width: '100%',
    paddingHorizontal:24,
    color: 'black',
    flexDirection: 'column',
  
  },
  actionTitle: {
    fontSize: 20,
    color: 'black',
    padding: 12,
    textAlign: 'center',
  },
});