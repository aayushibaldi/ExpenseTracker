import React , {useState} from 'react';
import ExpensesList from './ExpensesList';
import './Expenses.css';
import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';
const Expenses = (props) => {

  const [filteredYear , setFilteredYear] = useState('2020')

  const filterChangeHandler=(selectedYear)=>{
    setFilteredYear(selectedYear)
    //console.log(selectedYear)
  }

  const filteredExpenses = props.items.filter((item)=>{
    return item.date.getFullYear().toString()=== filteredYear
  })

 
  return (
    <div>
      
        <Card className='expenses'>
          <ExpenseFilter selected = {filteredYear} onFilter = {filterChangeHandler}></ExpenseFilter>
          <ExpensesList items = {filteredExpenses}></ExpensesList>
        </Card>
    </div>
  )
}

export default Expenses
