import React, { Component } from 'react';

import { Todo } from '../Todo/Todo.jsx';

import GetTodos from '../../services/GetTodos';
import CreateTodo from '../../services/CreateTodo';

export class TodoList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            todos: []
        }

        this.updateTodoList = this.updateTodoList.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        var newTodo = nextProps.updateChild;
        newTodo.id = this.state.todos.length + 1;

        var todos = this.state.todos.slice();
        todos.push(newTodo);
        this.setState({ todos });

        CreateTodo(newTodo);
    }

    updateTodoList(id) {
        var todos = this.state.todos.slice();
        todos.map((todo, index) => {
            if (todo._id === id) {
                todos.splice(index, 1);
            }
        });

        this.setState({ todos });
    }

    componentDidMount() {
        GetTodos.then((todos) => {
            this.setState({ todos });
        });
    }

    renderTodos(array) {
        return array.map((todos, index) => {
            return <Todo key={index} id={todos._id} title={ todos.title } tasks={ todos.tasks } updateTodoList={ this.updateTodoList } />;
        });
    }

    render() {
        return (
            <div className="todo-list">
                { this.renderTodos(this.state.todos) }
            </div>
        );
    }
}