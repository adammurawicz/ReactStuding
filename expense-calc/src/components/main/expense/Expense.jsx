import s from './Expense.module.css'
import { ExpenseInput } from './expenseInput/ExpenseInput'
import { ExpenseItem } from './expenseItem/ExpenseItem'
import { useSelector } from 'react-redux'
import { ExpenseSum } from './expenseSum/ExpenseSum'


export function Expense () {
    
const expenseList = useSelector(store => store.EXPENSE.expenseList)    

    return (
        <div className={s.expense}>
            <ExpenseInput/>
            <ExpenseItem items={expenseList}/>
            <ExpenseSum/>
        </div>
    )
}