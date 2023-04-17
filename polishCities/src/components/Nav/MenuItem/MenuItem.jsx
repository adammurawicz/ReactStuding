import React from 'react'
import s from './MenuItem.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

function MenuItem (props) {

    const action = (key, name, firstContent, secondContent, thirdContent, imgOne, imgTwo, crest) => {
        props.function(key, props.name, props.firstContent, props.secondContent, props.thirdContent, props.imgOne, props.imgTwo, props.crest)
    }

    const closeFunction = () => {
        action()
    } 

    return <p className={s.menuItem}
            onClick={action}
            style={props.isSelected ? 
                {'fontSize' : '1.3rem',
                'lineHeight' : '1rem'
                } 
                : null}
               >
            {props.name}
        </p>
}


export default MenuItem