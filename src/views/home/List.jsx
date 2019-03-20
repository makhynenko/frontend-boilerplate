import React, {Component} from 'react';
import './styles.css';
import Task from './Task';
import deleteimg from '../../resources/trash.png';


export default class List extends Component {

    constructor(props) {
        super(props);
        this.state = {
            newTask: ''
        };
    }


    handleDeleteClick = () => {
        this.props.removeList(this.props.id)
    };

    handleNewTaskChange = (e) => {
        this.setState({newTask: e.target.value})
    };

    handleAddTaskPress = (e) => {
        if (e.key === 'Enter') {
            this.props.addTask(this.props.id, this.state.newTask)
            this.setState({newTask: ''})
        }
    };

    render() {
        return (
            <div className="list" key={this.props.id}>
                <div className="header">
                    <h3 className="title">{this.props.title}</h3>
                    <img className="icon" alt="Delete" onClick={this.handleDeleteClick} src={deleteimg}/>
                </div>
                <div className="list-content">
                    {this.props.tasks.map(task => (
                        <Task
                            id={task.id}
                            body={task.body}
                        />
                    ))}
                </div>
                <input onKeyPress={this.handleAddTaskPress} onChange={this.handleNewTaskChange} placeholder="Add TODO"
                       value={this.state.newTask}
                       className="add"/>
            </div>
        );
    }
}
