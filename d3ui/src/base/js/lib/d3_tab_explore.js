import React from 'react';
import {Tab} from 'react-admin';
import DonutSmallTwoToneIcon from '@material-ui/icons/DonutSmallTwoTone';
import {Graph} from "react-d3-graph";
import {stringify} from 'query-string';
import Typography from "@material-ui/core/Typography";


const myConfig = {
    "automaticRearrangeAfterDropNode": false,
    "collapsible": false,
    "directed": false,
    "focusAnimationDuration": 0.6,
    "focusZoom": 1,
    "height": 520,
    "highlightDegree": 1,
    "highlightOpacity": 0.2,
    "linkHighlightBehavior": true,
    "maxZoom": 8,
    "minZoom": 0.1,
    "nodeHighlightBehavior": true,
    "panAndZoom": true,
    "staticGraph": false,
    "staticGraphWithDragAndDrop": false,
    "width": 1200,
    "d3": {
        // "alphaTarget": 0.1,
        "gravity": -300,
        "linkLength": 120,
        "linkStrength": 1,
        "disableLinkForce": false,
    },
    "node": {
        "color": "#a0a0a0",
        "fontColor": "black",
        "fontSize": 8,
        "fontWeight": "normal",
        "highlightColor": "SAME",
        "highlightFontSize": 8,
        "highlightFontWeight": "normal",
        "highlightStrokeColor": "SAME",
        "highlightStrokeWidth": "SAME",
        "labelProperty": "label",
        "mouseCursor": "pointer",
        "opacity": 1.0,
        "renderLabel": true,
        "size": 500,
        "strokeColor": "none",
        "strokeWidth": 1.2,
        "svg": "",
        "symbolType": "circle"
    },
    "link": {
        "color": "#808080",
        "fontColor": "#C0C0C0",
        "fontSize": 6,
        "type": "STRAIGHT",
        "fontWeight": "normal",
        "highlightColor": "SAME",
        "highlightFontSize": 6,
        "highlightFontWeight": "normal",
        "labelProperty": "label",
        "mouseCursor": "pointer",
        "opacity": 1.0,
        "renderLabel": true,
        "semanticStrokeWidth": true,
        "strokeWidth": 1.5,
        "markerHeight": 4,
        "markerWidth": 4
    }
};


// graph event callbacks
const onClickGraph = function () {
    window.alert(`Clicked the graph background`);
};

const onClickNode = function (nodeId) {
    if (nodeId.includes("/products/")) {
        var url = "https://www.d3.example.org/#/products/" + encodeURIComponent(nodeId) + "/show/explore"
        window.location.href = url;
        window.graph_inst.componentDidMount();
    }
    if (nodeId.includes("/locations/")) {
        var url = "https://www.d3.example.org/#/locations/" + encodeURIComponent(nodeId) + "/show/explore"
        window.location.href = url;
        window.graph_inst.componentDidMount();
    }
    if (nodeId.includes("/functions/")) {
        var url = "https://www.d3.example.org/#/functions/" + encodeURIComponent(nodeId) + "/show/explore"
        window.location.href = url;
        window.graph_inst.componentDidMount();
    }
};

const onDoubleClickNode = function (nodeId) {
    window.alert(`Double clicked node ${nodeId}`);
};

const onRightClickNode = function (event, nodeId) {
    window.alert(`Right clicked node ${nodeId}`);
};

const onMouseOverNode = function (nodeId) {
    window.alert(`Mouse over node ${nodeId}`);
};

const onMouseOutNode = function (nodeId) {
    window.alert(`Mouse out node ${nodeId}`);
};

const onClickLink = function (source, target) {
    window.alert(`Clicked link between ${source} and ${target}`);
};

const onRightClickLink = function (event, source, target) {
    window.alert(`Right clicked link between ${source} and ${target}`);
};

const onMouseOverLink = function (source, target) {
    window.alert(`Mouse over in link between ${source} and ${target}`);
};

const onMouseOutLink = function (source, target) {
    window.alert(`Mouse out link between ${source} and ${target}`);
};

const onNodePositionChange = function (nodeId, x, y) {
    window.alert(`Node ${nodeId} is moved to new position. New position is x= ${x} y= ${y}`);
};

class MyGraph extends React.Component {
    constructor(props, controllerProps) {
        super(props);
        this.controllerProps = controllerProps;
        this.state = {
            data: {
                nodes: [{id: "_"}],
                links: [],
            }
        }
        window.graph_inst = this
    }

    componentDidMount() {
        var query = {id: this.props.id}
        fetch('https://it.d3.example.org/graph_data' + "?" + stringify(query))
            .then(res => res.json())
            .then((data) => {
                this.setState({data: data})
            })
            .catch(console.log)
    }

    render() {
        return (
            <Typography variant="body1">
                <Graph
                    id="graph-id" // id is mandatory, if no id is defined rd3g will throw an error
                    data={this.state.data}
                    config={myConfig}
                    onClickNode={onClickNode}
                    // onDoubleClickNode={onDoubleClickNode}
                    // onRightClickNode={onRightClickNode}
                    // onClickGraph={onClickGraph}
                    // onClickLink={onClickLink}
                    // onRightClickLink={onRightClickLink}
                    // onMouseOverNode={onMouseOverNode}
                    // onMouseOutNode={onMouseOutNode}
                    // onMouseOverLink={onMouseOverLink}
                    // onMouseOutLink={onMouseOutLink}
                    // onNodePositionChange={onNodePositionChange}
                />
            </Typography>
        );
    }
}


function D3TabExplore(props, controllerProps) {
    return (
        <Tab label="explore" path="explore" icon={<DonutSmallTwoToneIcon/>}>
            <MyGraph {...props} {...controllerProps} />
        </Tab>
    );
};

export default D3TabExplore;
