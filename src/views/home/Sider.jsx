import PropTypes from 'prop-types';
import React, { Component } from 'react';
import './styles.css';


export default class Sider extends Component {
    static propTypes = {
        addList: PropTypes.func.isRequired,
        onClose: PropTypes.func.isRequired,
    };

    constructor(props) {
        super(props);
        this.state = {
            title: '',
        };
    }

    addList = () => {
        const { title } = this.state;
        // const list = {
            // id: 
        // }
    };

    handleTitleChange = (e) => {
        this.setState({ title: e.target.value });
    }

    render() {
        const { title } = this.state;
        return (
            <div id="sider" className="overlay">
                <div className="popup">
                    <a className="close" id="popup-close" onClick={this.props.onClose} >&times;</a>
                    <div className="sider-content">
                        <input
                            onChange={this.handleTitleChange}
                            placeholder="Enter title..."
                            value={title}
                            className="sider-title"
                        />
                    </div>
                    <div className="sider-add" onClick={this.addList}>Add</div>
                </div>
            </div>
        );
    }
}
