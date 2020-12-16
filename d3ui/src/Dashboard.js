// in src/Dashboard.js
import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DeveloperBoardIcon from '@material-ui/icons/DeveloperBoard';
import FunctionsIcon from '@material-ui/icons/Functions';
import LocationCityIcon from '@material-ui/icons/LocationCity';

const styles =
    {
        media: {
            // background-size: 'auto',
            // paddingTop: '56.25%',
            // width: '30%',
            paddingTop: '5%',
            // opacity: '0.1',
            // height: '10%',
            margin: '0',
            top: '0',
            width: '100%',
            height: '100%',
        },
        text: {
            paddingTop: '0%',
            opacity: '1.0',
            // color: 'black',
            paddingRight: '16px',
            paddingBottom: '16px',
            paddingLeft: '16px',
        },
        version: {
            opacity: '0.3',
            // color: 'black',
            paddingTop: '0px',
            paddingRight: '16px',
            paddingBottom: '0px',
            paddingLeft: '16px',
        }
    };

function ListItemLink(props) {
    return <ListItem button component="a" {...props} />;
}

export default () => (
    <Card>
        <CardMedia
            image="/static/img/d3ui_white.jpg"
            title=""
            style={styles.media}>
            <CardHeader title="d3 - distributed data driven inventory and configuration"/>
            <List component="nav" aria-label="main mailbox folders">
                <ListItemLink href="#/products">
                    <ListItemIcon>
                        <DeveloperBoardIcon/>
                        <Typography variant="body1" style={styles.text}>
                            Products
                        </Typography>
                    </ListItemIcon>
                    <ListItemText>
                        <Typography variant="body1" style={styles.text}>
                            All products, components, instances, devices, systems, etc. are shown here.
                        </Typography>
                    </ListItemText>
                </ListItemLink>

                <ListItemLink href="#/functions">
                    <ListItemIcon>
                        <FunctionsIcon/>
                        <Typography variant="body1" style={styles.text}>
                            Functions
                        </Typography>
                    </ListItemIcon>
                    <ListItemText>
                        <Typography variant="body1" style={styles.text}>
                            Customer requirements, functional requests, product-independent functions can be found here.
                        </Typography>
                    </ListItemText>
                </ListItemLink>

                <ListItemLink href="#/locations">
                    <ListItemIcon>
                        <LocationCityIcon/>
                        <Typography variant="body1" style={styles.text}>
                            Locations
                        </Typography>
                    </ListItemIcon>
                    <ListItemText>
                        <Typography variant="body1" style={styles.text}>
                            Location coordinates, building dependencies, spatial arrangements are shown here.
                        </Typography>
                    </ListItemText>
                </ListItemLink>
            </List>
            <Divider/>
            <List component="nav" aria-label="main mailbox folders">
                <ListItemLink href="#/products?displayedFilters={%22type_id%22%3Atrue}">
                    <ListItemIcon>
                        <Typography variant="body1" style={styles.text}>
                            Filter: "Type"
                        </Typography>
                    </ListItemIcon>
                    <ListItemText>
                        <Typography variant="body1" style={styles.text}>
                            The filter "Type" selects all objects of a special type, e.g. Application server.
                        </Typography>
                    </ListItemText>
                </ListItemLink>

                <ListItemLink href="#/products?displayedFilters={%22scope_id%22%3Atrue}">
                    <ListItemIcon>
                        <Typography variant="body1" style={styles.text}>
                            Filter: "Scope"
                        </Typography>
                    </ListItemIcon>
                    <ListItemText>
                        <Typography variant="body1" style={styles.text}>
                            The "Scope" filter selects all objects from one origin, such as all VMware objects (but then
                            all different types "Type")
                        </Typography>
                    </ListItemText>
                </ListItemLink>


                <ListItemLink href="#/products?displayedFilters={%22report_vm_os_id%22%3Atrue}">
                    <ListItemIcon>
                        <Typography variant="body1" style={styles.text}>
                            Filter: "VM OS"
                        </Typography>
                    </ListItemIcon>
                    <ListItemText>
                        <Typography variant="body1" style={styles.text}>
                            The "VM OS" filter selects the objects with the searched OS from all VMs.
                        </Typography>
                    </ListItemText>
                </ListItemLink>

                <ListItemLink href="#/products?displayedFilters={%22query_ip%22%3Atrue}">
                    <ListItemIcon>
                        <Typography variant="body1" style={styles.text}>
                            Filter: "IP"
                        </Typography>
                    </ListItemIcon>
                    <ListItemText>
                        <Typography variant="body1" style={styles.text}>
                            The filter "IP" selects the objects with a searched IP address (is not yet fully implemented).
                        </Typography>
                    </ListItemText>
                </ListItemLink>

                <ListItemLink href="#/products?displayedFilters={%22query_fqdn%22%3Atrue}">
                    <ListItemIcon>
                        <Typography variant="body1" style={styles.text}>
                            Filter: "FQDN"
                        </Typography>
                    </ListItemIcon>
                    <ListItemText>
                        <Typography variant="body1" style={styles.text}>
                            The filter "FQDN" selects the objects with a 'fully qualified domain name' (not yet fully implemented).
                        </Typography>
                    </ListItemText>
                </ListItemLink>

                <ListItemLink href="#/products?displayedFilters={%22report_power_state_id%22%3Atrue}">
                    <ListItemIcon>
                        <Typography variant="body1" style={styles.text}>
                            Filter: "Power State"
                        </Typography>
                    </ListItemIcon>
                    <ListItemText>
                        <Typography variant="body1" style={styles.text}>
                            The filter "Power State" selects the VMware VMs with the searched "Power State".
                        </Typography>
                    </ListItemText>
                </ListItemLink>

                <ListItemLink href="#/products?displayedFilters={%22query%22%3Atrue}">
                    <ListItemIcon>
                        <Typography variant="body1" style={styles.text}>
                            Filter: "Fulltext"
                        </Typography>
                    </ListItemIcon>
                    <ListItemText>
                        <Typography variant="body1" style={styles.text}>
                            The "Fulltext" filter selects all objects in which the search text is contained in any parameter. (Conceptually, this is not the fastest search ;-))
                        </Typography>
                    </ListItemText>
                </ListItemLink>
            </List>
            <Divider/>
            <Typography variant="caption" style={styles.text}>
                All filters can be combined with each other. Some combinations are of course nonsense.
            </Typography>
            <Typography variant="caption" style={styles.text}>
                You can find more filters under "ADD FILTER".
            </Typography>
            <CardContent>
                <Typography variant="caption" style={styles.version}>
                    Ver. 20.12.2
                </Typography>
            </CardContent>
        </CardMedia>
    </Card>
);
