import s from './SearchBar.module.css'
import { Search as SearchIcon} from 'react-bootstrap-icons'
import { useState } from 'react'

function SearchBar ({ onSubmit }) {

    const [ value, setValue ] = useState('')

    function sumbit(e) {
        if(e.key == 'Enter' && e.target.value.trim() != '') {
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
                onKeyUp={sumbit}
                onChange={handleChange} 
                className={s.input} 
                type='text'
                value={value} 
                placeholder='Search a tv show'/>
        </div>
    )
}

export default SearchBar