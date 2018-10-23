import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as styled from './Table.styles';
import TableBody from './TableBody';
import TableHeader from './TableHeader';

class Table extends Component {
    static propTypes = {
        data: PropTypes.arrayOf(PropTypes.shape),
        columns: PropTypes.arrayOf(PropTypes.shape).isRequired,
        primaryKey: PropTypes.string.isRequired,
        height: PropTypes.number.isRequired,
        width: PropTypes.number.isRequired,
        selectRow: PropTypes.func,
        headerHeight: PropTypes.number,
        rowHeight: PropTypes.number,
        header: PropTypes.bool,
        actions: PropTypes.shape(),
        sorting: PropTypes.shape(),
    };

    static defaultProps = {
        data: null,
        selectRow: undefined,
        rowHeight: undefined,
        headerHeight: 40,
        header: true,
        actions: undefined,
        sorting: undefined,
    };

    getColumns = () => {
        const initialWidth = this.props.columns.reduce((a, c) => a + parseInt(c.width, 10), 0);
        const factor = this.props.width / initialWidth;
        return this.props.columns.map(c => ({ ...c, width: `${parseInt(c.width, 10) * factor}px` }));
    };

    render() {
        const columns = this.getColumns();
        const { data } = this.props;
        return (data &&
            <styled.TableContainer>
                <TableHeader
                    columns={columns}
                    height={this.props.headerHeight}
                    width={this.props.width}
                    header={this.props.header}
                    actions={this.props.actions}
                    sorting={this.props.sorting}
                />
                <TableBody
                    data={data}
                    columns={columns}
                    selectRow={this.props.selectRow}
                    width={this.props.width}
                    rowHeight={this.props.rowHeight}
                    height={this.props.height - this.props.headerHeight}
                    primaryKey={this.props.primaryKey}
                />
            </styled.TableContainer>
        );
    }
}

export default Table;
