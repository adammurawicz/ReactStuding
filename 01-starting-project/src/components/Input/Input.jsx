import s from './Input.module.css'

export const Input = (params) => {
    
    return (
        <div className={s.wrapper}>

            <form>
                <label htmlFor="userName">UserName</label>
                <input id='userName' type='text'></input>
                <label htmlFor="age">Age</label>
                <input id='age' type='number' min='0'></input>
            </form>

        </div>
    )
}