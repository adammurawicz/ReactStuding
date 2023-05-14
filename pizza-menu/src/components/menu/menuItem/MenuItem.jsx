import s from './MenuItem.module.css'

export function MenuItem ({pizza, price, ingredients, allergens, url, clickFunction, checkedPizza}) {

    function downloadData ( pizza, price, ingredients, allergens, url ) {
        clickFunction( pizza, price, ingredients, allergens, url)
    }


    return (
        <li onClick={() => downloadData ( pizza, price, ingredients, allergens, url )}
        style={checkedPizza == pizza ? {'color': 'tomato'} : null}
        >
            {pizza}
        </li>
    )
}