import { useState, useEffect } from 'react';
import s from './FoodInterface.module.css'
import { FoodAPI } from '../../../API/API';

function FoodInterface (props) {
    

    return (
        
        <div className={s.foodInterfaceWrapper}>
            
            <p style={{'color': 'tomato', 'marginTop': '-1em', 'padding': '1em', 'fontStyle': 'italic'}}>{props.error}</p>

            <div className={s.food}>
                <p style={{'fontWeight': 'bold'}}>Food name:</p>
                {props.data ? <p>{props.data.label}</p> : null}
            </div>

            <div className={s.nutrients}>
                <p style={{'fontWeight': 'bold'}}>Nutrients (in 100g):</p>

                {props.data ? 
                    <> 
                    <p>Energy: <span style={{'fontStyle': 'italic'}}>{props.data.nutrients.ENERC_KCAL} kcal</span></p>
                    <p>Protein <span style={{'fontStyle': 'italic'}}>{props.data.nutrients.PROCNT.toFixed(1)}</span> g</p>
                    <p>Fat: <span style={{'fontStyle': 'italic'}}>{props.data.nutrients.FAT.toFixed(1)}</span> g</p>
                    <p>Carb: <span style={{'fontStyle': 'italic'}}>{props.data.nutrients.CHOCDF.toFixed(1)}</span> g</p>
                    </>
                 : null }
            </div>
            
            {props.data ? <img src={props.data.image}></img> : null}

        </div>
            )
}

export default FoodInterface