import React from 'react'
import TodoList from './TodoList'
import AddToDo from './AddTodo'
import Search from './Search'

class Todos extends React.Component {

    constructor(props){
        super(props)
        this.state =  {
           todos: [],
           currentFilter: ''
        }

    }

    componentDidMount(){
        // This is where you go get data.. 
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(json =>  this.setState({todos:json})) 
    }


    addTodoItem = (name) => {
        this.setState((state) => {
            return {
                todos: [...state.todos, {title: name, completed: false}]
            }
        })
    }


    visibleTodos() {
        if (this.state.currentFilter !== ''){
          return this.state.todos.filter(todo => todo.title.includes(this.state.currentFilter))
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
              <AddToDo addTodoItem = {this.addTodoItem}/><br/>
              <Search updateFilter={this.updateFilter} />
              <TodoList items={this.visibleTodos()} />
            </>
        )
    }

}
export default Todos