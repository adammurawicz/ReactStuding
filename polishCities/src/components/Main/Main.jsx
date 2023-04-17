import s from './Main.module.css'
import { useState } from 'react'
import BasicContent from './BasicContent/BasicContent'
import CityContent from './CityContent/CityContent'

function Main (props) {



    return (
        <main className={s.main}>
            
            {props.name ?  
                        <CityContent
                        name={props.name} 
                        firstContent={props.firstContent} 
                        secondContent={props.secondContent}
                        thirdContent={props.thirdContent}
                        imgOne={props.imgOne}
                        imgTwo={props.imgTwo}
                        crest={props.crest}
                        /> 
                        : <BasicContent/> }

        </main>
    )
}

export default Main