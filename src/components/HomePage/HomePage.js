import React from 'react';
import './../Main/Main.css'
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import './HomePage.css';

const styles = theme => ({
    image: {
        marginTop: '4%',
        [theme.breakpoints.down('sm')]: {
            width: 70 + '%',
            height: 'auto',
        },
        [theme.breakpoints.up('md')]: {
            width: 50 + '%',
            height: 'auto',
        },
        [theme.breakpoints.up('lg')]: {
            width: 32 + '%',
            height: 'auto',
        },
    },
    font: {

        textAlign: 'center',
        fontWeight: '400',
        fontFamily: "'Nunito', sans-serif",
        [theme.breakpoints.down('sm')]: {
            fontSize: '36px',
            padding: '0%',
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '45px',
            padding: '0 12.5%',
        },
        [theme.breakpoints.up('lg')]: {
            fontSize: '56px',
            padding: '0 25%',
        },
    }
})

const HomePage = (props) => {
    const { classes } = props;

    return (
        <div className='Container' style={{height:'100%'}} >
            <i className="fas fa-circle" id='dot' style={{ animationName: 'mv1', animationDelay: '1s' }}></i>
            <i className="fas fa-circle" id='dot' style={{ animationName: 'mv2', animationDelay: '3s' }}></i>
            <i className="fas fa-circle" id='dot' style={{ animationName: 'mv3', animationDelay: '5s' }}></i>
            <i className="fas fa-circle" id='dot' style={{ animationName: 'mv4', animationDelay: '7s' }}></i>
            <i className="fas fa-circle" id='dot' style={{ animationName: 'mv2', animationDelay: '9s' }}></i>
            <Grid container={true} direction='column' alignItems='center'>
                <img className={classes.image} src={process.env.PUBLIC_URL + '/discuss.png'} alt='' />
                <p className={classes.font}>"We're in it for the people, not the projects."</p>
            </Grid>
        </div>
    );
};

export default withStyles(styles)(HomePage);