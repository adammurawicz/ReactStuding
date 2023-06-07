import s from './Expense.module.css'
import { ExpenseInput } from './expenseInput/ExpenseInput'
import { ExpensesItems } from './expenseItems/ExpensesItems'

export function Expense () {
    

    return (
        <div className={s.expense}>
            <ExpenseInput/>
            <ExpensesItems/>
        </div>
    )
}