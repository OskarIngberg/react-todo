import React, { Component } from 'react';

import { Header } from './Header/Header.jsx';
import { AddTodo } from './AddTodo/AddTodo.jsx';
import { TodoList } from './TodoList/TodoList.jsx';

export default class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="container">
                    <AddTodo />
                    <TodoList />
                </div>
            </div>
        );
    }
}