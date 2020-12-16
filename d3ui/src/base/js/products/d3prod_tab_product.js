import React from 'react';
import {
    ArrayField,
    ChipField,
    Datagrid,
    DateField,
    Pagination,
    ReferenceArrayField,
    ReferenceField,
    ReferenceManyField,
    SingleFieldList,
    Tab,
    TextField
} from 'react-admin';
import DeveloperBoardIcon from '@material-ui/icons/DeveloperBoard';
import {propertyRowStyle} from "../../../tools_property_row_style";

function D3ProdTabProduct(props, controllerProps) {
    return (
        controllerProps.record && controllerProps.record._product_aspect &&
        <Tab label="product" icon={<DeveloperBoardIcon/>}>

            {/*-=#   Name  #=---------------------------------------------------*/}
            <TextField label="Name" source="_product_name"/>

            {controllerProps.record && controllerProps.record._product_description &&
            <TextField label="Description" source="_product_description"/>
            }

            {/*-=#   Has Part  #=---------------------------------------------------*/}
            {controllerProps.record
            && controllerProps.record._product_hasPart
            && controllerProps.record._product_hasPart.length > 0 &&
            <ReferenceManyField
                perPage={50}
                label="Has Part"
                pagination={<Pagination rowsPerPageOptions={[50, 100, 500]} {...props} />}
                sort={{field: 'name', order: 'ASC'}}
                filter={{
                    context: 'http://context.d3.example.org/base.jsonld'
                }}
                allowEmpty={true}
                target="id"
                source="_product_hasPart"
                reference="products">
                <SingleFieldList linkType="show">
                    <ChipField clickable={true} source="name"/>
                </SingleFieldList>
            </ReferenceManyField>
            }

            {/*-=#   Is Part Of  #=---------------------------------------------------*/}
            {controllerProps.record && controllerProps.record._product_isPartOf &&
            <ReferenceField label="Is Part Of"
                            link="show"
                            allowEmpty={true}
                            source="_product_isPartOf"
                            reference="products">
                <ChipField source="name" clickable={true}/>
            </ReferenceField>
            }

            {/*-=#   Contained In  #=---------------------------------------------------*/}
            {controllerProps.record && controllerProps.record._product_containedIn &&
            <ReferenceField label="Contained In"
                            link="show"
                            allowEmpty={true}
                            source="_product_containedIn"
                            reference="locations">
                <ChipField source="name" clickable={true}/>
            </ReferenceField>
            }

            {controllerProps.record
            && controllerProps.record._product_providesFunction
            && controllerProps.record._product_providesFunction.length > 0 &&
            <ReferenceArrayField label="Provides Function"
                                 allowEmpty={true}
                                 target="id"
                                 source="_product_providesFunction"
                                 reference="functions">
                <SingleFieldList linkType="show">
                    <ChipField clickable={true} source="name"/>
                </SingleFieldList>
            </ReferenceArrayField>
            }

            {controllerProps.record && controllerProps.record._product_long_desc &&
            <TextField source="_product_long_desc"/>
            }

            {controllerProps.record && controllerProps.record._product_vendor &&
            <TextField label="Vendor" source="_product_vendor"/>
            }

            {controllerProps.record && controllerProps.record._product_serial_number &&
            <TextField label="Serial number" source="_product_serial_number"/>
            }

            {controllerProps.record && controllerProps.record._product_uid &&
            <TextField label="Product UID" source="_product_uid"/>
            }

            {controllerProps.record && controllerProps.record._product_tags &&
            <TextField source="_product_tags"/>
            }

            {controllerProps.record
            && controllerProps.record._product_tags
            && controllerProps.record._product_tags.length > 0 &&
            <ReferenceManyField
                label="Tags"
                target="id"
                source="_product_tags"
                reference="tags">
                <SingleFieldList linkType="show">
                    <ChipField clickable={true} source="name"/>
                </SingleFieldList>
            </ReferenceManyField>
            }


            {controllerProps.record
            && controllerProps.record._product_properties
            && controllerProps.record._product_properties.length > 0 &&
            <ArrayField label="Properties" source="_product_properties">
                <Datagrid rowStyle={propertyRowStyle}>
                    <TextField source="_product_prop_id"/>
                    <TextField source="_product_prop_val"/>
                </Datagrid>
            </ArrayField>
            }

            {controllerProps.record && controllerProps.record._product_created &&
            <DateField label="Created" source="_product_created" style={{color: '#A0A0A0'}} showTime/>
            }

            {controllerProps.record && controllerProps.record._product_expired &&
            <DateField source="_product_expired" showTime/>
            }

        </Tab>
    );
};

export default D3ProdTabProduct;
