import React from "react";
import LaunchIcon from '@material-ui/icons/Launch';

export const D3UrlField = ({record = {}, source}) =>
    <a href={record[source] + "?compact=http://context.d3.example.org/base.jsonld"}
       target="_blank"
    >
        <LaunchIcon/>
    </a>;

export const NodeTitle = ({record}) => {
    return <span>{record ? `${record.name} (${record.aspect})` : ''}</span>;
};
