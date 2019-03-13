import React, { Component } from 'react';
import './styles.css';

const generateId = () => {
    return Math.floor(Math.random() * 100000);
};

let data = [
    {
        id: generateId(),
        title: 'List 1',
        tasks: [
            {
                id: '1',
                body: 'Task 1',
            },
        ],
    },
    {
        id: generateId(),
        title: 'List 2',
        tasks: [
            {
                id: '1',
                body: 'Task 2',
            },
            {
                id: '2',
                body: 'Task 3',
            },
        ],
    },
];

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            exampleStateField: 'Hi',
        };
    }

    renderTask = task => (
        <div className="row" key={task.id}>
            <input className="checkbox" type="checkbox" id="task_1" name="task_1" checked />
            <div>{task.body}</div>
        </div>
    );

    renderList = list => (
        <div className="list" key={list.id}>
            <div className="header">
                <h3 className="title">{list.title}</h3>
                <img className="icon" alt="Delete" src="../resources/trash.png" />
            </div>
            <div className="list-content">
                {list.tasks.map(task => this.renderTask(task))}
            </div>
            <div className="add">Add to-do</div>
        </div>
    );

    render() {
        const { exampleStateField } = this.state;
        console.log(exampleStateField);
        return (
            <div className="app">
                <div className="main-header">
                    <div className="header-logo">
                        <a href="test.html">
                            <img src="../resources/di-logo.svg" alt="CSGO Howl" />
                        </a>
                    </div>
                    <div className="header-text">To</div>
                    <div className="header-line" />
                    <div className="header-text">do</div>
                </div>
                <div className="content">
                    {data.map(list => this.renderList(list))}
                </div>
                <div className="plus-button" id="plus-button">+</div>
            </div>
        );
    }
}
