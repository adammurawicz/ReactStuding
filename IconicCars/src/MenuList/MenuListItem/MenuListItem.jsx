import { useState } from 'react'
import s from './MenuListItem.module.css'

function MenuListItem (props) {
    
    const [isHover, setIsHover] = useState(false)

    const activeHover = () => {
        setIsHover(true)
    }

    const disactiveHover = () => {
        setIsHover(false)
    }

    const changeColor = () => {
        if(isHover) {
            return '#F2A7A7'
        } else {
            if (props.isSelected) {
                return '#D9626B'
            } else {
                return '#f5f5f5'
            }
        }
    }

    const onItemClick = () => {
        props.onClick(props.model, props.years, props.description, props.url)
    }

    return (
        <div 
            className={s.wrapper}
            onClick={onItemClick}>
                <p  onMouseEnter={activeHover}
                    onMouseLeave={disactiveHover}
                    style={{ backgroundColor: changeColor() }}
                    >
                    {props.model}
                </p>
        </div>
    )
}

export default MenuListItem