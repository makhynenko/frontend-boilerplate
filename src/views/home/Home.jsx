import React, { Component } from 'react';
import './styles.css';
// import logo from './src/resources/logo_2.svg';
// import trash from './src/resources/trash.png';
import List from './List';

const generateId = () => Math.floor(Math.random() * 100000);

const mockData = [
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
            showSider: false,
            data: mockData,
        };
    }

    renderSider = () => (
        <div id="sider" className="overlay">
            <div className="popup">
                <a className="close" id="popup-close" onClick={this.closeSider} href="#">&times;</a>
                <div className="content">
                    Thank to pop me out of that button, but now i'm done so you can close this window.
                </div>
                <div className="sider-add" onClick={this.addList}>Add</div>
            </div>
        </div>
    );

    handleOpenSider = () => {
        this.setState({ showSider: true });
    };

    closeSider = () => {
        this.setState({ showSider: false });
    };

    addList = () => {
        const { data } = this.state;
        this.setState({ showSider: false, data: [...data, { id: generateId(), title: 'newList', tasks: [] }] });
    };

    removeList = (id) => {
        const { data } = this.state;
        this.setState({ data: data.filter(i => i.id !== id) });
    };

    addTask = (idList, value) => {
        const { data } = this.state;
        this.setState({
            data: data.map(i => (i.id === idList ? {
                ...i,
                tasks: [...i.tasks, { id: generateId(), body: value }],
            } : i)),
        });
    };

    removeTask = (idList, idTask) => {
        const { data } = this.state;
        this.setState({
            data: data.map(list => (list.id === idList ? {
                ...list,
                tasks: list.tasks.filter(task => task.id !== idTask),
            } : list)),
        });
    }

    render() {
        const { data, showSider } = this.state;
        return (
            <div className="app">
                <div className="main-header">
                    <div className="header-logo">
                        <a href="test.html">
                            <img alt="CSGO Howl" />
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
                        />
                    ))}
                </div>
                <div className="plus-button" id="plus-button" onClick={this.handleOpenSider}> +</div>
                {showSider && this.renderSider()}
            </div>
        );
    }
}
