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
    }

    componentWillReceiveProps(nextProps) {
        var newTodo = nextProps.updateChild;
        newTodo.id = this.state.todos.length + 1;

        CreateTodo(newTodo);
    }

    componentDidMount() {
        GetTodos.then((todos) => {
            this.setState({ todos });
        });
    }

    renderTodos(array) {
        return array.map((todos) => {
            return <Todo key={todos._id} title={ todos.title } tasks={ todos.tasks } />;
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