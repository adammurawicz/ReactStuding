import s from './Footer.module.css'

export function Footer () {

    const currentYear = new Date().getFullYear()

    return (
        <footer>
            <p>Keep learning React Adam Murawicz©</p>
        </footer>
    )
}