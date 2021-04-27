import Expenses from './components/Expenses/Expenses'
import NewExpense from './components/NewExpense/NewExpense'; 
import React, {useState} from 'react';

const sampleExpenses = [
  {
    id: 'e1',
    title: 'Note Book',
    amount: 94.12,
    date: new Date(2020, 7, 14)
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28)
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12)
  }
]


const App = () => {

  const [expenses, setExpenses] = useState(sampleExpenses)

  const addExpenseHandler = expense =>{
    setExpenses((prevExpenses)=>{
      return [expense, ...prevExpenses]
    })
  }
  
  return (
    <div className='App'>
      <NewExpense onAddExpense ={addExpenseHandler}></NewExpense>
      <Expenses items={expenses} /> 
    </div>
  )

  // return(
  //   React.createElement('div',{},
  //   React.createElement('h2',{},'Lets get Started!'),
  //   React.createElement(Expenses,{items: expenses}))
  // )
}

export default App

