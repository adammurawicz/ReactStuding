import s from './Header.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalculator } from '@fortawesome/free-solid-svg-icons'


export function Header () {

    return (
        <header>
            <p>Calculate your spending</p>
            <FontAwesomeIcon icon={faCalculator} className={s.icon}/>
        </header>
    )
}