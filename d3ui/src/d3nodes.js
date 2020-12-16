import React from 'react';
import {
    ArrayField,
    Datagrid,
    DateField,
    Filter,
    List,
    Pagination,
    ReferenceField,
    ReferenceInput,
    ChipField,
    ReferenceArrayInput,
    ReferenceArrayField,
    SingleFieldList,
    SelectInput,
    Show,
    ShowButton,
    ShowController,
    Tab,
    TabbedShowLayout,
    TextField,
    TextInput
} from 'react-admin';
import {
    D3UrlField,
    NodeTitle
} from "./d3tools";
import ComputerIcon from '@material-ui/icons/Computer';
import ChangeHistoryIcon from '@material-ui/icons/ChangeHistory';
import LocationCityIcon from '@material-ui/icons/LocationCity';
import LocalGroceryStoreIcon from '@material-ui/icons/LocalGroceryStore';
import DeveloperBoardIcon from '@material-ui/icons/DeveloperBoard';
import StorageIcon from '@material-ui/icons/Storage';
import WbIridescentIcon from '@material-ui/icons/WbIridescent';
import DataUsageIcon from '@material-ui/icons/DataUsage';
import ScreenShareIcon from '@material-ui/icons/ScreenShare';
import ImageAspectRatioIcon from '@material-ui/icons/ImageAspectRatio';
import LocalAtmIcon from '@material-ui/icons/LocalAtm';
import BlurCircularIcon from '@material-ui/icons/BlurCircular';
import HttpIcon from '@material-ui/icons/Http';
import AppsIcon from '@material-ui/icons/Apps';
import CasinoIcon from '@material-ui/icons/Casino';
import LocalActivityIcon from '@material-ui/icons/LocalActivity';
import ImportExportIcon from '@material-ui/icons/ImportExport';
import ReceiptIcon from '@material-ui/icons/Receipt';
import {propertyRowStyle} from "./tools_property_row_style";





// const UserShow = props => (
//     <ShowController {...props}>
//         {controllerProps =>
//             <ShowView {...props} {...controllerProps}>
//                 <SimpleShowLayout>
//                     <TextField source="username" />
//                     {controllerProps.record && controllerProps.record.hasEmail &&
//                         <TextField source="email" />
//                     }
//                 </SimpleShowLayout>
//             </ShowView>
//         }
//     </ShowController>
// );

