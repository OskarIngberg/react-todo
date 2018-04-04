import React, { Component } from 'react';

export class Todo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: this.props.title,
            tasks: this.props.tasks
        }

        this.handleChecking = this.handleChecking.bind(this);
        this.renderTasks = this.renderTasks.bind(this);
    }

    handleChecking(element) {
        var circle = 'far fa-circle';
        var circleChecked = 'far fa-check-circle';

        if (element.className === circle) {
            element.className = circleChecked;
        } else {
            element.className = circle;
        }
    }

    renderTasks() {
        var checkChanger = this.handleChecking;

        var tasks = this.state.tasks.map(function(task, i) {
            return (
                <div key={i} className="todo-text">
                    <i 
                        className="far fa-circle"
                        onClick = { (event) => checkChanger(event.target) }>
                    </i>
                    <p>{ task.task }</p>
                </div>
            )
        });

        return tasks;
    }

    render() {
        return (
            <div className="todo">
                <h2 className="todo-title">{ this.props.title }</h2>
                {
                    this.renderTasks()
                }
            </div>
        )
    }
}