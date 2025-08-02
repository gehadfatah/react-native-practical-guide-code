import { Text, TextInput, View ,StyleSheet} from 'react-native';
import { GlobalStyles } from '../../constants/styles';

function Input({ label, textInputConfig }) {
  return (
    <View>
      <Text style={{color:'white'}}>{label}</Text>
      <TextInput {...textInputConfig} style={styles.input}/>
    </View>
  );
}

export default Input;

const styles = StyleSheet.create({
  inputsSection: {
      marginTop: 16,
      padding: 16,
      backgroundColor: GlobalStyles.colors.primary700,
      borderRadius: 8,
    },
    input: {
      marginVertical: 8,  
      padding: 12,
      backgroundColor: GlobalStyles.colors.primary100,
      borderRadius: 6,
      color: GlobalStyles.colors.primary800,
      fontSize: 16,
    }
});