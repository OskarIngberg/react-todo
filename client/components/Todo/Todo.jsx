import React, { Component } from 'react';

export class Todo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            icon: 'far fa-circle'
        }

        this.handleChecking = this.handleChecking.bind(this);
    }

    handleChecking() {
        this.state.icon === 'far fa-circle' 
            ? this.setState({ icon: 'far fa-check-circle' })
            : this.setState({ icon: 'far fa-circle' });
    }

    render() {
        return (
            <div className="todo">
                <h2 className="todo-title">{ this.props.title }</h2>
                <div className="todo-text">
                    <i className={this.state.icon} onClick={this.handleChecking}></i>
                    <p>{ this.props.text }</p>
                </div>
            </div>
        )
    }
}