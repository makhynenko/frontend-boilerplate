import React, { Component } from 'react';
import './styles.css';
import deleteimg from '../../resources/trash.png';


export default class Task extends Component {

    render() {
        return (
            <div className="row" key={this.props.id}>
                <div className="row-content">
                    <input className="checkbox" type="checkbox" id="task_1" name="task_1" checked />
                    <div>{this.props.body}</div>
                </div>
                <img className="delete-task-icon" alt="Delete"  src={deleteimg}/>
            </div>
        );
    }
}
