import { useState } from 'react'
import s from './Footer.module.css'


function Footer (props) {
    
    return (
        
        <footer className={s.footer}>
            <p>Adam Murawicz© {props.currentYear}</p>
        </footer>
    )
}

export default Footer