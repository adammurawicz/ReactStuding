import s from './RevenueItems.module.css'

export function RevenueItems ({ items }) {

    return (
        <div>
             {items.map((item) => <p key={Math.random()}> {item.name}: {item.price}$</p>)}
        </div>
    )
}