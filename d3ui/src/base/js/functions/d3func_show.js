import React from 'react';
import {Show, ShowController, Tab, TabbedShowLayout, TextField} from 'react-admin';
import {NodeTitle} from "../../../d3tools";
import D3TabBase from "../../../d3_tab_base";
import D3FuncTabFunction from "./d3func_tab_function";
import D3TabExplore from "../lib/d3_tab_explore";

export const FunctionShow = props => (
    <ShowController {...props}>
        {controllerProps =>
            <Show {...props} {...controllerProps} title={<NodeTitle/>}>
                <TabbedShowLayout>
                    {D3FuncTabFunction(props, controllerProps)}
                    {D3TabExplore(props, controllerProps)}
                    {D3TabBase(props, controllerProps)}
                </TabbedShowLayout>
            </Show>
        }
    </ShowController>
);
