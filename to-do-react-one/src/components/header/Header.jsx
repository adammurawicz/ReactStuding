import s from './Header.module.css'
import headerImg from '../../assets/headerImg.jpg'

export const Header = (props) => {
    
    return (
        <header className={s.header}>
            <h1>{props.title}</h1>
            <img className={s.img} src={headerImg} alt="colorful cards" />
            <p>{props.text}</p>
        </header>
    )
}