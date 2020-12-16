import React from 'react';
import {DateField, Tab, TextField} from 'react-admin';
import {D3UrlField} from "./d3tools";
import ChangeHistoryIcon from '@material-ui/icons/ChangeHistory';

function D3TabBase(props, controllerProps) {
    return (
        <Tab label="base" path="base" icon={<ChangeHistoryIcon/>}>
            <TextField label="Aspect" source="aspect"/>
            <TextField source="name"/>
            {controllerProps.record && controllerProps.record.description &&
            <TextField source="description"/>
            }
            {controllerProps.record && controllerProps.record.created &&
            <DateField source="created" showTime/>
            }
            {controllerProps.record && controllerProps.record.modified &&
            <DateField source="modified" showTime/>
            }
            {controllerProps.record && controllerProps.record.origin &&
            <TextField source="origin"/>
            }
            <TextField source="scope"/>
            <TextField source="type"/>
            <TextField source="id"/>
            <D3UrlField source="id"/>
        </Tab>
    );
};

export default D3TabBase;
