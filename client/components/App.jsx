import React, { Component } from 'react';

import CreateTodo from '../services/CreateTodo';

import { Header } from './Header/Header.jsx';
import { AddTodo } from './AddTodo/AddTodo.jsx';
import { TodoList } from './TodoList/TodoList.jsx';

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            todos: {}
        }

        this.onChildChanged = this.onChildChanged.bind(this);
    }

    onChildChanged(newState) {
        this.setState({ todos: newState });
    }

    render() {
        return (
            <div>
                <Header />
                <div className="container">
                    <AddTodo callbackParent={ (newState) => this.onChildChanged(newState) } />
                    <TodoList updateChild={ this.state.todos } />
                </div>
            </div>
        );
    }
}