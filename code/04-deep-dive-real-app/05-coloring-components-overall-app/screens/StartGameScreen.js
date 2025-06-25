import { TextInput, View, StyleSheet, Alert, KeyboardAvoidingView, ScrollView } from 'react-native';

import PrimaryButton from '../components/PrimaryButton';
import { useState } from 'react';
import Title from '../components/Title';



function StartGameScreen({ onConfirmNumber }) {
  const [enteredNumber, setEnteredNumber] = useState('');

  function handleInputChange(text) {
    console.log(`Input changed: ${text}`);
    setEnteredNumber(text);
   }
   function confirmInputHandler() {
    const chosenNumber = parseInt(enteredNumber);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      console.log('Invalid number! Please enter a number between 1 and 99.');
      Alert.alert(
        'Invalid Number!',
        'Please enter a number between 1 and 99.',
        [{ text: 'Okay', style: 'default', onPress: resetInputHandler }]
      );
      return;
    }
    console.log(`valid number: ${chosenNumber}`);

    // Here you can add logic to start the game with the chosen number
    onConfirmNumber(chosenNumber);
  }
  function resetInputHandler() {
    console.log('Input reset');
    setEnteredNumber('');
  }
  return (
    <ScrollView >
    <KeyboardAvoidingView style={{ flex: 1 }} behavior="position" keyboardVerticalOffset={30}>
    <View style={{ flex: 1, flexDirection: 'column' , alignItems: 'stretch' , marginTop: 150 }}>
    <Title>Guess My Number</Title>    
   
  

    <View style={styles.inputContainer}>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType="number-pad"
        autoCapitalize="none"
        autoCorrect={false}
        value ={enteredNumber}
        onChangeText={handleInputChange}
      />
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPressGetStarted={resetInputHandler} >Reset</PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPressGetStarted={confirmInputHandler}>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
    </View>
    </KeyboardAvoidingView>
    </ScrollView>
  );
}

export default StartGameScreen;

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
   
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: '#3b0329',
    borderRadius: 8,
    elevation: 4,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
    keyboardType: 'number-pad',
  },
  numberInput: {
    height: 70,
    width: 50,
    fontSize: 32,
    borderBottomColor: '#ddb52f',
    borderBottomWidth: 2,
    color: '#ddb52f',
    marginVertical: 8,
    fontFamily: 'roboto_thin',
    textAlign: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  buttonContainer: {
    flex: 1
  }
});
