import s from './Main.module.css'
import { useState } from 'react'

export function Main ({pizza, price, ingredients, allergens, url}) {

const [ingr, setIngr] = useState(false)
const [all, setAll] = useState(false)
const toggleIngr = () => {
    if (ingr === false) {
        setIngr(true)
    } else {
        setIngr(false)
    }
}

const toggleAll = () => {
    if(all === false) {
        setAll(true)
    } else {
        setAll(false)
    }
}

    return (
        <main>
            {pizza !== '' ? 
                <div className={s.container}>
                    <p className={s.name}>{pizza}</p>
                    <div className={s.divOne}>
                    <img src={url}></img>
                    <p className={s.price}>Price: {price}$</p>
                    </div>
                    <div className={s.divTwo}>

                        <div>
                        <button onClick={toggleIngr}>Toggle ingredients</button>
                        { ingr ? <p> <span>Ingredients:</span> {ingredients};</p> : null}
                        </div>

                        <div>
                        <button onClick={toggleAll}>Toggle allergens</button>
                        { all ? <p> <span>Allergens:</span> {allergens};</p> : null}
                        </div>

                    </div>
                </div> 
                : <p className={s.end}>Checked your pizza</p>}
        </main>
    )
}

