import s from './Revenue.module.css'
import { RevenueInput } from './revenueInput/RevenueInput'
import { RevenueItems } from './revenueItems/RevenueItems'
import { useSelector } from 'react-redux'
import { RevenueSum } from './revenueItems/RevenueSum/RevenueSum'

export function Revenue () {

const revenueList = useSelector(store => store.REVENUE.revenueList)    


    return (
        <div className={s.revenue}>
            <RevenueInput/>
            <RevenueItems items={revenueList}/>
            <RevenueSum/>
        </div>
    )
}