import React, { Component } from 'react';
import './styles.css';
import logo from '../../resources/logo_2.svg';
import List from './List';
import Sider from './Sider';
import { generateId } from '../../helper';

const mockData = [
    {
        id: generateId(),
        title: 'List 1',
        tasks: [
            {
                id: '1',
                body: 'Task 1',
                checked: true,
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
                checked: true,
            },
            {
                id: '2',
                body: 'Task 3',
                checked: false,
            },
        ],
    },
];

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showSider: false,
            data: this.getFromLocalStorage(),
        };
    }

    getFromLocalStorage = () => {
        const data = localStorage.getItem('todo');
        return data ? JSON.parse(data) : mockData;
    }

    saveToLocalStorage = () => {
        const { data } = this.state;
        const todo = JSON.stringify(data);
        localStorage.setItem('todo', todo);
    }


    handleOpenSider = () => {
        this.setState({ showSider: true });
    };

    closeSider = () => {
        this.setState({ showSider: false });
    };

    addList = (list) => {
        const { data } = this.state;
        this.setState({ showSider: false, data: [...data, list] }, this.saveToLocalStorage);
    };

    removeList = (id) => {
        const { data } = this.state;
        this.setState({ data: data.filter(i => i.id !== id) }, this.saveToLocalStorage);
    };

    addTask = (idList, value) => {
        const { data } = this.state;
        this.setState({
            data: data.map(i => (i.id === idList ? {
                ...i,
                tasks: [...i.tasks, { id: generateId(), body: value, checked: false }],
            } : i)),
        }, this.saveToLocalStorage);
    };

    updateListTitle = (idList, value) => {
        const { data } = this.state;
        this.setState({
            data: data.map(list => (list.id === idList ? {
                ...list,
                title: value,
            } : list)),
        }, this.saveToLocalStorage);
    }

    removeTask = (idList, idTask) => {
        const { data } = this.state;
        this.setState({
            data: data.map(list => (list.id === idList ? {
                ...list,
                tasks: list.tasks.filter(task => task.id !== idTask),
            } : list)),
        }, this.saveToLocalStorage);
    }

    checkedTask = (idList, idTask, value) => {
        const { data } = this.state;
        this.setState({
            data: data.map(list => (list.id === idList ? {
                ...list,
                tasks: list.tasks.map(task => (task.id === idTask ? {
                    ...task,
                    checked: value,
                } : task)),
            } : list)),
        }, this.saveToLocalStorage);
    }

    render() {
        const { data, showSider } = this.state;
        return (
            <div className="app">
                <div className="main-header">
                    <div className="header-logo">
                        <a href="test.html">
                            <img alt="CSGO Howl" src={logo} />
                        </a>
                    </div>
                    <div className="header-text">To</div>
                    <div className="header-line" />
                    <div className="header-text">do</div>
                </div>
                <div className="content">
                    {data.map(list => (
                        <List
                            id={list.id}
                            title={list.title}
                            tasks={list.tasks}
                            removeList={this.removeList}
                            addTask={this.addTask}
                            removeTask={this.removeTask}
                            checkTask={this.checkedTask}
                            updateTitle={this.updateListTitle}
                        />
                    ))}
                </div>
                <div className="plus-button" id="plus-button" onClick={this.handleOpenSider}> +</div>
                {
                    showSider && (
                        <Sider
                            addList={this.addList}
                            onClose={this.closeSider}
                        />
                    )
                }
            </div>
        );
    }
}
