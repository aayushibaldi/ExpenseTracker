import React, {useState} from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';
const NewExpense = (props)=>{
   const [displayForm, setDisplayForm] = useState(false);

   const displayFormHandler=()=>{
       setDisplayForm(true)
   }
   const stopDisplayFormHandler=()=>{
       setDisplayForm(false)
   }
    const saveExpenseDataHandler=(enteredExpenseData)=>{
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData);
        setDisplayForm(false)
    }
    return<div className="new-expense">
        {!displayForm && <button onClick={displayFormHandler}>
        Add New Expense</button>}
        { displayForm && <ExpenseForm onCancel={stopDisplayFormHandler} 
        onSaveExpenseData={saveExpenseDataHandler}></ExpenseForm>}
    </div>
}

export default NewExpense;