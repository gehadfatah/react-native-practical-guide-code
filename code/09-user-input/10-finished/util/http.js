import axios  from "axios";

export function storeExpense(expense) {
  return axios.post("https://todotaskapp-f9e7b.firebaseio.com/expenses.json", expense);
}

export function fetchExpenses() {
  return axios.get("https://todotaskapp-f9e7b.firebaseio.com/expenses.json");
}


export function deleteExpense(id) {
  return axios.delete(`https://todotaskapp-f9e7b.firebaseio.com/expenses/${id}.json`);
}

export function updateExpense(id, expense) {
  return axios.put(`https://todotaskapp-f9e7b.firebaseio.com/expenses/${id}.json`, expense);
}