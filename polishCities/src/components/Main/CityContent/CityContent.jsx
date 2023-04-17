import s from './CityContent.module.css'
import { useState } from 'react'

function CityContent (props) {

    const [moreContent, setMoreContent] = useState('')
    const toggleContent = () => {
        if(moreContent == true) {
            setMoreContent(false)
        } else {
            setMoreContent(true)
        }
    }

    const [photos, setPhotos] = useState('')
    const togglePhotos = () => {
        if(photos == true) {
            setPhotos(false)
        } else {
            setPhotos(true)
        }
    }

    return (
        <div>
            

            <div className={s.cityContentWrapperOne}>
                <img src={props.crest} alt={`Crest of ${props.name}`} className={s.crestImg}></img>
                <h1 className={s.heading}>{props.name}</h1>
            </div>

            <p className={s.pCity}>{props.firstContent}</p>

            <div className={s.cityContentWrapperTwo}>
                <button onClick={toggleContent} className={s.toggleBtn} >Toggle more content</button>
                <button onClick={ togglePhotos} className={s.toggleBtn} >Show {props.name} pictures</button>
            </div>

    
            {moreContent ?
                <div>
                    <p className={s.pCity}>{props.secondContent}</p> 
                    <p className={s.pCity}>{props.thirdContent}</p>
                </div>
                        : null
            }
            

            {
                photos ?
                    <div className={s.cityContentWrapperThree}>
                        <img className={s.cityImg} src={props.imgOne} alt={`picture of ${props.name}`}></img>
                        <img className={s.cityImg} src={props.imgTwo} alt={`picture of ${props.name}`}></img>
                    </div>
                        : null
            }

        </div>
    )
}

export default CityContent