import React from 'react'

class AddTodo extends React.Component {

    constructor(props){
        super(props)

        this.state = {
            addingToDo: false,
            name: ''
        }
    }


    newToDo = ()=> {
        // you can take in the state and increment
        this.setState(() => {
            return {addingToDo: true}
        })
    }

nameChange = (event)=> {
    this.setState({name: event.target.value})
}
 

addTodo = () => {
    console.log("add to do")
    // Method is called here however the method is defined in Todos.js 
    // You can pass a method as props 
    this.props.addTodoItem(this.state.name)
    this.setState({name: ' ', addingToDo: false})
}
    render() {
         
        // JS can be done here 
        if(this.state.addingToDo){
            return (
                <>
                <span>Name:</span>
                <input value={this.state.name} onChange={this.nameChange} type="text" />
                {/* The onClick has a call back function that will call the addTodo method  */}
                <button onClick={this.addTodo}>Add Todo</button>
               </>
            )
  
        } else {
            return (
                <>
                <button onClick = {this.newToDo}>New Todo +</button>      
               </>
            )

        }
    }
 
}

export default AddTodo