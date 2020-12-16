import React from 'react';
import {validityColor} from "./tools_validity_color";

export const propertyRowStyle = (record, index) => ({
    backgroundColor: validityColor(record._prop_validity)
});