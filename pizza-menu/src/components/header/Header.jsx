import s from './Header.module.css'
import deliveryImg from '../../assets/delivery.png'

export function Header () {

    return (
        <div>
            <h1>The best take away Italian food in this city!</h1>
            <img src={deliveryImg}/>
            <h3>Never stop eating pizza.</h3>
        </div>
    )
}