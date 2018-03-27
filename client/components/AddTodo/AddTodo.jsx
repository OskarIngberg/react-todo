import React, { Component } from 'react';

export class AddTodo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            tasks: [],
            tasksElements: []
        }
        
        this.addFirstTask = this.addFirstTask.bind(this);
        this.addTask = this.addTask.bind(this);
        this.removeTask = this.removeTask.bind(this);
        this.addTodo = this.addTodo.bind(this);
        this.addToTasksArray = this.addToTasksArray.bind(this);
    }

    componentDidMount() {
        this.setState({ tasksElements: [this.addFirstTask()] });
    }

    addFirstTask() {
        const firstTask = 
            <div key="0" className="added-task-wrapper">
                <input 
                    key="0"
                    className="todo-task"
                    type="text"
                    placeholder="Task"
                    ref={ (el) => this.firstTaskElement = el }
                    onChange={(event) => this.addToTasksArray(event.target.value, 0)}
                />
            </div>;

        return firstTask;
    }

    addTodo() {
        var todoObj = {
            title: this.state.title,
            tasks: this.state.tasks
        };

        this.props.callbackParent(todoObj);
        
        // Bring back state to default values
        this.setState({ title: '', tasks: [], tasksElements: [this.addFirstTask()] });
        this.firstTaskElement.value = '';        
    }

    addToTasksArray(item, index) {
        var tasks = this.state.tasks.slice();
        tasks[index] = item;

        this.setState({ tasks });
    }

    addTask() {
        var tasks = this.state.tasks.slice();
        var tasksElements = this.state.tasksElements.slice();
        var key = tasksElements.length;

        var taskElement = 
            <div key={key} className="added-task-wrapper">
                <input
                    key={key}
                    className="todo-task added-task"
                    type="text" placeholder="Task"
                    value={this.state.tasks[key]}
                    onChange={(event) => this.addToTasksArray(event.target.value, key)} 
                />
                <i onClick={() => this.removeTask(key)} className="fas fa-times"></i>
            </div>;

        tasks.push('');
        this.setState({ tasks });

        tasksElements.push(taskElement);
        this.setState({ tasksElements });
    }

    removeTask(index) {
        var tasksElements = this.state.tasksElements.slice();
        var tasks = this.state.tasks.slice();

        for (var i = 0; i < tasksElements.length; i++) {
            var key = Number(tasksElements[i].key);
            if (key === index) {
                tasks.splice(i, 1);
                tasksElements.splice(i, 1);
            }
        }

        this.setState({ tasks });
        this.setState({ tasksElements });
    }

    render() {
        return (
            <div className="add-todo">
                <label className="title">Add new Todo:</label>
                    <input 
                        className="todo-title"
                        type="text"
                        placeholder="Title"
                        value={ this.state.title }
                        onChange={(event) => this.setState({ title: event.target.value })}
                    />
                <label className="title">Tasks:</label>
                    { this.state.tasksElements }
                <div className="add-task">
                    <i className="fas fa-plus" onClick={this.addTask}></i>
                    <p>Add task</p>
                </div>
                    <button className="submit" onClick={this.addTodo}>Add Card</button>
            </div>
        )
    }
}