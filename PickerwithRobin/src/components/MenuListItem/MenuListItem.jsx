import s from './MenuListItem.module.css'
import { useState } from 'react'



function MenuListItem (props) {

    const [isHovered, setIsHovered] = useState(false)

    const toggleBackground = () => {
        if(isHovered) {
            return '#a5e9ff'
        } else {
            if(props.isSelected) {
                return '#26baea'
            } else {
                return '#eff0ef'
            }
        }
    }

    const onItemClick = () => {
        props.onClick(props.difficulty)
    }

    return (
        <div onClick={onItemClick}
             className={s.container}
             onMouseEnter={() => setIsHovered(true)}
             onMouseLeave={() => setIsHovered(false)}
             style={{ backgroundColor: toggleBackground() }}
             >
            Set to : {props.difficulty}
        </div>
    )
}

export default MenuListItem