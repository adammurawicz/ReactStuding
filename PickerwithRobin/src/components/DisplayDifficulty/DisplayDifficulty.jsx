import s from './DisplayDifficulty.module.css'

function DisplayDifficulty (props) {
    return (
        <div className={s.container}>
            {
                props.difficulty ? `Difficulty set to ${props.difficulty}` : "No difficulty set"
            }
        </div>
    )
}

export default DisplayDifficulty