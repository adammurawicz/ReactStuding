import { useSelector } from 'react-redux'
import s from './ExpenseSum.module.css'

export function ExpenseSum () {

    const expenseList = useSelector((store) => store.EXPENSE.expenseList)
    const totalExpense = expenseList.reduce((acc, expense) => {
        return Number.parseFloat(acc) + Number.parseFloat(expense.price)
    }, 0)

    return (
        <div className={s.expenseSumDiv}>
            <p>Total expense: {totalExpense}$</p>
        </div>
    )
}