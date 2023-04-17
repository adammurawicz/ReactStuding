import s from './PopUp.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import MenuItem from '../MenuItem/MenuItem';

function PopUp (props) {
    
    const action = (key, name, firstContent, secondContent, thirdContent, imgOne, imgTwo, crest) => {
        props.function(key, name, firstContent, secondContent, thirdContent, imgOne, imgTwo, crest)}
    

    return (

        <div className={`${s.popUp} popUp`}>
            
            {
                props.cities.map((el) => {
                    return (
                        <MenuItem
                            key={el.key}
                            name={el.name}
                            firstContent={el.firstContent}
                            secondContent={el.secondContent}
                            thirdContent={el.thirdContent}
                            imgOne = {el.imgOne}
                            imgTwo = {el.imgTwo}
                            crest = {el.crest}
                            function={action}
                        />
                    )
                })
            }
        </div>
    )
}

export default PopUp