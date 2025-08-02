import { View ,StyleSheet} from 'react-native';

import Input from './Input';
import { GlobalStyles } from '../../constants/styles';

function ExpenseForm() {
  function amountChangedHandler() {}

  return (
    <View style={styles.inputsSection}>
      <Input
        label="Amount"
        textInputConfig={{
          keyboardType: 'decimal-pad',
          onChangeText: amountChangedHandler,
        }}
      />
      <Input
        label="Date"
        textInputConfig={{
          placeholder: 'YYYY-MM-DD',
          maxLength: 10,
          onChangeText: () => {},
        }}
      />
      <Input
        label="Description"
        textInputConfig={{
          multiline: true,
          minHeight: 100,
          textAlignVertical: 'bottom', // for Android to align text at the top
          // autoCapitalize: 'none'
          // autoCorrect: false // default is true
        }}
      />
    </View>
  );
}

export default ExpenseForm;

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