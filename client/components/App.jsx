import React, { Component } from 'react';

import { Header } from './Header/Header.jsx';
import { AddTodo } from './AddTodo/AddTodo.jsx';
import { TodoList } from './TodoList/TodoList.jsx';

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            todo: {}
        }
    }

    onChildChanged(newState) {
        this.setState({ todos: newState });
        console.log(this.state.todo);
    }

    render() {
        return (
            <div>
                <Header />
                <div className="container">
                    <AddTodo callbackParent={ (newState) => this.onChildChanged(newState) }/>
                    <TodoList />
                </div>
            </div>
        );
    }
}