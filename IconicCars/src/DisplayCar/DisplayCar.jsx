import s from './DisplayCar.module.css'
import { useState } from 'react'

function DisplayCar (props) {

    const [content, setContent] = useState(false)

    const toggleContent = () => {
        if (content === false) {
            setContent(true)
        } else {
            setContent(false)
        }
    }

    return (
        <div className={s.wrapper}>
            <h2>
            {props.car ? props.car : `Please select a car`}
            </h2>
            <p>
            {props.years}
            </p>

            <div>
                {props.description ? 
                <div className={s.contentContainer}> 
                    <button onClick={toggleContent}>Toggle decription</button>
                    <p>{content ? props.description : ''}</p>  
                </div>
                : ''}
            </div>
            <div className='s.imgContainer'>
            {props.url ? <img src={props.url}></img> : ''}
            </div>
        </div>
    )
}

export default DisplayCar