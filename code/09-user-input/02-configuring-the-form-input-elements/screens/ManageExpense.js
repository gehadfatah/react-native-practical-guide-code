import { use, useContext, useLayoutEffect , useState , useEffect } from 'react';
import { StyleSheet, View , TextInput } from 'react-native';

import ExpenseForm from '../components/ManageExpense/ExpenseForm';
import Button from '../components/UI/Button';
import IconButton from '../components/UI/IconButton';
import { GlobalStyles } from '../constants/styles';
import { ExpensesContext } from '../store/expenses-context';

function ManageExpense({ route, navigation }) {

  useEffect(() => {
    if (isEditing && editedExpense) {
      setEditedExpenseDescription(editedExpense.description);
      setEditedExpenseAmount(editedExpense.amount.toString());
      setEditedExpenseDate(editedExpense.date.toISOString().split('T')[0]);
    } else {
      setEditedExpenseDescription('');
      setEditedExpenseAmount('');
      setEditedExpenseDate('');
    }
  }, [isEditing, editedExpense]);
  
  const expensesCtx = useContext(ExpensesContext);

  const editedExpenseId = route.params?.expenseId;
  const isEditing = !!editedExpenseId;
  const editedExpense = expensesCtx.expenses.find(
    (expense) => expense.id === editedExpenseId
  );
  var [editedExpenseDescription , setEditedExpenseDescription ]= useState('');
  var [editedExpenseAmount , setEditedExpenseAmount ]= useState(editedExpense ? editedExpense.amount.toString() : '');
  var [editedExpenseDate , setEditedExpenseDate ]= useState('');
  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? 'Edit Expense' : 'Add Expense',
    });
  }, [navigation, isEditing]);

  function deleteExpenseHandler() {
    expensesCtx.deleteExpense(editedExpenseId);
    navigation.goBack();
  }

  function cancelHandler() {
    navigation.goBack();
  }

  function confirmHandler() {
    if (isEditing) {
      expensesCtx.updateExpense(
        editedExpenseId,
        {
          description: editedExpenseDescription,
          amount: editedExpenseAmount,
          date: new Date(editedExpenseDate),
        }
      );
    } else {
      expensesCtx.addExpense({
        description: 'Test',
        amount: 19.99,
        date: new Date('2022-05-19'),
      });
    }
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      {/* <ExpenseForm /> */}
      <View style={styles.buttons}>
        <Button style={styles.button} mode="flat" onPress={cancelHandler}>
          Cancel
        </Button>
        <Button style={styles.button} onPress={confirmHandler}>
          {isEditing ? 'Update' : 'Add'}
        </Button>
      </View>
      <View  style={styles.inputsSection}>
        <TextInput
          style={styles.input}
          placeholder="Description"
          value={editedExpenseDescription}
          onChangeText={(text) => setEditedExpenseDescription ( text)}
          placeholderTextColor={GlobalStyles.colors.primary200}
        />
        <TextInput
          style={styles.input}
          placeholder="Amount"
          value={editedExpenseAmount}
          onChangeText={(text) => setEditedExpenseAmount ( text)}
          placeholderTextColor={GlobalStyles.colors.primary200}
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          onChangeText={(text) => setEditedExpenseDate( text)}
          placeholder="Date (YYYY-MM-DD)"
          value= {editedExpenseDate}
          placeholderTextColor={GlobalStyles.colors.primary200}
        />
      </View>
      {isEditing && (
        <View style={styles.deleteContainer}>
          <IconButton
            icon="trash"
            color={GlobalStyles.colors.error500}
            size={36}
            onPress={deleteExpenseHandler}
          />
        </View>
      )}
    </View>
  );
}

export default ManageExpense;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary800,
  },
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
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    minWidth: 120,
    marginHorizontal: 8,
  },
  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: GlobalStyles.colors.primary200,
    alignItems: 'center',
  },
});
