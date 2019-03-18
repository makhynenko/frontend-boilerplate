import React, {Component} from 'react';
import './styles.css';
// import logo from './src/resources/logo_2.svg';
// import trash from './src/resources/trash.png';
import List from './List';

const generateId = () => {
    return Math.floor(Math.random() * 100000);
};


let mockData = [
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
        <div id="sider" class="overlay">
            <div class="popup">
                <a class="close" id="popup-close" onClick={this.closeSider} href="#">&times;</a>
                <div class="content">
                    Thank to pop me out of that button, but now i'm done so you can close this window.
                </div>
                <div class="sider-add" onClick={this.addList}>Add</div>
            </div>
        </div>
    );

    handleOpenSider = () => {
        this.setState({showSider: true})
    };

    closeSider = () => {
        this.setState({showSider: false})
    };

    addList = () => {
        this.setState({showSider: false, data: [...this.state.data, {id: generateId(), title: "newList", tasks: []}]})

    };

    removeList = (id) => {
        this.setState({data: this.state.data.filter(i => i.id !== id)})
    };

    addTask = (idList, value) => {
        this.setState({
            data: this.state.data.map(i => i.id === idList ? {
                ...i,
                tasks: [...i.tasks, {id: generateId(), body: value}]
            } : i)
        })
    };

    render() {
        const {data} = this.state;
        return (
            <div className="app">
                <div className="main-header">
                    <div className="header-logo">
                        <a href="test.html">
                            <img alt="CSGO Howl"/>
                        </a>
                    </div>
                    <div className="header-text">To</div>
                    <div className="header-line"/>
                    <div className="header-text">do</div>
                </div>
                <div className="content">
                    {data.map(list => <List
                        id={list.id}
                        title={list.title}
                        tasks={list.tasks}
                        removeList={this.removeList}
                        addTask={this.addTask}
                    />)}
                </div>
                <div className="plus-button" id="plus-button" onClick={this.handleOpenSider}> +</div>
                {this.state.showSider && this.renderSider()}
            </div>
        );
    }
}
