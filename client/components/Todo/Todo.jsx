import React, { Component } from 'react';

import RemoveTodo from '../../services/RemoveTodo';
import UpdateTodo from '../../services/UpdateTodo';

export class Todo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            changeTitle: false,
            changeTask: false,
            id: this.props.id,
            title: this.props.title,
            tasks: this.props.tasks
        }

        this.removeTodo = this.removeTodo.bind(this);
        this.renderTasks = this.renderTasks.bind(this);
        this.taskDone = this.taskDone.bind(this);
        this.checkTaskStatus = this.checkTaskStatus.bind(this);
        this.updateTaskState = this.updateTaskState.bind(this);
    }

    checkTaskStatus(done) {
        var circle = 'far fa-circle';
        var checkedCircle = 'far fa-check-circle';

        return done ? checkedCircle : circle;
    }

    updateTask() {

    }

    updateTaskState() {
        this.setState({ changeTask: !this.state.changeTask })
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

    task(index, task, changeTask, updateTaskState, updateTask) {
        if (changeTask) {
            return (
                <input 
                    type="text"
                    value={ task.task }
                    onChange={ task.task }
                />
            )
        } else {
            return (
                <p 
                    onClick= { () => updateTaskState() }>
                    { task.task }
                </p>
            )
        }
    }

    renderTasks() {
        var taskDone = this.taskDone;
        var checkTaskStatus = this.checkTaskStatus;
        var updateTask = this.updateTask;
        var taskChanger = this.task;
        var changeTask = this.state.changeTask;
        var updateTaskState = this.updateTaskState;
        var updateTask = this.updateTask;

        var tasks = this.state.tasks.map(function(task, i) {
            return (
                <div key={task._id} className="todo-text">
                    <i 
                        className={ checkTaskStatus(task.done) }
                        onClick={ (event) => taskDone(task._id) }>
                    </i>
                    { taskChanger(i, task, changeTask, updateTaskState, updateTask) }
                </div>
            )
        });

        return tasks;
    }

    title(changeTitle) {
        if (changeTitle) {
            return (
                <input
                    className="todo-title-input"
                    autoFocus
                    type="text"
                    value={ this.state.title }
                    onChange={ this.updateTitle.bind(this) }
                    onKeyPress={ event =>  this.updateTitleDone(event) }
                    onBlur={ () =>  this.updateTitleDone('blur') }
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
        if (event.key === 'Enter' || event === 'blur') {
            this.setState({ changeTitle: !this.state.changeTitle });
            UpdateTodo(this.state.id, { title: this.state.title});
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
                { this.title(this.state.changeTitle) }
                { this.renderTasks() }
            </div>
        )
    }
}