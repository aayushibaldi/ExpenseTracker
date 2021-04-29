import Expenses from './components/Expenses/Expenses'
import NewExpense from './components/NewExpense/NewExpense'; 
import React, {useState} from 'react';

const sampleExpenses = []


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

