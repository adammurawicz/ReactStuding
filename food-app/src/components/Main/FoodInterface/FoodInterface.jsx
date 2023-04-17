import s from './FoodInterface.module.css'
import { getRequest } from '../../../API/API';
import { useState, useEffect } from 'react';


function FoodInterface () {

    return (
        <div className={s.foodInterfaceWrapper}>
            
            <div className={s.food}>
                <p>Food</p>
                <p>Food</p>
            </div>

            <div className={s.nutrients}>
                <p>Nutrients (in 100g)</p>
                <p>Energy:</p>
                <p>Protein</p>
                <p>Fat</p>
                <p>Carbs</p>
            </div>

        </div>
    )
}

export default FoodInterface