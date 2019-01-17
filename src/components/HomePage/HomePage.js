import React from 'react';
import './../Main/Main.css'
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const styles = {
    image: {
        width: 25 + '%',
        height: 'auto',
        marginTop : '2%',
    },
    font: {
        fontFamily: ''
    }
}

const HomePage = (props) => {

    const { classes } = props;

    return (
        <div className='Container'>
            <Grid container={true} direction='column' alignItems='center'>
                <img className={classes.image} src={process.env.PUBLIC_URL + '/discuss.png'} alt='' />
                <Typography>Technovation</Typography>
            </Grid>

        </div>
    );
};

export default withStyles(styles)(HomePage);