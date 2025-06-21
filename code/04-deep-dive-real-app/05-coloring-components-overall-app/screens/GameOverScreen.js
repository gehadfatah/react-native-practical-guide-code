
import { View, Text, Button } from 'react-native';
import PrimaryButton from '../components/PrimaryButton';


function GameOverScreen({ userNumber, roundsNumber, onStartNewGame }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Game Over!</Text>
      <Text style={{ fontSize: 18, marginBottom: 10 }}>
        Your number was: {userNumber}
      </Text>
      <Text style={{ fontSize: 18, marginBottom: 20 }}>
        Total rounds: {roundsNumber}
      </Text>
      <PrimaryButton onPressGetStarted={onStartNewGame}>Start New Game</PrimaryButton>
    </View>
  );
}
export default GameOverScreen;