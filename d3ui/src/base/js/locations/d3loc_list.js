import React from 'react';
import {Datagrid, DateField, List, Pagination, TextField} from 'react-admin';
import {LocationFilter} from "./d3loc_filter";


const LocationPagination = props => <Pagination rowsPerPageOptions={[10, 25, 50, 100]} {...props} />
export const LocationList = props => (
    <List filters={<LocationFilter/>} {...props}
          sort={{field: 'modified', order: 'DESC'}}
          exporter={false}
          bulkActionButtons={false}
          pagination={<LocationPagination/>}>
        <Datagrid rowClick="show">
            <TextField source="name"/>
            <TextField source="type"/>
            <TextField source="aspect"/>
            <DateField source="modified" showTime/>
        </Datagrid>
    </List>
);
