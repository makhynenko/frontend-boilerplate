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

    render() {
        const { id, title, tasks } = this.props;
        const { newTask } = this.state;

        return (
            <div className="list" key={id}>
                <div className="header">
                    <h3 className="title">{title}</h3>
                    <img className="icon" alt="Delete" onClick={this.handleDeleteClick} src={deleteimg} />
                </div>
                <div className="list-content">
                    {tasks.map(task => (
                        <Task
                          idList={id}
                          id={task.id}
                          body={task.body}
                          removeTask={task.removeTask}
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
