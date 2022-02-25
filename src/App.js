import "./App.css";
import React from "react";
import TodoList from "./components/todoList";
import AddTodo from "./components/addTodo";

class Todo extends React.Component {
    constructor(props) {
        super(props);
        this.addTodo = this.addTodo.bind(this);
        this.deleteTodo = this.deleteTodo.bind(this);
        this.doneTodo = this.doneTodo.bind(this);
        this.state = {
            todos: [
                {id: 1, title: "Study React", isDone: false},
                {id: 2, title: "Forget Vue", isDone: true},
                {id: 3, title: "code on PHP", isDone: false},
            ],
        };
    }

    addTodo(todo) {
        this.setState({todos: [...this.state.todos, todo]});
    };
    deleteTodo(id){
        this.setState({todos: this.state.todos.filter(todo => todo.id !== id)});
    }
    doneTodo(id){
        console.log(id)
        let newTodo = this.state.todos.map(todo => {
            if(todo.id === id){
                todo.isDone = !todo.isDone
            }
            return todo
        });
        console.log(newTodo)
        this.setState({todos: newTodo});
    }

    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-2">
                        <h1>Todo App</h1>
                    </div>
                </div>
                <AddTodo addTodo={this.addTodo}/>
                <div className="row justify-content-center">
                    <div className="col-5">
                        <TodoList todos={this.state.todos} deleteTodo={this.deleteTodo} doneTodo={this.doneTodo}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Todo;
