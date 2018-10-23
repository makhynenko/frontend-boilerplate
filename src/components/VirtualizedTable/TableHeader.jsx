import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as styled from './TableHeader.styles';

class TableHeader extends Component {
    render() {
        const {
            columns, width, height, header,
        } = this.props;
        if (!header) return null;
        return (
            <styled.TableHeader height={height} width={width}>
                {
                    columns && columns.map(c => (
                        <styled.HeaderCell
                            width={c.width}
                            height={height}
                            key={c.id}
                        >
                            <styled.HeaderCellValue
                                title={c.title || c.name}
                            >
                                {c.name}
                            </styled.HeaderCellValue>
                        </styled.HeaderCell>
                    ))
                }
            </styled.TableHeader>
        );
    }
}

TableHeader.propTypes = {
    columns: PropTypes.arrayOf(PropTypes.shape()).isRequired,
    columnsForChouser: PropTypes.arrayOf(PropTypes.shape()).isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    header: PropTypes.bool.isRequired,
    handleSwitchColumn: PropTypes.func,
    actions: PropTypes.shape(),
    sorting: PropTypes.shape(),
};

TableHeader.defaultProps = {
    handleSwitchColumn: undefined,
    actions: undefined,
    sorting: undefined,
};

export default TableHeader;
