import React from 'react';
import {createMuiTheme} from "@material-ui/core/styles";

export const d3Theme = createMuiTheme({
    palette: {
        secondary: {
            light: '#0000ff',
            main: '#333333',
            contrastText: '#F9AE00',
        },
        contrastThreshold: 3,
        tonalOffset: 0.2,
        background: {
            paper: '#f0f0f0',
            default: '#f0f0f0',
        }
    },

    overrides: {
        MuiButton: { // override the styles of all instances of this component
            textPrimary: {
                color: '#333233',
            }
        },
        MuiCard: {
            root: {
                backgroundColor: '#f8f8f8',
            }
        },
        MuiTabs: {
            indicator: {
                backgroundColor: '#F9AE00',
            }
        },
        MuiTab: {
            root: {
                "&:hover": {
                    backgroundColor: '#DDDDDD',
                }
            },
        },
        MuiSvgIcon: {
            root: {
                fill: '#F9AE00',
            }
        },
        MuiLinearProgress: {
            colorPrimary: {
                backgroundColor: '#C0C0C0',
            },
            barColorPrimary: {
                backgroundColor: '#F9AE00',
            }
        },
        RaReferenceField: {
            link: {
                color: '#333233',
            }
        }
    },
});