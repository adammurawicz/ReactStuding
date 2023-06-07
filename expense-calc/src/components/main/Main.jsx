import s from './Main.module.css'
import { Expense } from './expense/Expense'
import { Revenue } from './revenue/Revenue'
import { Income } from './income/Income'
import shopping from '../../assets/header.jpg'

export function Main () {

    return (
        <main>

            <div className={s.wrapper}>
                <div>
                    <Expense/>
                    <Revenue/>
                </div>
                <Income/>
            </div>

            <img src={shopping} alt='a lot of shopping' className={s.img}/>

        </main>
    )
}