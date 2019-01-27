import React, { Component } from "react";
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import TimeLeft from './../../../../containers/Event/TimeLeft';
import { Link } from 'react-router-dom';

const styles = () => {
    return (
        {
            card: {
                margin: '0px 15px 15px 15px',
                boxShadow: 'none',
                border: '1px #e1e4e8 solid !important'
            },
            media: {
                height: 200,
            },
            root: {
                fontWeight: '800',
                fontFamily: "'Quicksand', sans-serif",
                fontSize: 16,
            },
            timer: {
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                padding: '0% 10%',
                flexWrap: 'wrap',
            },
            chip: {
                margin: '5px',
                backgroundColor: '#3f51b520',
                color: '#3f51b5',
                fontFamily: "'Quicksand', sans-serif",
                fontWeight: '600',
            }
        }
    );
}

class EventCard extends Component {

    state = {
        days: 0,
        hours: 0,
        min: 0,
        sec: 0,
    }

    date = this.props.data.eventDate;
    left = null;
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
        this.left = TimeLeft(this.date);
    }

    componentDidMount() {
        if (this.left !== -1) {
            this.updateTimerHandler();
        }
    }

    componentWillUnmount() {
        clearInterval(this.timeInterval);
    }

    render() {
        const { classes } = this.props;
        const { data } = this.props;
        return (
            <Card className={classes.card} >
                <Link to={"/" + (this.left === -1 ? "event" : "upcoming") + "/" + this.props.id} style={{ textDecoration: 'none', color: 'inherit' }} >
                    <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            image={data.eventImg}
                            title={data.eventName} />
                        <CardContent>
                            <Typography classes={{ root: classes.root }} color='primary' gutterBottom >
                                {data.eventName}
                            </Typography>
                            <Typography component="p">
                                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                across all continents except Antarctica
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                </Link>
                {this.state.timeLeft > 0
                    ? (
                        <div className={classes.timer}>
                            <Chip label={this.state.days + " Day"} className={classes.chip} />
                            <Chip label={this.state.hours + " Hour"} className={classes.chip} />
                            <Chip label={this.state.min + " Minute"} className={classes.chip} />
                            <Chip label={this.state.sec + " Second"} className={classes.chip} />
                        </div>
                    ) : <div></div>
                }
                <CardActions>
                    {/* <Button size="small" color="primary">
                            Share
                        </Button> */}
                    <Link to={"/event/" + this.props.id} style={{ textDecoration: 'none', color: 'inherit' }}>
                        <Button size="small" color="primary">
                            Learn More
                        </Button>
                    </Link>
                </CardActions>
            </Card>
        );
    }
}

export default withStyles(styles)(EventCard);