import s from './MenuList.module.css'
import MenuListItem from './MenuListItem/MenuListItem'
import { CARS } from './CARS'

function MenuList (props) {

    return (
        <div className={s.wrapper}>
                {
                    CARS.map((el) => {
                        return (
                            <MenuListItem
                                isSelected={props.car === el.model}
                                onClick={props.action}
                                key={el.key}
                                model={el.model} 
                                years={el.years}
                                description={el.description} 
                                url={el.url} 
                            />
                        )
                    })
                } 
        </div>
    )
}

export default MenuList