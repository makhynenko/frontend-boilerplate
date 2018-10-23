import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { List } from 'react-virtualized';
import * as styled from './Table.styles';
import TableCell from './TableCell';

class TableBody extends Component {
    static propTypes = {
        columns: PropTypes.arrayOf(PropTypes.shape()).isRequired,
        data: PropTypes.arrayOf(PropTypes.shape()),
        primaryKey: PropTypes.string.isRequired,
        selectRow: PropTypes.func,
        width: PropTypes.number.isRequired,
        height: PropTypes.number.isRequired,
        rowHeight: PropTypes.number,
    };

    static defaultProps = {
        data: [],
        selectRow: undefined,
        rowHeight: 32,
    };

    handleRowClick = (row) => {
        if (this.props.selectRow) {
            this.props.selectRow(row);
        }
    };

    // Row render
    regularRowRender = (row, style) => {
        return (
            <styled.Row
                key={row[this.props.primaryKey]}
                style={style}
                onClick={() => this.handleRowClick(row)}
            >
                {this.props.columns.map(c => (
                    <TableCell
                        key={c.id}
                        value={row[c.id]}
                        column={c}
                        row={row}
                    />
                ))}
            </styled.Row>
        );
    };

    rowRenderer = ({ index, isVisible, style }) => {
        const row = this.props.data[index];
        if (!isVisible || !row) {
            return null;
        }
        return this.regularRowRender(row, style, index);
    };

    render() {
        const {
            data, height, width, columns, rowHeight,
        } = this.props;
        // Passing "data" to the list just in order to force the List re-render.
        return (
            <styled.TableBody key="table-body">
                <List
                    key="list"
                    rowCount={data.length}
                    rowHeight={rowHeight}
                    data={data}
                    rowRenderer={this.rowRenderer}
                    style={styled.listStyle}
                    height={height || (rowHeight * data.length)}
                    width={width}
                    columns={columns}
                />
            </styled.TableBody>
        );
    }
}

export default TableBody;
