import s from './RevenueSum.module.css'
import { useSelector } from 'react-redux'

export function RevenueSum () {

    const revenueList = useSelector((store) => store.REVENUE.revenueList)
    const totalRevenue = revenueList.reduce((acc, expense) => {
        return Number.parseFloat(acc) + Number.parseFloat(expense.price)
    }, 0)

    return (
        <div className={s.revenueSumWrapper}>
            <p>Total ravenue: {totalRevenue}$ </p>
        </div>
    )
}

