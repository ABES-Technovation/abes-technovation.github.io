import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';


const styles = (theme) => ({
    font: {
        textAlign: 'center',
        fontWeight: '600',
        fontFamily: "'Quicksand', sans-serif",
        fontSize: '36px',
        color: '#494444',
        margin: '0px auto',
        [theme.breakpoints.down('sm')]: {
            fontSize: '12px'
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '26px'
        },
        [theme.breakpoints.up('lg')]: {
            fontSize: '36px'
        },
    },
    hr: {
        width: '5%',
        borderBottom: '2px solid #3F51B5',
    },
    icon: {
        margin: '8px 20px 0px 20px',
        color: '#3F51B5',
        fontSize: '35px'
    }
})

const BottomBar = (props) => {

    const { classes } = props;
    return (
        <div style={{backgroundColor:'rgba(0, 0, 0, 0.25)',padding:'10px'}}>
            <h1 className={classes.font}>Join Us</h1>
            <hr className={classes.hr} />
            <Grid container direction='row' justify='center'>
                <a className={classes.icon} href="https://github.com/ABES-Technovation/"><i className="fab fa-github"></i></a>
                <a className={classes.icon} href="https://www.facebook.com/abestechnovation/"><i className="fab fa-facebook-square"></i></a>
                <a className={classes.icon} href="https://www.instagram.com/technovationabes/"><i className="fab fa-instagram"></i></a>
                <a className={classes.icon} href="mailto:technovation@abes.ac.in"><i className="fas fa-envelope"></i></a>
            </Grid>
            <p style={{color:'#3F51B5',textAlign:'center',fontFamily:"'Quicksand', sans-serif"}}>© 2018 Technovation</p>
        </div>
    );
}

export default withStyles(styles)(BottomBar);
