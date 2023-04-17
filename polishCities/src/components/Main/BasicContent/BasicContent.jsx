import s from './BasicContent.module.css'
import knight from '../../../assets/knight.jpg'

function BasicContent () {
    
    return (
        
    <div className={s.basicWrapper}>
        <img src={knight} alt="Poland first to fight" className={s.basicImg}/>
        <div className='s.basicWrapperContent'>
        <p className={s.basicP}>Polish cities are fabulous</p>
        <p className={s.basicP2}>The architecture of Poland reflects European architectural styles, with strong historical influences derived from Italy, Germany, and the Low Countries. Settlements founded on Magdeburg Law evolved around central marketplaces, encircled by a grid or concentric network of streets forming an old town. Poland's traditional landscape is characterised by ornate churches, city tenements and town halls. Cloth hall markets were once an abundant feature of Polish urban architecture. The mountainous south is known for its Zakopane chalet style, which originated in Poland.</p>
        </div>
    </div>

    )
}

export default BasicContent