import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import EventCard from './../../Main/HorizontalScrollList/EventCard/EventCard';

const styles = (theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        paddingLeft: '10%',
        paddingRight: '10%'
    },
    fontForHeader: {
        fontFamily: "'Quicksand', sans-serif",
        fontWeight: '600',
        margin: '5px auto',
        [theme.breakpoints.down('sm')]: {
            fontSize: '22px'
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '26px'
        },
        [theme.breakpoints.up('lg')]: {
            fontSize: '32px'
        },
    },
    hr: {
        width: '80%',
        borderBottom: '2px solid #3F51B5',
        marginBottom: '50px',
    }
});

const UpcomingEvent = (props) => {

    const { classes } = props;

    return (
        <div className={classes.root}>
            <div>
                <h1 className={classes.fontForHeader}>Upcoming Event</h1>
                <hr className={classes.hr} />
            </div>
            <Grid container spacing={16}>
                {props.data.map((data, index) => (
                    <Grid item xs={12} md={6} color='primary' key={index}>
                        <EventCard data={data} elevationData={4} id={index}/>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
}

export default withStyles(styles)(UpcomingEvent);