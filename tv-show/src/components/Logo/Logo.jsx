import s from './Logo.module.css'

export function Logo ({title, subtitle, image}) {

    return (
        <>
        <div className={s.container}>
            <img className={s.img} src={image} alt='Logo'/>
            <div className={s.title}>{title}</div>
        </div>
        <div className={s.subtitle}>{subtitle}</div>
        </>
    )
}