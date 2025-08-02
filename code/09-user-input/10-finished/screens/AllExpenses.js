import { useContext , useState , useEffect } from 'react';

import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput';
import { ExpensesContext } from '../store/expenses-context';
import { fetchExpenses } from '../util/http';

function AllExpenses() {
  const expensesCtx = useContext(ExpensesContext);
  const [fetchedExpenses, setFetchedExpenses] = useState([]);

  


  useEffect(() => {
    async function getExpenses() {
      try {
        const responseData = await fetchExpenses();
  
        console.log('Raw fetched data:', responseData);

        const expenses = Object.keys(responseData || {}).flatMap((key) => {
          const expense = responseData[key];
          console.log(`Parsing expense for key=${key}`, expense);
        
          if (!expense || !expense.amount || !expense.date || !expense.description) {
            console.warn('Skipping invalid expense:', expense);
            return [];
          }
        
          return {
            id: key,
            amount: expense.amount,
            date: new Date(expense.date),
            description: expense.description,
          };
        });
        
  
        setFetchedExpenses(expenses);
        console.log('Transformed expenses:', expenses);
      } catch (error) {
        console.error('Error fetching expenses:', error);
      }
    }
  
    getExpenses();
  }, []);
  

 


      
  return (
    <ExpensesOutput
      expenses={fetchedExpenses.length > 0 ? fetchedExpenses : expensesCtx.expenses}

      expensesPeriod="Total"
      fallbackText="No registered expenses found!"
    />
  );
}

export default AllExpenses;
