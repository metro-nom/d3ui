import React from 'react';
import {Filter, ReferenceInput, SelectInput, TextInput} from 'react-admin';

export const ProductFilter = (props) => (
    <Filter {...props}>
        <ReferenceInput
            label="Type"
            source="type_id"
            reference="types"
            filter={{"aspect_id": "product"}}
            allowEmpty
        >
            <SelectInput optionText="name"/>
        </ReferenceInput>
        <ReferenceInput
            label="Scope"
            source="scope_id"
            reference="scopes"
            filter={{"aspect_id": "product"}}
            allowEmpty
        >
            <SelectInput optionText="name"/>
        </ReferenceInput>
        <ReferenceInput
            label="VM OS"
            source="report_vm_os_id"
            reference="report_vm_os"
            filter={{"aspect_id": "product"}}
            allowEmpty>
            <SelectInput optionText="name"/>
        </ReferenceInput>
        <TextInput label="IP" source="query_ip"/>
        <TextInput label="FQDN" source="query_fqdn"/>
        <ReferenceInput
            label="Power State"
            source="report_power_state_id"
            reference="report_power_state"
            filter={{"aspect_id": "product"}}
            allowEmpty
        >
            <SelectInput optionText="name"/>
        </ReferenceInput>
        <TextInput label="Fulltext (slow)" source="query"/>
    </Filter>
);
