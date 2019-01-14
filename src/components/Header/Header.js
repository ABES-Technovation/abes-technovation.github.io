import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

let styles = {
    fontWeight : "bold",
    fontFamily: "'Quicksand', sans-serif"
}

const Header = (props) => {
    return (
        <AppBar position="static" >
            <Toolbar>
                <Typography variant="h5" color="inherit" style={styles}>
                  Technovation
                </Typography>
            </Toolbar>
        </AppBar>
    );
}

export default Header;