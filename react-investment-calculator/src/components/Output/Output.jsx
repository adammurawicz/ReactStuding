import s from './Output.module.css'

const style = {color: 'tomato'}

export const Output = (props) => {

    return (
        <div className={s.container}>
            <h2 className={s.heading}>Bills information</h2>
            <div className={s.wrapper}>

            <div className={s.items}>
            {  
            props.onDates ? 
           props.onDates.map((el) => {
                return  <p className={s.item} key={Math.random()}>{el}</p>
             }) :
             <p style={style}>No data</p>
            }
            </div>
            <div className={s.items}>
            { props.onPayments ?
            props.onPayments.map(el => (
                <p className={s.item} key={Math.random()}>{el}</p>
            )) : null
            }
            </div>
            </div>
        </div>
    )
}