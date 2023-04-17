import s from './Header.module.css'
import headerImg from '../../assets/header.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Header (props) {
    return (
        <header className={s.header}>
            {<img src={props.name ? props.imgOne : headerImg} className={s.headerImg}></img>}
            <p>{props.name ? props.name : 'Read about polish cities'}</p>
            <div className={s.dark}/>
        </header>
    )
}

export default Header