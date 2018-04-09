import React, { Component } from 'react';

import RemoveTodo from '../../services/RemoveTodo';
import UpdateTodo from '../../services/UpdateTodo';

export class Todo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: this.props.id,
            title: this.props.title,
            tasks: this.props.tasks
        }

        this.handleChecking = this.handleChecking.bind(this);
        this.removeTodo = this.removeTodo.bind(this);
        this.renderTasks = this.renderTasks.bind(this);
        this.taskDone = this.taskDone.bind(this);
    }

    handleChecking(element, id, done) {
        var circle = 'far fa-circle';
        var circleChecked = 'far fa-check-circle';

        if (done) {
            element.className = circleChecked;
        } else {
            element.className = circle;
        }
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
        var handleChecking = this.handleChecking;

        var tasks = this.state.tasks.map(function(task, i) {
            return (
                <div key={task._id} className="todo-text">
                    <i 
                        className={ (element) => handleChecking(task.done) }
                        onClick = { (event) => taskDone(task._id, task.done) }>
                    </i>
                    <p>{ task.task }</p>
                </div>
            )
        });

        return tasks;
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
                <h2 className="todo-title">{ this.props.title }</h2>
                {
                    this.renderTasks()
                }
            </div>
        )
    }
}