import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import './../../components/Main/Main.css';
import './Event.css';
import IconButton from '@material-ui/core/IconButton';
import KeyboardArrowDown from '@material-ui/icons/KeyboardArrowDown';
import Info from './Info/Info';
import Aux from './../../Hoc/_Aux';
import TimeLeft from './TimeLeft';
import { withRouter } from 'react-router-dom';

const styles = {
    timer: {
        fontFamily: "'Kaushan Script', cursive",
        fontSize: 22,
    },
    header: {
        fontSize: 56,
        fontFamily: "'ZCOOL QingKe HuangYou', cursive"
    },
    hr: {
        width: '20%',
        borderBottom: '2px solid #ffffff',
        marginBottom: '20px',
        borderTopWidth: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0,
    },
    info: {
        fontSize: 16,
        padding: '0% 25%',
        marginBottom: '25%',
    },
};

class Event extends Component {

    state = {
        days: 0,
        hours: 0,
        min: 0,
        sec: 0
    }

    indexOfEvent = null;
    typeOfEvent = null;
    date = null;
    timeInterval = null;

    updateTimerHandler = () => {
        this.timeInterval = setInterval(() => {
            let left = TimeLeft(this.date);

            if (left !== -1) {
                this.setState({
                    days: left[0],
                    hours: left[1],
                    min: left[2],
                    sec: left[3],
                    timeLeft: 1
                });
            }
        }, 1000);
    };

    componentWillMount() {
        this.indexOfEvent = this.props.match.params.id;
        this.date = this.props.data.eventList[this.indexOfEvent].eventDate;
        console.log(this.date);
        // 0 : Upcoming event
        // 1 : Past event
        this.typeOfEvent = TimeLeft(this.date) === -1 ? 1 : 0;
    }

    componentDidMount() {
        if (this.typeOfEvent === 0) {
            this.updateTimerHandler();
        }
    }

    componentWillUnmount() {
        clearInterval(this.timeInterval);
    }

    render() {
        const date = new Date(this.date);
        const { classes } = this.props;
        return (
            <Aux>
                <div className='Container EventPageBackground'>
                    <div className='Wrapper'>
                        <h1 className={classes.timer}>{this.state.days} Days . {this.state.hours} Hours . {this.state.min} Minutes . {this.state.sec} Seconds</h1>
                        <hr className={classes.hr} />
                        <h1 className={classes.header}>{this.props.data.eventList[this.indexOfEvent].eventName}</h1>
                        <p className={classes.info}>
                            {this.props.data.eventList[this.indexOfEvent].eventDetails}
                        </p>
                        <IconButton color="inherit" aria-label="Explore More" fontSize='large'>
                            <KeyboardArrowDown />
                        </IconButton>
                    </div>
                </div>
                <Info date={date} data={this.props.data.eventList[this.indexOfEvent]}></Info>
            </Aux>
        );
    }
}

export default withRouter(withStyles(styles)(Event));