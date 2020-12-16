import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import {Title} from 'react-admin';

export default () => (
    <Card>
        <Title title="Not Found"/>
        <CardContent>
            <h1>404: Page not found</h1>
            <img width="100%" src="/static/img/d3ui.jpg"/>
        </CardContent>
    </Card>
);
