import s from './Footer.module.css'

export function Footer () {

    const year = new Date().getFullYear()

    return (
        <footer>
            <p>Adam Murawicz© {year} - learning Redux App</p>
        </footer>
    )
}