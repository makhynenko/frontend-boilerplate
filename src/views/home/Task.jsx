import React, { Component } from 'react';
import './styles.css';

export default class Task extends Component {

    render() {
        return (
            <div className="row" key={this.props.id}>
                <input className="checkbox" type="checkbox" id="task_1" name="task_1" checked />
                <div>{this.props.body}</div>
            </div>
        );
    }
}
