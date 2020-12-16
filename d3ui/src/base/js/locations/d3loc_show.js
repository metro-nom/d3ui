import React from 'react';
import {Show, ShowController, TabbedShowLayout} from 'react-admin';
import {NodeTitle} from "../../../d3tools";
import D3TabBase from "../../../d3_tab_base";
import D3TabExplore from "../lib/d3_tab_explore";

export const LocationShow = props => (
    <ShowController {...props}>
        {controllerProps =>
            <Show {...props} {...controllerProps} title={<NodeTitle/>}>
                <TabbedShowLayout
                    indicatorColor="primary"
                    textColor="primary"
                >
                    {D3TabExplore(props, controllerProps)}
                    {D3TabBase(props, controllerProps)}
                </TabbedShowLayout>
            </Show>
        }
    </ShowController>
);
