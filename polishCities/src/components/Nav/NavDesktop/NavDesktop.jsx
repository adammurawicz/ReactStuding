import s from './NavDesktop.module.css'
import Logo from '../Logo/Logo'
import MenuItem from '../MenuItem/MenuItem'

function NavDesktop (props) {

    const chooseCity = (key, name, firstContent, secondContent, thirdContent, imgOne, imgTwo, crest) => {
        props.function(key, name, firstContent, secondContent, thirdContent, imgOne, imgTwo, crest)
    }

    return (
        <div className={s.navDesktop}>
            <div className={s.navDesktopWrapper}>
            <Logo/> 
                <div className={s.navDesktopItems}>
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
                            function={chooseCity}
                            isSelected={props.name == el.name}
                        />

                    )
                })
            }
             </div>
            </div>
        </div>
    )
}

export default NavDesktop