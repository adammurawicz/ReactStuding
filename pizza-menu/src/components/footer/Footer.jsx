import s from './Footer.module.css'

export function Footer () {

    const currentYear = new Date().getFullYear()

    return (
        <footer>
            <p>Never stop eating pizza and studding React</p>
            <p>Adam Murawicz© {currentYear}</p>
        </footer>
    )
}