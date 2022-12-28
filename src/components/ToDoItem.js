import React from 'react'

export default function ToDoItem({id, title, done}) {
    // const { id, title, done } = props;
    const style = {
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        border: '2px solid black',
        padding: '10px',
        margin: '10px',
        backgroundColor: done ? '#05c46b' : '#808e9b'
    }

    return (
        <div style={style}>
            <p>id: {id}</p>
            <p>title: {title}</p>
    </div>
    )
}
