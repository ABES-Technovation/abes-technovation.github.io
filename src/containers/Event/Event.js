import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import './../../components/Main/Main.css';
import './Event.css';

const styles = {
    timer: {
        fontFamily: "'Kaushan Script', cursive",
        fontSize: 22,
        color: 'white',
        paddingTop: '7%',
    },
    header: {
        fontSize: 56,
        color: 'white',
        fontFamily: "'ZCOOL QingKe HuangYou', cursive"
    },
    hr: {
        width: '20%',
        borderBottom: '2px solid #ffffff',
        marginBottom: '20px',
        borderTopWidth: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0,
    }
};

class Event extends Component {


    render() {

        const days = 16, hours = 5, min = 45, sec = 12;
        const { classes } = this.props;
        return (
            <div className='Container EventPageBackground'>
                <div className='Wrapper'>
                    <h1 className={classes.timer}>{days} Days {hours} Hours . {min} Minutes . {sec} Seconds</h1>
                    <hr className={classes.hr} />
                    <h1 className={classes.header}>Web Development BootCamp</h1>

                </div>
            </div>
        );
    }
}

export default withStyles(styles)(Event);