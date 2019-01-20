import React from 'react';
import './../Main/Main.css'
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import './AboutPage.css';

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
    },
     font1: {

        textAlign: 'center',
        fontWeight: '400',
        fontFamily: "'Nunito', sans-serif",
        [theme.breakpoints.down('sm')]: {
            fontSize: '20px',
            padding: '0%',
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '32px',
            padding: '0 2',
        },
        [theme.breakpoints.up('lg')]: {
            fontSize: '22px',
            padding: '0 5%',
        },
    }
})

const AboutUs = (props) => {

    const { classes } = props;
    //id="particles-js"
    return (
    	
        <div className='Container' >
            <i className="fas fa-circle" id='dot' style={{ animationName: 'mv1', animationDelay: '1s' }}></i>
            <i className="fas fa-circle" id='dot' style={{ animationName: 'mv2', animationDelay: '3s' }}></i>
            <i className="fas fa-circle" id='dot' style={{ animationName: 'mv3', animationDelay: '5s' }}></i>
            <i className="fas fa-circle" id='dot' style={{ animationName: 'mv4', animationDelay: '7s' }}></i>
            <i className="fas fa-circle" id='dot' style={{ animationName: 'mv2', animationDelay: '9s' }}></i>
            <Grid container={true} direction='column' alignItems='center'>
                <img className={classes.image} src={process.env.PUBLIC_URL + '/team.svg'} alt='' />
                <p className={classes.font}>"We beleive, To teach once is to learn Twice."</p>
                <p className={classes.font1}>Technovation is the technical club of Computer Science Department, ABES Engineering College. It was formed in 2010 with a vision to provide a platform for students to present their technical skills. With time it has emerged into a fully operational group having a team of 50+ students having expertise in various fields.

Within the last few years, we have organised various events which include seminars on some of the latest technologies such as Android, PHP and Adobe Photoshop , Coding events, Aptitude tests and Quizes. We have always tried to ensure that the events imbibe knowledge and can start a deep thinking process within you.
            </p>
            <p className={classes.font}>Our Aim</p>
            <p className={classes.font1}>It is a community which looks forward to bring new technological ideas & methods which could be implemented for developing solutions to real life problems.


This club envisages conducive platform to explore student's latent talents and also to enable them to come out with their innovative ideas. The club also Organises various events which helps in raising the confidence level of students, impacting technical knowledge and building professional attitude in them.
        </p><br/>
        <br/>
            </Grid>
        </div>
        
    );
};

export default withStyles(styles)(AboutUs);