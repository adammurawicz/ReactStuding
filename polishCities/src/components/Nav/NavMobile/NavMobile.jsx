import s from './NavMobile.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import Logo from '../Logo/Logo';
import { useState } from 'react';

function NavMobile (props) {
    

    const action = () => {
        props.function()
    }

    return (
        <div className={s.navMobile}>
            <Logo/>
            <button className={`${s.burger} burger`} onClick={action}>
                {props.icon}
            </button>
        </div>
    )
}

export default NavMobile