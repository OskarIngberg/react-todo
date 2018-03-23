import React, { Component } from 'react';

export class AddTodo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            tasks: [
                <input key="0" className="todo-task" type="text" placeholder="Task" />
            ]
        }

        this.addTask = this.addTask.bind(this);
        this.removeTask = this.removeTask.bind(this);
    }

    addTask() {
        var tasks = this.state.tasks.slice();
        var key = tasks.length;
        var taskElement = 
            <div key={key} className="added-task-wrapper">
                <input className="todo-task added-task" type="text" placeholder="Task" />
                <i onClick={() => this.removeTask(key)} className="fas fa-times"></i>
            </div>;
        tasks.push(taskElement);
        this.setState({ tasks });
    }

    removeTask(index) {
        var tasks = this.state.tasks.slice();
        tasks.splice(index, 1);
        this.setState({ tasks });
    }

    render() {
        return (
            <div className="add-todo">
                <label className="title">Add new Todo:</label>
                    <input className="todo-title" type="text" placeholder="Title"/>
                <label className="title">Tasks:</label>
                    { this.state.tasks }
                <div className="add-task">
                    <i className="fas fa-plus" onClick={this.addTask}></i>
                    <p>Add task</p>
                </div>
                    <button className="submit">Add Card</button>
            </div>
        )
    }
}