import s from './Footer.module.css'

export const Footer = () => {
    
    const date = new Date()
    const year = date.getFullYear()

    return (
        <footer className={s.footer}>
            <p>Adam Murawicz© {year}</p>
            <p>Never Stop Learning</p>
        </footer>
    )
}