import React, { Component } from 'react';

import { Todo } from '../Todo/Todo.jsx';

import GetTodos from '../../services/GetTodos';

export class TodoList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            todos: GetTodos()
        }
    }

    renderTodos(array) {
        return array.map((todos) => {
            return <Todo key={todos.id} title={ todos.title } text={ todos.text } />;
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