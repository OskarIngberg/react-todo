import React, { Component } from 'react';

import RemoveTodo from '../../services/RemoveTodo';
import UpdateTodo from '../../services/UpdateTodo';

export class Todo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            changeTitle: false,
            id: this.props.id,
            title: this.props.title,
            tasks: this.props.tasks
        }

        this.removeTodo = this.removeTodo.bind(this);
        this.renderTasks = this.renderTasks.bind(this);
        this.taskDone = this.taskDone.bind(this);
        this.checkTaskStatus = this.checkTaskStatus.bind(this);
    }

    checkTaskStatus(done) {
        var circle = 'far fa-circle';
        var checkedCircle = 'far fa-check-circle';

        return done ? checkedCircle : circle;
    }

    taskDone(id) {
        var tasks = this.state.tasks.slice();
        tasks.map((task, index) => {
            if (task._id === id) {
                task.done = !task.done;
            }
        });

        this.setState({ tasks });

        UpdateTodo(this.state.id, { tasks });
    }

    renderTasks() {
        var taskDone = this.taskDone;
        var checkTaskStatus = this.checkTaskStatus;

        var tasks = this.state.tasks.map(function(task, i) {
            return (
                <div key={task._id} className="todo-text">
                    <i 
                        className={ checkTaskStatus(task.done) }
                        onClick={ (event) => taskDone(task._id) }>
                    </i>
                    <p>{ task.task }</p>
                </div>
            )
        });

        return tasks;
    }

    title(changeTitle) {
        if (changeTitle) {
            return (
                <input 
                    type="text"
                    value={ this.state.title }
                    onChange={ this.updateTitle.bind(this) }
                    onKeyPress={ event =>  this.updateTitleDone(event) } 
                />
            )
        } else {
            return (
                <h2 
                    className="todo-title"
                    onClick={ () => this.setState({ changeTitle: !this.state.changeTitle }) }>
                        { this.state.title }
                </h2>
            )
        }
    }

    updateTitle(event) {
        this.setState({title: event.target.value})
    }

    updateTitleDone(event) {
        if (event.key === 'Enter') {
            this.setState({ changeTitle: !this.state.changeTitle });
        }
    }

    removeTodo(id) {
        RemoveTodo(id);
        this.props.updateTodoList(id);
    }

    render() {
        return (
            <div className="todo">
                <i 
                    className="fas fa-times remove"
                    onClick = { (event) => this.removeTodo(this.state.id) }>
                </i>
                {
                    this.title(this.state.changeTitle)
                }
                {
                    this.renderTasks()
                }
            </div>
        )
    }
}