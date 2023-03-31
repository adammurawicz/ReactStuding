import s from './Logo.module.css'

function Logo ({title, subtitle, img}) {


    return (
        <div>
            <div className={s.container}>
                <img className={s.image} src={img} alt='logo'/>
                <div className={s.title}>{title}</div>
            </div>

            <div className={s.subtitle}>
                {subtitle}
            </div>
        </div>
    )
}

export default Logo