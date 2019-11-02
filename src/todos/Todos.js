import React from 'react'
import TodoList from './TodoList'
import AddToDo from './AddTodo'
import Search from './Search'

class Todos extends React.Component {

    constructor(props){
        super(props)
        this.state =  {
           todos: [
               {name: 'learn react', completed: false},
               {name: 'walk the dog', completed: false},
               {name: 'watch the football game', completed: false}
           ],

           currentFilter: ''
        }
    }


    addTodoItem = (name) => {
        this.setState((state) => {
            return {
                todos: [...state.todos, {name: name, completed: false}]
            }
        })
    }


    visibleTodos() {
        if (this.state.currentFilter !== ''){
          return this.state.todos.filter(todo => todo.name.includes(this.state.currentFilter))
        } else {
          return this.state.todos 
        }
    }

    updateFilter = (filter) => {
        this.setState({currentFilter: filter})
    }


    render() {
        return (
            <>
              <h1>Todos</h1>
              <AddToDo addTodoItem = {this.addTodoItem}/>
              <Search updateFilter={this.updateFilter} />
              <TodoList items={this.visibleTodos()} />
            </>
        )
    }

}
export default Todos