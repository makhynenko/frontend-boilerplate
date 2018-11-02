import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as styled from './Container.styles';

export default class Wrapper extends Component {
    static propTypes = {
        children: PropTypes.node,
    };

    static defaultProps = {
        children: null,
    };

    render() {
        const { children } = this.props;
        return (
            <styled.Container>
                <styled.Header>
                    kjhk
                </styled.Header>
                <styled.Content>
                    {children}
                </styled.Content>
            </styled.Container>
        );
    }
}
