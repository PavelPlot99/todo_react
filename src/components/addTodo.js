import React from "react";

class AddTodo extends React.Component {
    constructor(props) {
        super(props);
        this.handleInput = this.handleInput.bind(this);
        this.addInTodos = this.addInTodos.bind(this);
        this.state = {
            newTodo: "",
        }
    }

    componentDidMount() {
    }

    handleInput(e) {
        this.setState({newTodo: e.target.value});
    };

    addInTodos() {
        let newTodo = {
            id: new Date().getTime(),
            title: this.state.newTodo,
            isDone: false,
        }
        this.props.addTodo(newTodo);
    }

    render() {
        return (
            <div className="row justify-content-center align-items-end py-2">
                <div className="col-2">
                    <input type="text" placeholder="add todo" className="form-control" value={this.state.newTodo}
                           onChange={this.handleInput}/>
                </div>
                <div className="col-2">
                    <button className="btn btn-primary" onClick={this.addInTodos}>add todo</button>
                </div>
            </div>
        );
    }
}

export default AddTodo;
