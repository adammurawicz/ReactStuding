import { useState } from 'react'
import s from './SearchBar.module.css'
import { Search as SearchIcon } from 'react-bootstrap-icons'


export function SearchBar ({ onSubmit }) {

const [value, setValue] = useState('')

    function submit(e){
        if(e.key == 'Enter' && e.target.value.trim()!=''){
            onSubmit(e.target.value)
            setValue('')
        }
    }

    function handleChange (e) {
        setValue(e.target.value)
    }

    return (
        <div>
            <SearchIcon size={27} className={s.icon}/>
            <input 
            onKeyUp={submit}
            className={s.input}
            onChange={handleChange} 
            type='text'
            value={value}
            placeholder={'Search a tv show you may like'}/>
        </div>
    )
}