import s from './Income.module.css'
import { useSelector } from 'react-redux'

export function Income () {

const revenueList = useSelector((store) => store.REVENUE.revenueList)
const totalRevenue = revenueList.reduce((acc, expense) => {
    return Number.parseFloat(acc) + Number.parseFloat(expense.price)
}, 0)

const expenseList = useSelector((store) => store.EXPENSE.expenseList)
const totalExpense = expenseList.reduce((acc, expense) => {
    return Number.parseFloat(acc) + Number.parseFloat(expense.price)
}, 0)


    return (
        <div className={s.income}
        style={{
            color: totalRevenue - totalExpense > 0 ? 'green' : 'tomato'
        }}
        >
           Total: {totalRevenue - totalExpense}$
        </div>
    )
}