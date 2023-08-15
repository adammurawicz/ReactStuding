import s from './Button.module.css'

export const Button = (props) => {
    
    return (
        <button className={s.btn} onClick={props.action}>{props.text}</button>
    )
}