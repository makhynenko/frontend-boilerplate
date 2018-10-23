import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container } from './Page.styles';
import Table from '../../components/VirtualizedTable/Table';

const data = [
    {
        id: '1245',
        name: 'here',
        price: 124.43,
        model: 'Iphone 6',
        age: '234 days',
    },
    {
        id: '1435',
        name: 'here',
        price: 124.43,
        model: 'Iphone 8',
        age: '234 days',
    },

    {
        id: '12235',
        name: 'here',
        price: 124.43,
        model: 'Iphone 7',
        age: '234 days',
    },
];

const columns = [
    {
        name: 'Name',
        id: 'name',
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
        name: 'Model',
        id: 'model',
        width: '200px',
    },
    {
        name: 'Age',
        id: 'age',
        width: '200px',
    },
];

class Page extends Component {

    handleRowSelect = (value) => {
        console.log('Page.jsx', '--->', 'handleRowSelect\n', value);
    };

    render() {
        return (
            <Container>
                <Table
                    data={data}
                    columns={columns}
                    selectRow={this.handleRowSelect}
                    width={1000}
                    rowHeight={50}
                    headerHeight={50}
                    height={1000}
                    primaryKey="id"
                />
            </Container>
        );
    }
}

export default Page;
