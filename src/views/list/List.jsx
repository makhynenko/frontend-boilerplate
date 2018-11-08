import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Button, Dropdown } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import * as styled from './List.styles';
import { actions } from './duck';
import Table from '../../components/VirtualizedTable/Table';

const columns = [
    {
        name: 'Model',
        id: 'model',
        width: '200px',
        headerStyle: {
            paddingLeft: '40px',
        },
        cellStyle: {
            paddingLeft: '40px',
        },
    },
    {
        name: 'Price',
        id: 'price',
        width: '200px',
    },
    {
        name: 'Storage',
        id: 'storage',
        width: '200px',
    },
    {
        name: 'Color',
        id: 'color',
        width: '200px',
    },
    {
        name: 'IOS',
        id: 'ios',
        width: '200px',
    },
];

const options = [
    { key: '6', text: 'Iphone 6', value: '6' },
    { key: '6S', text: 'Iphone 6S', value: '6S' },
    { key: '7', text: 'Iphone 7', value: '7' },
    { key: '8', text: 'Iphone 8', value: '8' },
];

class List extends Component {
    static propTypes = {
        dataList: PropTypes.arrayOf(PropTypes.shape()),
        selectedItem: PropTypes.shape(),
        actions: PropTypes.shape(),
    };

    static defaultProps = {
        dataList: undefined,
        actions: undefined,
        selectedItem: undefined,
    };

    componentWillMount() {
        this.props.actions.fetch();
    };

    handleRowSelect = (item) => {
        this.props.actions.selectItem(item);
    };

    render() {
        return (
            <styled.Container>
                <styled.Toolbar>
                    <styled.Dropdown placeholder="Model" multiple selection options={options} />
                    <Button primary>Search</Button>
                </styled.Toolbar>
                <styled.Content>
                    <Table
                        data={this.props.dataList}
                        columns={columns}
                        selectRow={this.handleRowSelect}
                        width={1200}
                        rowHeight={50}
                        headerHeight={50}
                        height={1000}
                        primaryKey="id"
                    />
                    <styled.ItemDetailsContainer>
                        {this.props.itemDetails && this.props.itemDetails.model}
                    </styled.ItemDetailsContainer>
                </styled.Content>
            </styled.Container>
        );
    }
}


function mapStateToProps(state) {
    return {
        dataList: state.list.dataList,
        selectedItem: state.list.selectedItem,
        itemDetails: state.list.itemDetails,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch),
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(List);
