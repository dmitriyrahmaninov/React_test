import React from 'react'

export default function ToDoForm() {

    const form_style = {
        display: 'flex'
    };

    return (
        <form style={form_style}>
            <input type="text" placeholder='description' />
            <button>Add</button>
        </form>
    )
}
