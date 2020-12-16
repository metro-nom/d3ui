import React from 'react';
import {Show, ShowController, TabbedShowLayout} from 'react-admin';
import {NodeTitle} from "../../../d3tools";
import D3ProdTabProduct from './d3prod_tab_product'
import D3TabBase from "../../../d3_tab_base";
import D3TabExplore from "../lib/d3_tab_explore";

export const ProductShow = props => (
    <ShowController {...props}>
        {controllerProps =>
            <Show {...props} {...controllerProps} title={<NodeTitle/>}>
                <TabbedShowLayout>
                    {D3ProdTabProduct(props, controllerProps)}
                    {D3TabExplore(props, controllerProps)}
                    {D3TabBase(props, controllerProps)}
                </TabbedShowLayout>

            </Show>
        }
    </ShowController>
);
