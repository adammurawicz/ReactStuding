import s from './Footer.module.css'

export const Footer = () => {

const year = new Date().getFullYear()
    
    return (
        <footer className={s.footer}>
            <p>Basic React Learning Project © {year}</p>
        </footer>
    )
}