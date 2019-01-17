import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { withStyles } from '@material-ui/core/styles'

let styles = {
    font: {
        fontWeight: "bold",
        fontFamily: "'Quicksand', sans-serif"
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    }

}

const Header = (props) => {

    const { classes } = props;
    return (
        <AppBar position="fixed" color='primary' >
            <Toolbar>
                <IconButton className={classes.menuButton} color="inherit" aria-label="Open drawer" onClick={props.switchDrawerHandler.bind(this , null)}>
                    <MenuIcon />
                </IconButton>
                <Typography variant="h5" color="inherit" className={classes.font}>
                    Technovation
                </Typography>
            </Toolbar>
        </AppBar>
    );
}

export default withStyles(styles)(Header);