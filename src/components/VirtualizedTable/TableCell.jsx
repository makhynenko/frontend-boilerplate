import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as styled from './Table.styles';


class TableCell extends Component {
    static propTypes = {
        column: PropTypes.shape(),
        row: PropTypes.shape(),
        value: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number,
            PropTypes.array,
        ]),
    };

    static defaultProps = {
        column: undefined,
        row: undefined,
        value: undefined,
    };

    renderCell = (column) => {
        if (column.render) {
            return column.render(this.props);
        }
        return <styled.CellValue>{this.props.value}</styled.CellValue>;
    };

    render() {
        const { column } = this.props;
        return (column.render) ? column.render(this.props) : (
            <styled.Cell
                style={{ ...column.cellStyle, width: column.width }}
            >
                <styled.CellValue>{this.props.value}</styled.CellValue>
            </styled.Cell>
        );
    }
}

export default TableCell;
