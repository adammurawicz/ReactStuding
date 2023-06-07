import s from './Revenue.module.css'
import { RevenueInput } from './revenueInput/RevenueInput'
import { RevenueItems } from './revenueItems/RevenueItems'

export function Revenue () {

    return (
        <div className={s.revenue}>
            <RevenueInput/>
            <RevenueItems/>
        </div>
    )
}