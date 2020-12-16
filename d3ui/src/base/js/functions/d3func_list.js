import React from 'react';
import {Datagrid, DateField, List, Pagination, TextField} from 'react-admin';
import {FunctionFilter} from "./d3func_filter";


const FunctionPagination = props => <Pagination rowsPerPageOptions={[10, 25, 50, 100]} {...props} />

export const FunctionList = props => (
    <List filters={<FunctionFilter/>} {...props}
          sort={{field: 'modified', order: 'DESC'}}
          exporter={false}
          bulkActionButtons={false}
          pagination={<FunctionPagination/>}>
        <Datagrid rowClick="show">
            <TextField source="name"/>
            <TextField source="type"/>
            <TextField source="aspect"/>
            <DateField source="modified" showTime/>
        </Datagrid>
    </List>
);