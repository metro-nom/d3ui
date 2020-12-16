import React from 'react';
import {
    ArrayField,
    ChipField,
    Datagrid,
    Pagination,
    ReferenceArrayField,
    ReferenceField,
    ReferenceManyField,
    SingleFieldList,
    Tab,
    TextField
} from 'react-admin';
import LocationCityIcon from '@material-ui/icons/LocationCity';
import {propertyRowStyle} from "../../../tools_property_row_style";

function D3FuncTabFunction(props, controllerProps) {
    return (
        controllerProps.record && controllerProps.record._function_aspect &&
        <Tab label="function" icon={<LocationCityIcon/>}>

            <TextField label="Name" source="_function_name"/>

            {controllerProps.record
            && controllerProps.record._function_consumer
            && controllerProps.record._function_consumer.length > 0 &&
            <TextField source="_function_consumer"/>
            }


            {controllerProps.record
            && controllerProps.record._function_hasPart
            && controllerProps.record._function_hasPart.length > 0 &&
            <ReferenceManyField
                label="Has Part"
                perPage={50}
                pagination={<Pagination rowsPerPageOptions={[50, 100, 500]} {...props} />}
                sort={{field: 'name', order: 'ASC'}}
                filter={{
                    context: 'http://context.d3.example.org/base.jsonld'
                }}
                allowEmpty={true}
                target="id"
                source="_function_hasPart"
                reference="functions">
                <SingleFieldList linkType="show">
                    <ChipField clickable={true} source="name"/>
                </SingleFieldList>
            </ReferenceManyField>
            }

            {controllerProps.record && controllerProps.record._function_isPartOf &&
            <ReferenceField label="Is Part Of"
                            link="show"
                            allowEmpty={true}
                            source="_function_isPartOf"
                            reference="functions">
                <ChipField source="name" clickable={true}/>
            </ReferenceField>
            }

            {controllerProps.record
            && controllerProps.record._function_implementedBy
            && controllerProps.record._function_implementedBy.length > 0 &&
            <ReferenceArrayField label="Implemented By"
                                 target="id"
                                 source="_function_implementedBy"
                                 reference="products">
                <SingleFieldList linkType="show">
                    <ChipField clickable={true} source="name"/>
                </SingleFieldList>
            </ReferenceArrayField>
            }


            {controllerProps.record && controllerProps.record._function_tags &&
            <TextField source="_function_tags"/>
            }
            {controllerProps.record
            && controllerProps.record._function_properties
            && controllerProps.record._function_properties.length > 0 &&
            <ArrayField label="Properties" source="_function_properties">
                <Datagrid rowStyle={propertyRowStyle}>
                    <TextField source="_function_prop_id"/>
                    <TextField source="_function_prop_val"/>
                </Datagrid>
            </ArrayField>
            }
        </Tab>
    );
};

export default D3FuncTabFunction;
