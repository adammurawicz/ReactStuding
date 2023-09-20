import s from './Header.module.css'
import headerImg from '../../assets/headerImg.jpg'

export const Header = () => {
    
    return (
        <header>
            <h1 className={s.title}>Split your bill</h1>
            <img className={s.img} src={headerImg} alt='wallet and money'></img>
            <p className={s.p}>Calculate how much you would pay!</p>
        </header>
    )
}