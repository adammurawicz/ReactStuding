import s from './Footer.module.css'

function Footer (props) {

    return (
        <footer>
            <p>Adam Murawicz©</p>
            <p>First React App <span>{props.year}</span></p>
        </footer>
    )
}

export default Footer