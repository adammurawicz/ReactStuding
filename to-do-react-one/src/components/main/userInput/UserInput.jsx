import { useState } from 'react'
import { Button } from '../../../UI/button/Button'
import s from './UserInput.module.css'

export const UserInput = (props) => {

const [taskTitle, setTaskTitle] = useState('')
const [taskPriority, setTaskPriority] = useState('medium')
const [taskContent, setTaskContent] = useState('')
const [error, setError] = useState('')

const changeTitle = (e) => {
    setTaskTitle(e.target.value)
}

const changePriority = (e) => {
    setTaskPriority(e.target.value)
}

const changeContent = (e) => {  
    setTaskContent(e.target.value)
}

const submitFunction = (e) => {
    e.preventDefault()
    if(document.querySelector('#taskTitle').value.trim() === '') {
        setError('Fill in the task title.')
        return
    } else {
        console.log('submit Function');
        props.onAddNewTask(taskTitle, taskPriority, taskContent)
        setError('')
        setTaskTitle('')
        setTaskContent('')
    }
}

const clearFunction = (e) => {
    e.preventDefault()
    setError('')
    setTaskTitle('')
    setTaskContent('')
}

    return (
        <form className={s.form}>
            <label htmlFor="taskTitle">Task Title:</label>
            <input id='taskTitle' type='text' placeholder='type the title of your task' onChange={changeTitle} value={taskTitle}></input>
            <label htmlFor="taskPriority">Task priority:</label>
            <select id='taskPriority' defaultValue={taskPriority} onChange={changePriority}>
                <option value='low'>low</option>
                <option value='medium'>medium</option>
                <option value='high'>high</option>
            </select>
            <label htmlFor="taskContent">Task Content</label>
            <textarea id="taskContent" cols="30" rows="10" placeholder='type more information about your task...' onChange={changeContent} value={taskContent}></textarea>
            <p className={s.error}>{error}</p>
            <div>
                <Button text='clear' action={clearFunction}></Button>
                <Button text='submit' action={submitFunction}></Button>
            </div>
        </form>
    )
}