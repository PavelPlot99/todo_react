import React from "react";

class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.deleteTodo = this.deleteTodo.bind(this);
        this.doneTodo = this.doneTodo.bind(this);
    }
    deleteTodo(id){
        this.props.deleteTodo(id);
    };
    doneTodo(id){
        this.props.doneTodo(id);
    }

    render() {
        return (
            <div>
                {this.props.todos.map((todo) =>
                    <div className="row justify-content-center todoItem" key={todo.id} onDoubleClick={() => this.deleteTodo(todo.id)} onClick={() => this.doneTodo(todo.id)}>
                        <div className="col-8">
                            <span>{todo.title}</span>
                        </div>
                        <div className="col">
                            <div>{todo.isDone ? "Выполнено" : "Не выполнено"}</div>
                        </div>
                    </div>
                )}
            </div>
        );
    }
}

export default TodoList;
