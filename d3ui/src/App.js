import React from 'react';
import {Admin, Resource,} from 'react-admin';
import jsonServerProvider from './d3data_provider'
import Dashboard from './Dashboard';
import LocationCityIcon from '@material-ui/icons/LocationCity';
import FunctionsIcon from '@material-ui/icons/Functions';
import DeveloperBoardTwoToneIcon from '@material-ui/icons/DeveloperBoardTwoTone';
import NotFound from './base/js/lib/NotFound';
import closeSidebarSaga from './base/js/lib/closeSidebarSaga';
import {FunctionShow} from "./base/js/functions/d3func_show";
import {FunctionList} from "./base/js/functions/d3func_list";
import {ProductShow} from "./base/js/products/d3prod_show";
import {ProductList} from "./base/js/products/d3prod_list";
import {LocationList} from "./base/js/locations/d3loc_list";
import {LocationShow} from "./base/js/locations/d3loc_show";
import {d3Theme} from "./base/js/lib/d3theme";

const dataProvider = jsonServerProvider(process.env.D3URI_API);

const App = () => (
    <Admin
        title="d3"
        theme={d3Theme}
        dataProvider={dataProvider}
        dashboard={Dashboard}
        catchAll={NotFound}
        customSagas={[closeSidebarSaga]}>
        <Resource name="products" list={ProductList} show={ProductShow} icon={DeveloperBoardTwoToneIcon}/>
        <Resource name="functions" list={FunctionList} show={FunctionShow} icon={FunctionsIcon}/>
        <Resource name="locations" list={LocationList} show={LocationShow} icon={LocationCityIcon}/>
        <Resource name="types"/>
        <Resource name="scopes"/>
        <Resource name="aspects"/>
        <Resource name="tags"/>
        <Resource name="report_vm_os"/>
        <Resource name="report_power_state"/>
    </Admin>
);

export default App;
