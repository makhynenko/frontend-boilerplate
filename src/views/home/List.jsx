import React, { Component } from 'react';
import './styles.css';
import Task from './Task';



export default class List extends Component {

    renderTask = task => (
        <div className="row" key={task.id}>
            <input className="checkbox" type="checkbox" id="task_1" name="task_1" checked />
            <div>{task.body}</div>
        </div>
    );

    handleDeleteClick =() => {
        this.props.removeList(this.props.id)
    }
    render() {
        console.log(this.props);
        return (
            <div className="list" key={this.props.id}>
                <div className="header">
                    <h3 className="title">{this.props.title}</h3>
                    <img className="icon" alt="Delete" onClick={this.handleDeleteClick}/>
                </div>
                <div className="list-content">
                    {this.props.tasks.map(task => (
                        <Task
                         id={task.id}
                            body={task.body}
                        />
                    ))}
                </div>
                <div className="add">Add to-do</div>
            </div>
        );
    }
}
