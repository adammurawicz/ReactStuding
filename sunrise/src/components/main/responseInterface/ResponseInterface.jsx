import s from './ResponseInterface.module.css'

export function ResponseInterface ({ data }) {

    return (
        <div className={s.responseContainer}>
            {data ? 
            <>
                <h2>{data.name}</h2>
                <p>{data.main.temp.toFixed(1)}°C</p>
                <p>{data.weather[0].description}</p>
                <img src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}></img>
            </>
            : null}
        </div>
    )
}