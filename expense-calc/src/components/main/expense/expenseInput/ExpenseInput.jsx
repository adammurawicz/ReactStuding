import s from './ExpenseInput.module.css'

export function ExpenseInput () {


    return (
        <div>
            <input type='number' min='0' placeholder='type your expenses...'/>
        </div>
    )
}