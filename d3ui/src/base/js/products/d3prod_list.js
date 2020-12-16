import React from 'react';
import {Datagrid, DateField, List, Pagination, TextField} from 'react-admin';
import {ProductFilter} from "./d3prod_filter";

const ProductPagination = props => <Pagination rowsPerPageOptions={[10, 25, 50, 100]} {...props} />

export const ProductList = props => (
    <List filters={<ProductFilter/>} {...props}
          sort={{field: 'modified', order: 'DESC'}}
          exporter={false}
          bulkActionButtons={false}
          pagination={<ProductPagination/>}>
        <Datagrid rowClick="show">
            <TextField source="name"/>
            <TextField source="type"/>
            <TextField source="aspect"/>
            <DateField source="modified" showTime/>
        </Datagrid>
    </List>
);
