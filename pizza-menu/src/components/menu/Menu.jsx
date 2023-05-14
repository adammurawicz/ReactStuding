import s from './Menu.module.css'
import { MenuItem } from './menuItem/MenuItem'


export function Menu ( {data, checkMenu, pizza} ) {

    return (
        <nav>
            <ul>
                { data.map((el) => {
                    return (
                            <MenuItem
                            key={el.key}
                            pizza={el.pizza}
                            checkedPizza={pizza}
                            price={el.price}
                            ingredients={el.ingredients}
                            allergens={el.allergens}
                            url={el.url}
                            clickFunction={checkMenu} 
                            >{el.pizza}
                            </MenuItem>
                    )
                }) }
            </ul>
        </nav>
    )
}