
import s from './ExpenseItem.module.css'

export function ExpenseItem ({ items }) {
    

    return (
        <div>
            {items.map((item) => <p key={Math.random()}> {item.name}: {item.price}$</p>)}
        </div>
    )
}