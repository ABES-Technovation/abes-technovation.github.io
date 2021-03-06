import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Header from './../Header/Header';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';

import HomeIcon from '@material-ui/icons/Home';
import WorkIcon from '@material-ui/icons/Work';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import Divider from '@material-ui/core/Divider';
import { NavLink } from 'react-router-dom';

const styles = {
    paper: {
        minWidth: '20%',
        maxWidth: '50%',
    },
    root: {
        width: '100%',
        fontWeight: '400',
        fontFamily: "'Quicksand', sans-serif",
        color: '#494444',
        marginTop: 60,
    },
    icon: {
        color: '#3F51B5',
        iconSize: 25,
    },
    anchorsOverride: {
        textDecoration: 'none',
        color: 'inherit'
    }
};

const SideDrawer = (props) => {
    const { classes } = props;

    function handleOnClick(pageIndex) {
        props.switchDrawerHandler(false);
    }

    const sideBar = (
        <div>
            <List className={classes.root}>
                <NavLink to={'/'} exact className={classes.anchorsOverride}>
                    <ListItem tabIndex={0}
                        button
                        onClick={handleOnClick.bind(this, 0)}
                        onKeyDown={props.switchDrawerHandler.bind(this, false)}>
                        <ListItemIcon>
                            <HomeIcon className={classes.icon} />
                        </ListItemIcon>
                        <ListItemText disableTypography={true} primary="Home" />
                    </ListItem>
                </NavLink>
                <li>
                    <Divider variant="inset" />
                </li>
                <NavLink to={'/explore'} exact className={classes.anchorsOverride}>
                    <ListItem tabIndex={1}
                        button
                        onClick={handleOnClick.bind(this, 1)}
                        onKeyDown={props.switchDrawerHandler.bind(this, false)}>
                        <ListItemIcon>
                            <WorkIcon className={classes.icon} />
                        </ListItemIcon>
                        <ListItemText disableTypography={true} primary="Explore" />
                    </ListItem >
                </NavLink>
                <Divider variant="inset" component="li" />
                <NavLink to={'/about'} exact className={classes.anchorsOverride}>
                    <ListItem tabIndex={2}
                        button
                        onClick={handleOnClick.bind(this, 2)}
                        onKeyDown={props.switchDrawerHandler.bind(this, false)}>
                        <ListItemIcon>
                            <BeachAccessIcon className={classes.icon} />
                        </ListItemIcon>
                        <ListItemText disableTypography={true} primary="About Us" />
                    </ListItem>
                </NavLink>
            </List>
            <Divider />
        </div>

    );

    return (
        <div>
            <SwipeableDrawer
                open={props.data.sidebarSwitch}
                onClose={props.switchDrawerHandler.bind(this, false)}
                onOpen={props.switchDrawerHandler.bind(this, true)}
                classes={{ paper: classes.paper }}>
                <Header data={props.data} switchDrawerHandler={props.switchDrawerHandler} />
                {sideBar}

            </SwipeableDrawer>
        </div>

    )
}

export default withStyles(styles)(SideDrawer);