import { useState } from 'react'
import s from './UserTasks.module.css'

export const UserTasks = (props) => {

    return (
        <div className={s.tasks}>
            <h2>Your Tasks:</h2>
            <ul>
                {props.taskArrey.map((task) => {
                    return (
                        <li className={s.liItem} key={task.id}
                        style={{background: task.taskPriority === 'high' ? 'tomato' : ''

                                // background: task.taskPriority === 'low' ? 'green': '',
                                //  background: task.taskPriority === 'medium' ? 'yellow' : '',
                                //  background: task.taskPriority === 'high' ? 'tomato' : null
                        }}
                        >
                            <h4>{task.taskTitle}</h4>
                            <p>Priority: <span>{task.taskPriority}</span></p>
                            <p>{task.taskContent}</p>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}