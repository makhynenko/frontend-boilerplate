import PropTypes from 'prop-types';
import React, { Component } from 'react';
import './styles.css';
import Task from './Task';
import deleteimg from '../../resources/trash.png';


export default class List extends Component {
    static defaultProps = {
        title: '',
    }

    static propTypes = {
        addTask: PropTypes.func.isRequired,
        removeList: PropTypes.func.isRequired,
        title: PropTypes.string,
        removeTask: PropTypes.func.isRequired,
        updateTitle: PropTypes.func.isRequired,
        id: PropTypes.number.isRequired,
    };

    constructor(props) {
        super(props);
        this.state = {
            newTask: '',
        };
    }


    handleDeleteClick = () => {
        const { id, removeList } = this.props;
        removeList(id);
    };

    handleNewTaskChange = (e) => {
        this.setState({ newTask: e.target.value });
    };

    handleAddTaskPress = (e) => {
        if (e.key === 'Enter') {
            const { newTask } = this.state;
            const { id, addTask } = this.props;
            addTask(id, newTask);
            this.setState({ newTask: '' });
        }
    };

    handleTitleChange = (e) => {
        const { id, updateTitle } = this.props;
        updateTitle(id, e.target.value);
    }

    render() {
        const {
            id, title, tasks, removeTask, checkTask,
        } = this.props;
        const { newTask } = this.state;

        return (
            <div className="list" key={id}>
                <div className="header">
                    <input
                        // onKeyPress={this.handleAddTaskPress}
                        onChange={this.handleTitleChange}
                        placeholder="Enter title..."
                        value={title}
                        className="list-title"
                    />
                    <img className="icon" alt="Delete" onClick={this.handleDeleteClick} src={deleteimg} />
                </div>
                <div className="list-content">
                    {tasks.map(task => (
                        <Task
                            idList={id}
                            id={task.id}
                            body={task.body}
                            removeTask={removeTask}
                            isChecked={task.checked}
                            checkTask={checkTask}
                        />
                    ))}
                </div>
                <input
                    onKeyPress={this.handleAddTaskPress}
                    onChange={this.handleNewTaskChange}
                    placeholder="Add TODO"
                    value={newTask}
                    className="add"
                />
            </div>
        );
    }
}
