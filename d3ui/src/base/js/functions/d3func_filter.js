import React from 'react';
import {Filter, ReferenceInput, SelectInput, TextInput} from 'react-admin';


export const FunctionFilter = (props) => (
    <Filter {...props}>
        <ReferenceInput
            label="Type"
            source="type_id"
            reference="types"
            filter={{"aspect_id": "function"}}
            allowEmpty
        >
            <SelectInput optionText="name"/>
        </ReferenceInput>
        <ReferenceInput
            label="Scope"
            source="scope_id"
            reference="scopes"
            filter={{"aspect_id": "function"}}
            allowEmpty
        >
            <SelectInput optionText="name"/>
        </ReferenceInput>
        <TextInput label="Fulltext (slow)" source="query"/>
    </Filter>
);

