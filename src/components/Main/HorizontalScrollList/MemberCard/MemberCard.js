import React from 'react';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import { Typography, CardActions, CardContent } from '@material-ui/core';


const styles = {
    card: {
        textAlign: 'center',
        height: '',
        margin: '0px 10px',
        border: '1px #e1e4e8 solid !important'
    },
    media: {
        padding: '5% 0%',
        width: '60%',
        height: 'auto',
    },
    font: {
        marginBottom: 5,
        fontSize: 16,
        fontWeight: '800',
        fontFamily: "'Quicksand', sans-serif",
        textTransform: 'unset'
    }
}


const MemberCard = (props) => {

    const { classes } = props;

    return (
        <Paper classes={{ root: classes.card }} elevation={0}>
            <Button>
                <CardContent>
                    <img className={classes.media} src='https://image.flaticon.com/icons/png/512/236/236832.png' alt='' />
                    <Typography color='primary' classes={{ root: classes.font }}>{props.data.name}</Typography>
                    <Typography style={{ textTransform: 'none', textAlign: 'left' }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                    </Typography>
                </CardContent>
            </Button>
            <CardActions>
                <Button color='primary' size="small">Learn More</Button>
                <Button color='primary' size="small">Learn More</Button>
            </CardActions>
        </Paper >
    );
};

export default withStyles(styles)(MemberCard);