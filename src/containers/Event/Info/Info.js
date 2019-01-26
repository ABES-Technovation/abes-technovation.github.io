import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import DateRange from '@material-ui/icons/DateRange';
import AccessTime from '@material-ui/icons/AccessTime';
import MyLocation from '@material-ui/icons/MyLocation';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import './Info.css'

const styles = {
    root: {
        margin: 0,
        padding: "2% 15%",
    },
    itemRoot: {
        // backgroundColor: "#3F51B5",
        color: '#0676FC',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        padding: '4%',

    },
    fontInfoControl: {
        // fontFamily: "'Kaushan Script', cursive",
        fontFamily : "'ZCOOL QingKe HuangYou', cursive",
        // fontWeight: 'bold',
        color: '#494444',
        textAlign: 'center',
    }
};

const Info = (props) => {

    const { classes } = props;

    const info = [
    ]

    return (
        <div className={classes.root}>
            <Grid container spacing={16} >
                <Grid item lg={3} sm={6} xs={12}>
                    <Paper classes={{ root: classes.itemRoot }}>
                        <div className='InfoIcon' style={{flexGrow:1}}>
                            <DateRange fontSize='large' />
                        </div>
                        <div className='InfoIcon' style={{flexGrow:3}}>
                            <Typography variant="h5" classes={{ h5: classes.fontInfoControl }} style={{fontWeight:'bold'}}>
                                DATE
                            </Typography>
                            <Typography variant="subtitle1" classes={{ subtitle1: classes.fontInfoControl }}>
                                28 Nov , 2019
                            </Typography>
                        </div>
                    </Paper>
                </Grid>
                <Grid item lg={3} sm={6} xs={12} >
                    <Paper classes={{ root: classes.itemRoot }}>
                        <div className='InfoIcon'  style={{flexGrow:1}}>
                            <AccessTime fontSize='large' />
                        </div>
                        <div className='InfoIcon'  style={{flexGrow:3}}>
                            <Typography variant="h5" classes={{ h5: classes.fontInfoControl }} style={{fontWeight:'bold'}}>
                                TIME
                            </Typography>
                            <Typography variant="subtitle1" classes={{ subtitle1: classes.fontInfoControl }}>
                                4:00 PM
                            </Typography>
                        </div>
                    </Paper>
                </Grid>
                <Grid item lg={3} sm={6} xs={12}>
                    <Paper classes={{ root: classes.itemRoot }}>
                        <div className='InfoIcon'  style={{flexGrow:1}}>
                            <MyLocation fontSize='large' />
                        </div>
                        <div className='InfoIcon'  style={{flexGrow:3}}>
                            <Typography variant="h5" classes={{ h5: classes.fontInfoControl }} style={{fontWeight:'bold'}}>
                                VENUE
                            </Typography>
                            <Typography variant="subtitle1" classes={{ subtitle1: classes.fontInfoControl }}>
                                Seminar Hall 2, Raman Block
                            </Typography>
                        </div>
                    </Paper>
                </Grid>
                <Grid item lg={3} sm={6} xs={12}>
                    <Paper classes={{ root: classes.itemRoot }}>
                        <div className='InfoIcon'  style={{flexGrow:1}}>
                            <DateRange fontSize='large' />
                        </div>
                        <div className='InfoIcon'  style={{flexGrow:3}}>
                            <Typography variant="h5" classes={{ h5: classes.fontInfoControl }} style={{fontWeight:'bold'}}>
                                REGISTRATION
                            </Typography>
                            <Typography variant="subtitle1" classes={{ subtitle1: classes.fontInfoControl }}>
                                Free
                            </Typography>
                        </div>
                    </Paper>
                </Grid>

            </Grid>
        </div>
    );
}

export default withStyles(styles)(Info);