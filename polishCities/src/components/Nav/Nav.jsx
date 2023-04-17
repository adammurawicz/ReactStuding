import s from './Nav.module.css'
import c from '../../variables.css'
import NavMobile from './NavMobile/NavMobile'
import NavDesktop from './NavDesktop/NavDesktop'
import PopUp from './PopUp/PopUp'
import { mainCities } from '../../data'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';



function Nav (props) {

const cities = mainCities

const [icon, setIcon] = useState(<FontAwesomeIcon icon={faBars} className={s.bars}></FontAwesomeIcon>)
    
const toggleIconAndPopUp = () => {

    const currentIcon = icon.props.icon.iconName
    const popUp = document.querySelector('.popUp')
    if(currentIcon == 'bars') {
        setIcon(<FontAwesomeIcon icon={faXmark} className={s.icon}/>)
        popUp.style.left = '0'
    } else {
        setIcon(<FontAwesomeIcon icon={faBars} className={s.icon}></FontAwesomeIcon>)
        popUp.style.left = '2000px'
    }
}

const onItemClick = (key, name, firstContent, secondContent, thirdContent, imgOne, imgTwo, crest) => {
    props.menuClicked(key, name, firstContent, secondContent, thirdContent, imgOne, imgTwo, crest)
}

const bothFunction = (key, name, firstContent, secondContent, thirdContent, imgOne, imgTwo, crest) => {
    toggleIconAndPopUp()
    onItemClick(key, name, firstContent, secondContent, thirdContent, imgOne, imgTwo, crest)
}

    return (
        <nav>
        <div className={s.nav}>
            <NavMobile icon={icon} function={toggleIconAndPopUp}/>
            <NavDesktop cities={cities} function={onItemClick} name={props.name}/>
        </div>
            <PopUp function={bothFunction} cities={cities}/>
        </nav>
    )
}

export default Nav