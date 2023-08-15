import { useState } from 'react'
import s from './Main.module.css'
import { UserInput } from './userInput/UserInput'
import { UserTasks } from './userTasks/UserTasks'

export const Main = () => {

const [tasksList, setTasksList] = useState([])

const addNewTask = (title, priority, content) => {
    setTasksList((prevTasksList) => {
        return [
            ...prevTasksList,
            {taskTitle: title,
            taskPriority: priority,
            taskContent: content,
            id: Math.random().toString()}
        ]
    })
}
    
    return (
        <main className={s.main}>
            <UserInput onAddNewTask={addNewTask}></UserInput>
            <UserTasks taskArrey={tasksList}></UserTasks>
            <button onClick={() => {console.log(tasksList)}}>Check Task</button>
        </main>
    )
}