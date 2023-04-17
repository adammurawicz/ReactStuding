import s from './Logo.module.css'
import flag from '../../../assets/flag.png';

function Logo () {
    return (
        <div className={s.logoWrapper}>
            <a href='index.html'><img src={flag}></img><p>Famous Polish Cities</p></a>
        </div>
    )
}

export default Logo