import s from './Footer.module.css'

function Footer () {

    const date = new Date
    const year = date.getFullYear()

    return (
        <footer className={s.footer}>
            <p>Adam Murawicz © never stop learning (react) {year}</p>
        </footer>
    )
}

export default Footer