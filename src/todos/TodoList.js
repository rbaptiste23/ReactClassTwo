import React from 'react'

function TodoList(props) {
    console.log(props)

    const todosToRender = props.items.map((todo,i) => {
        return <li key={i}>{todo.title}</li>
    })

    return (
         <ol>
           {todosToRender}
         </ol>
    )
}

export default TodoList