export const NodeShow = props => (
    <ShowController {...props}>
        {controllerProps =>
            <Show {...props} {...controllerProps} title={<NodeTitle/>}>
                <TabbedShowLayout>
                    <Tab label="base" icon={<ChangeHistoryIcon/>}>
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
                        <TextField source="scope"/>
                        <TextField source="type"/>
                        <D3UrlField source="id"/>
                    </Tab>

                    {controllerProps.record && controllerProps.record._location_aspect &&
                    <Tab label="location" icon={<LocationCityIcon/>}>
                        {controllerProps.record && controllerProps.record._location_hasPart &&
                        <ReferenceArrayField label="Has Part"
                                            target="id"
                                            source="_location_hasPart"
                                            reference="locations">
                            <SingleFieldList linkType="show">
                                <ChipField clickable={true} source="name"/>
                            </SingleFieldList>
                        </ReferenceArrayField>
                        }

                        {controllerProps.record && controllerProps.record._location_isPartOf &&
                        <ReferenceField label="Is Part Of"
                                        link="show"
                                        allowEmpty={true}
                                        source="_location_isPartOf"
                                        reference="locations">
                            <ChipField clickable={true} link="show" source="name"/>
                            {/*<TextField source="name"/>*/}
                        </ReferenceField>
                        }

                        {controllerProps.record && controllerProps.record._location_tags &&
                            <TextField source="_location_tags"/>
                        }
                        {controllerProps.record
                        && controllerProps.record._location_properties
                        && controllerProps.record._location_properties.length > 0 &&
                        <ArrayField label="Properties" source="_location_properties">
                            <Datagrid rowStyle={propertyRowStyle}>
                                <TextField source="_location_prop_id"/>
                                <TextField source="_location_prop_val"/>
                            </Datagrid>
                        </ArrayField>
                        }
                    </Tab>
                    }

                    {controllerProps.record && controllerProps.record._country_aspect &&
                    <Tab label="Country" icon={<LocationCityIcon/>}>
                        <TextField source="_country_name"/>
                        <DateField source="_country_created" showTime/>
                        {controllerProps.record && controllerProps.record._country_description &&
                        <TextField label="Description" source="_country_description"/>
                        }
                        {controllerProps.record
                        && controllerProps.record._country_properties
                        && controllerProps.record._country_properties.length > 0 &&
                        <ArrayField label="Properties" source="_country_properties">
                            <Datagrid rowStyle={propertyRowStyle}>
                                <TextField source="_country_prop_id"/>
                                <TextField source="_country_prop_val"/>
                            </Datagrid>
                        </ArrayField>
                        }
                    </Tab>
                    }

                    {controllerProps.record && controllerProps.record._product_aspect &&
                    <Tab label="product" icon={<DeveloperBoardIcon/>}>
                        {/*<TextField source="_product_aspect"/>*/}
                        <TextField label="Aspect" source="_product_aspect"/>

                        {controllerProps.record && controllerProps.record._product_name &&
                        <TextField source="_product_name"/>
                        }

                        {controllerProps.record && controllerProps.record._product_uid &&
                        <TextField label="Product UID" source="_product_uid"/>
                        }

                        {controllerProps.record && controllerProps.record._product_serial_number &&
                        <TextField label="Serial number" source="_product_serial_number"/>
                        }

                        {controllerProps.record && controllerProps.record._product_vendor &&
                        <TextField label="Vendor" source="_product_vendor"/>
                        }

                        {controllerProps.record && controllerProps.record._product_created &&
                        <DateField label="Created" source="_product_created" showTime/>
                        }

                        {controllerProps.record && controllerProps.record._product_expired &&
                        <DateField source="_product_expired" showTime/>
                        }
                        {/*<TextField source="_product_hasPart"/>*/}

                        {/*OK*/}
                        {/*<TextField label="Has Part 1" source="_product_hasPart"/>*/}
                        {controllerProps.record
                        && controllerProps.record._product_hasPart
                        && controllerProps.record._product_hasPart.length > 0 &&
                        <ReferenceArrayField label="Has Part"
                                             allowEmpty={true}
                                             target="id"
                                             source="_product_hasPart"
                                             reference="products">
                            <SingleFieldList linkType="show">
                                <ChipField clickable={true} source="name"/>
                            </SingleFieldList>
                        </ReferenceArrayField>
                        }

                        {/*<TextField label="Is Part Of 1" source="_product_isPartOf"/>*/}
                        {controllerProps.record && controllerProps.record._product_isPartOf &&
                        <ReferenceField label="Is Part Of"
                                        link="show"
                                        allowEmpty={true}
                                        source="_product_isPartOf"
                                        reference="products">
                            <ChipField source="name" clickable={true}/>
                        </ReferenceField>
                        }

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
                        <TextField source="_product_long_desc"/>
                        <TextField source="_product_tags"/>

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
                    </Tab>
                    }

                    {controllerProps.record && controllerProps.record._function_aspect &&
                    <Tab label="function" icon={<LocationCityIcon/>}>
                        {controllerProps.record
                        && controllerProps.record._function_hasPart
                        && controllerProps.record._function_hasPart.length > 0 &&
                        <ReferenceArrayField label="Has Part"
                                            target="id"
                                            source="_function_hasPart"
                                            reference="functions">
                            <SingleFieldList linkType="show">
                                <ChipField clickable={true} source="name"/>
                            </SingleFieldList>
                        </ReferenceArrayField>
                        }

                        {controllerProps.record && controllerProps.record._function_isPartOf &&
                        <ReferenceField label="Is Part Of"
                                        link="show"
                                        allowEmpty={true}
                                        source="_function_isPartOf"
                                        reference="functions">
                            <ChipField source="name" clickable={true}/>
                            {/*<TextField source="name"/>*/}
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
                    }


                    {controllerProps.record && controllerProps.record._store_aspect &&
                    <Tab label="store" icon={<LocalGroceryStoreIcon/>}>
                        <TextField source="_store_name"/>
                        <TextField source="_store_gmap"/>
                        <DateField source="_store_created" showTime/>
                        {/*<TextField source="_store_properties"/>*/}
                        {controllerProps.record
                        && controllerProps.record._store_properties
                        && controllerProps.record._store_properties.length > 0 &&
                        <ArrayField label="Properties" source="_store_properties">
                            <Datagrid rowStyle={propertyRowStyle}>
                                <TextField source="_store_prop_id"/>
                                <TextField source="_store_prop_val"/>
                            </Datagrid>
                        </ArrayField>
                        }
                    </Tab>
                    }

                    {controllerProps.record && controllerProps.record._dc_item_aspect &&
                    <Tab label="dc item" icon={<WbIridescentIcon/>}>
                        <TextField source="_dc_item_name"/>
                        {controllerProps.record && controllerProps.record._dc_item_serialnumber &&
                        <TextField source="_dc_item_serialnumber"/>
                        }
                        <DateField source="_dc_item_created" showTime/>
                        {controllerProps.record
                        && controllerProps.record._dc_item_properties
                        && controllerProps.record._dc_item_properties.length > 0 &&
                        <ArrayField label="Properties" source="_dc_item_properties">
                            <Datagrid rowStyle={propertyRowStyle}>
                                <TextField source="_dc_item_prop_id"/>
                                <TextField source="_dc_item_prop_val"/>
                            </Datagrid>
                        </ArrayField>
                        }
                    </Tab>
                    }

                    {controllerProps.record && controllerProps.record._marc_aspect &&
                    <Tab label="MARC" icon={<LocalAtmIcon/>}>
                        <TextField source="_marc_name"/>
                        <DateField source="_marc_created" showTime/>
                        {controllerProps.record
                        && controllerProps.record._marc_properties
                        && controllerProps.record._marc_properties.length > 0 &&
                        <ArrayField label="Properties" source="_marc_properties">
                            <Datagrid rowStyle={propertyRowStyle}>
                                <TextField source="_marc_prop_id"/>
                                <TextField source="_marc_prop_val"/>
                            </Datagrid>
                        </ArrayField>
                        }
                    </Tab>
                    }

                    {controllerProps.record && controllerProps.record._app_server_aspect &&
                    <Tab label="APP Server" icon={<AppsIcon/>}>
                        <TextField source="_app_server_name"/>
                        <DateField source="_app_server_created" showTime/>
                        <ArrayField label="Properties" source="_app_server_properties">
                            <Datagrid rowStyle={propertyRowStyle}>
                                <TextField source="_app_server_prop_id"/>
                                <TextField source="_app_server_prop_val"/>
                            </Datagrid>
                        </ArrayField>
                    </Tab>
                    }

                    {controllerProps.record && controllerProps.record._postgresql_aspect &&
                    <Tab label="postgresql" icon={<DataUsageIcon/>}>
                        <TextField source="_postgresql_name"/>
                        <DateField source="_postgresql_created" showTime/>
                        <ArrayField label="Properties" source="_postgresql_properties">
                            <Datagrid rowStyle={propertyRowStyle}>
                                <TextField source="_postgresql_prop_id"/>
                                <TextField source="_postgresql_prop_val"/>
                            </Datagrid>
                        </ArrayField>
                    </Tab>
                    }

                    {controllerProps.record && controllerProps.record._dc_switch_aspect &&
                    <Tab label="dc_switch" icon={<ImportExportIcon/>}>
                        {controllerProps.record && controllerProps.record._dc_switch_model &&
                            <TextField label="Model" source="_dc_switch_model"/>
                        }
                        {controllerProps.record && controllerProps.record._dc_switch_ip_address &&
                            <TextField label="Switch IP" source="_dc_switch_ip_address"/>
                        }
                        <DateField source="_dc_switch_created" showTime/>
                        <ArrayField label="Properties" source="_dc_switch_properties">
                            <Datagrid rowStyle={propertyRowStyle}>
                                <TextField source="_dc_switch_prop_id"/>
                                <TextField source="_dc_switch_prop_val"/>
                            </Datagrid>
                        </ArrayField>
                    </Tab>
                    }

                    {controllerProps.record && controllerProps.record._dc_port_aspect &&
                    <Tab label="dc_port" icon={<ImportExportIcon/>}>
                        <TextField source="_dc_port_name"/>
                        {controllerProps.record && controllerProps.record._dc_port_fabric_name &&
                            <TextField label="Fabric Name" source="_dc_port_fabric_name"/>
                        }
                        {controllerProps.record && controllerProps.record._dc_port_switch_name &&
                            <TextField label="Switch Name" source="_dc_port_switch_name"/>
                        }
                        {controllerProps.record && controllerProps.record._dc_port_oper_status &&
                            <TextField label="Oper Status" source="_dc_port_oper_status"/>
                        }
                        {controllerProps.record && controllerProps.record._dc_port_admin_status &&
                            <TextField label="Admin Status" source="_dc_port_admin_status"/>
                        }
                        {controllerProps.record && controllerProps.record._dc_port_speed &&
                            <TextField label="Speed" source="_dc_port_speed"/>
                        }
                        {controllerProps.record && controllerProps.record._dc_port_alias &&
                            <TextField label="Port Alias" source="_dc_port_alias"/>
                        }
                        {controllerProps.record && controllerProps.record._dc_port_cdp_neighbor &&
                            <TextField label="CDP Neighbor" source="_dc_port_cdp_neighbor"/>
                        }
                        {controllerProps.record && controllerProps.record._dc_port_lldp_neighbor &&
                            <TextField label="LLDP Neighbor" source="_dc_port_lldp_neighbor"/>
                        }
                        <DateField source="_dc_port_created" showTime/>
                        <ArrayField label="Properties" source="_dc_port_properties">
                            <Datagrid rowStyle={propertyRowStyle}>
                                <TextField source="_dc_port_prop_id"/>
                                <TextField source="_dc_port_prop_val"/>
                            </Datagrid>
                        </ArrayField>
                    </Tab>
                    }

                    {controllerProps.record && controllerProps.record._esx_server_aspect &&
                    <Tab label="esx host" icon={<ScreenShareIcon/>}>
                        <TextField source="_esx_server_name"/>
                        {controllerProps.record && controllerProps.record._esx_server_num_cpu_packages &&
                            <TextField label="CPU Packages" source="_esx_server_num_cpu_packages"/>
                        }
                        {controllerProps.record && controllerProps.record._esx_server_num_cpu_cores &&
                            <TextField label="CPU Cores total" source="_esx_server_num_cpu_cores"/>
                        }
                        {controllerProps.record && controllerProps.record._esx_server_hw_vendor &&
                            <TextField label="" source="_esx_server_hw_vendor"/>
                        }
                        {controllerProps.record && controllerProps.record._esx_server_hw_model &&
                            <TextField label="" source="_esx_server_hw_model"/>
                        }
                        {controllerProps.record && controllerProps.record._esx_server_hw_biosVersion &&
                            <TextField label="" source="_esx_server_hw_biosVersion"/>
                        }
                        <DateField source="_esx_server_created" showTime/>
                        <ArrayField label="Properties" source="_esx_server_properties">
                            <Datagrid rowStyle={propertyRowStyle}>
                                <TextField source="_esx_server_prop_id"/>
                                <TextField source="_esx_server_prop_val"/>
                            </Datagrid>
                        </ArrayField>
                    </Tab>
                    }

                    {controllerProps.record && controllerProps.record._esx_cluster_aspect &&
                    <Tab label="esx cluster" icon={<CasinoIcon/>}>
                        <TextField source="_esx_cluster_name"/>
                        {controllerProps.record && controllerProps.record._esx_cluster_num_hosts &&
                            <TextField label="Number Hosts" source="_esx_cluster_num_hosts"/>
                        }
                        {controllerProps.record && controllerProps.record._esx_cluster_num_cpu_cores &&
                            <TextField label="CPU Cores" source="_esx_cluster_num_cpu_cores"/>
                        }
                        {controllerProps.record && controllerProps.record._esx_cluster_cnt_vm_off &&
                            <TextField label="VMs (powerd off)" source="_esx_cluster_cnt_vm_off"/>
                        }
                        {controllerProps.record && controllerProps.record._esx_cluster_cnt_vm_total &&
                            <TextField label="VMs (total)" source="_esx_cluster_cnt_vm_total"/>
                        }
                        <DateField source="_esx_cluster_created" showTime/>
                        <ArrayField label="Properties" source="_esx_cluster_properties">
                            <Datagrid rowStyle={propertyRowStyle}>
                                <TextField source="_esx_cluster_prop_id"/>
                                <TextField source="_esx_cluster_prop_val"/>
                            </Datagrid>
                        </ArrayField>
                    </Tab>
                    }

                    {controllerProps.record && controllerProps.record._vmware_vm_aspect &&
                    <Tab label="vmware vm" icon={<ImageAspectRatioIcon/>}>
                        <TextField source="_vmware_vm_name"/>
                        <DateField source="_vmware_vm_created" showTime/>
                        {controllerProps.record && controllerProps.record._vmware_vm_guest_os &&
                            <TextField label="Guest OS" source="_vmware_vm_guest_os"/>
                        }
                        {controllerProps.record && controllerProps.record._vmware_vm_guest_hostname &&
                            <TextField label="Guest Hostname" source="_vmware_vm_guest_hostname"/>
                        }
                        {controllerProps.record && controllerProps.record._vmware_vm_power_state &&
                            <TextField label="Power State" source="_vmware_vm_power_state"/>
                        }
                        {controllerProps.record && controllerProps.record._vmware_vm_vCPUs &&
                            <TextField label="virtual CPUs" source="_vmware_vm_vCPUs"/>
                        }
                        {controllerProps.record && controllerProps.record._vmware_vm_vMem &&
                            <TextField label="virtual Mem" source="_vmware_vm_vMem"/>
                        }
                        {controllerProps.record && controllerProps.record._vmware_vm_host_fqdn &&
                            <TextField label="Host (FQDN)" source="_vmware_vm_host_fqdn"/>
                        }
                        {controllerProps.record && controllerProps.record._vmware_vm_vcenter_fqdn &&
                            <TextField label="VCenter (FQDN)" source="_vmware_vm_vcenter_fqdn"/>
                        }
                        {controllerProps.record && controllerProps.record._vmware_vm_uptime &&
                            <TextField label="Uptime" source="_vmware_vm_uptime"/>
                        }
                        {controllerProps.record && controllerProps.record._vmware_vm_uptime_formatted &&
                            <TextField label="Uptime (readable)" source="_vmware_vm_uptime_formatted"/>
                        }
                        <ArrayField label="Properties" source="_vmware_vm_properties">
                            <Datagrid rowStyle={propertyRowStyle}>
                                <TextField source="_vmware_vm_prop_id"/>
                                <TextField source="_vmware_vm_prop_val"/>
                            </Datagrid>
                        </ArrayField>
                    </Tab>
                    }

                    {controllerProps.record && controllerProps.record._cps_aix_aspect &&
                    <Tab label="CPS AIX" icon={<ImageAspectRatioIcon/>}>
                        <TextField source="_cps_aix_name"/>
                        <DateField source="_cps_aix_created" showTime/>
                        {controllerProps.record && controllerProps.record._cps_aix_hostname &&
                            <TextField label="Hostname" source="_cps_aix_hostname"/>
                        }
                        <ArrayField label="Properties" source="_cps_aix_properties">
                            <Datagrid rowStyle={propertyRowStyle}>
                                <TextField source="_cps_aix_prop_id"/>
                                <TextField source="_cps_aix_prop_val"/>
                            </Datagrid>
                        </ArrayField>
                    </Tab>
                    }

                    {controllerProps.record && controllerProps.record._ad_computer_aspect &&
                    <Tab label="AD Computer" icon={<LocalActivityIcon/>}>
                        <TextField source="_ad_computer_name"/>
                        <DateField source="_ad_computer_created" showTime/>
                        <ArrayField label="Properties" source="_ad_computer_properties">
                            <Datagrid rowStyle={propertyRowStyle}>
                                <TextField source="_ad_computer_prop_id"/>
                                <TextField source="_ad_computer_prop_val"/>
                            </Datagrid>
                        </ArrayField>
                    </Tab>
                    }

                    {controllerProps.record && controllerProps.record._invoice_aspect &&
                    <Tab label="Invoice" icon={<ReceiptIcon/>}>
                        <TextField source="_invoice_name"/>
                        {controllerProps.record && controllerProps.record._invoice_customer &&
                            <TextField label="Customer" source="_invoice_customer"/>
                        }
                        {controllerProps.record && controllerProps.record._invoice_cost_center &&
                            <TextField label="Cost Center" source="_invoice_cost_center"/>
                        }
                        {controllerProps.record && controllerProps.record._invoice_psp &&
                            <TextField label="PSP" source="_invoice_psp"/>
                        }
                        {controllerProps.record && controllerProps.record._invoice_psc &&
                            <TextField label="PSC" source="_invoice_psc"/>
                        }
                        {controllerProps.record && controllerProps.record._invoice_collect_id &&
                            <TextField label="Collect ID" source="_invoice_collect_id"/>
                        }
                        <DateField source="_invoice_created" showTime/>
                        <ArrayField label="Properties" source="_invoice_properties">
                            <Datagrid rowStyle={propertyRowStyle}>
                                <TextField source="_invoice_prop_id"/>
                                <TextField source="_invoice_prop_val"/>
                            </Datagrid>
                        </ArrayField>
                    </Tab>
                    }

                    {controllerProps.record && controllerProps.record._cc_host_aspect &&
                    <Tab label="cc host" icon={<ScreenShareIcon/>}>
                        <TextField source="_cc_host_name"/>
                        <DateField source="_cc_host_created" showTime/>
                        <ArrayField label="Properties" source="_cc_host_properties">
                            <Datagrid rowStyle={propertyRowStyle}>
                                <TextField source="_cc_host_prop_id"/>
                                <TextField source="_cc_host_prop_val"/>
                            </Datagrid>
                        </ArrayField>
                    </Tab>
                    }

                    {controllerProps.record && controllerProps.record._cc_vm_aspect &&
                    <Tab label="cc vm" icon={<ImageAspectRatioIcon/>}>
                        <TextField source="_cc_vm_name"/>
                        <DateField source="_cc_vm_created" showTime/>
                        <ArrayField label="Properties" source="_cc_vm_properties">
                            <Datagrid rowStyle={propertyRowStyle}>
                                <TextField source="_cc_vm_prop_id"/>
                                <TextField source="_cc_vm_prop_val"/>
                            </Datagrid>
                        </ArrayField>
                    </Tab>
                    }

                    {controllerProps.record && controllerProps.record._k8s_aspect &&
                    <Tab label="K8S" icon={<BlurCircularIcon/>}>
                        <TextField source="_k8s_name"/>
                        <DateField source="_k8s_created" showTime/>
                        <ArrayField label="Properties" source="_k8s_properties">
                            <Datagrid rowStyle={propertyRowStyle}>
                                <TextField source="_k8s_prop_id"/>
                                <TextField source="_k8s_prop_val"/>
                            </Datagrid>
                        </ArrayField>
                    </Tab>
                    }

                    {controllerProps.record && controllerProps.record._network_aspect &&
                    <Tab label="Network" icon={<HttpIcon/>}>
                        {controllerProps.record && controllerProps.record._network_name &&
                        <TextField source="_network_name"/>
                        }
                        {controllerProps.record && controllerProps.record._network_IPv4_net &&
                        <TextField label="IPv4 Net" source="_network_IPv4_net"/>
                        }
                        {controllerProps.record && controllerProps.record._network_IPv4_gw &&
                        <TextField label="IPv4 Gateway" source="_network_IPv4_gw"/>
                        }
                        <DateField source="_network_created" showTime/>
                        {controllerProps.record && controllerProps.record._network_description &&
                        <TextField source="_network_description"/>
                        }
                        {controllerProps.record && controllerProps.record._network_long_desc &&
                        <TextField source="_network_long_desc"/>
                        }
                        <ArrayField label="Properties" source="_network_properties">
                            <Datagrid rowStyle={propertyRowStyle}>
                                <TextField source="_network_prop_id"/>
                                <TextField source="_network_prop_val"/>
                            </Datagrid>
                        </ArrayField>
                    </Tab>
                    }


                </TabbedShowLayout>
            </Show>
        }
    </ShowController>
);

const NodesPagination = props => <Pagination rowsPerPageOptions={[10, 25, 50, 100]} {...props} />

const NodeFilter = (props) => (
    <Filter {...props}>
        {/*<TextInput label="Search" source="query" alwaysOn/>*/}
        <ReferenceInput label="Type" source="type_id" reference="types" allowEmpty>
            <SelectInput optionText="name"/>
        </ReferenceInput>
        <ReferenceInput label="Scope" source="scope_id" reference="scopes" allowEmpty>
            <SelectInput optionText="name"/>
        </ReferenceInput>
        <ReferenceInput label="Aspect" source="aspect_id" reference="aspects" allowEmpty>
            <SelectInput optionText="name"/>
        </ReferenceInput>
        <TextInput label="Fulltext (slow)" source="query" />
        {/*<ReferenceInput label="Tags" source="tag_id" reference="tags" allowEmpty>*/}
        {/*    <SelectInput optionText="name"/>*/}
        {/*</ReferenceInput>*/}
    </Filter>
);

// const postRowStyle = (record, index) => ({
//     backgroundColor: record.isValid >= 500 ? '#F00' : '#0F0',
// });
{/*<Datagrid rowClick="show" rowStyle={postRowStyle}>*/
}

export const NodeList = props => (
    <List filters={<NodeFilter/>} {...props}
          sort={{ field: 'modified', order: 'DESC' }}
          pagination={<NodesPagination/>}>
        <Datagrid rowClick="show">
            <TextField source="name"/>
            <TextField source="type"/>
            <TextField source="aspect"/>
            <DateField source="modified" showTime/>
            {/*<DateField source="validNotBefore" showTime/>*/}
            {/*<DateField source="validNotAfter" showTime/>*/}
            {/*<ShowButton/>*/}
        </Datagrid>
    </List>
);