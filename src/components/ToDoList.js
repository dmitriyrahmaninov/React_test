import React from 'react'
import ToDoItem from './ToDoItem'

export default function ToDoList ({todos}) {
    return (
        <div>
            <div>
            {
                    todos.map(row => <ToDoItem key={row.id} {...row}/>)
            }
            </div>
        </div>
    )
}
