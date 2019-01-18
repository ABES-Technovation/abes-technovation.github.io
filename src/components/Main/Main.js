import React from 'react';
import "./Main.css"
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import HorizontalScrollList from './HorizontalScrollList/HorizontalScrollList'

const styles = theme => ({
    paperStyle: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 0.5,
        paddingBottom: theme.spacing.unit * 0.5,
        margin: "20px"
    },
});

const makeTitle = (index) => {
    // console.log(index);
    let title = null;
    switch (index) {
        case 0:
            title = "Final Year Members"
            break;
        case 1:
            title = "Third Year Members"
            break;
        case 2:
            title = "Second Year Members"
            break;
        default:
            break;
    }
    // console.log(title);
    return title;
}

const Main = (props) => {
    let { classes } = props;
    let cardData = props.data;
    return (
        <div className="Container">
            <Paper className={classes.paperStyle} elevation={3}>
                <HorizontalScrollList data={{ ...cardData.events, name: "Events" }}></HorizontalScrollList>
            </Paper>
            {
                cardData.member.yearWiseMembers.map((element, index) => (
                    <Paper className={classes.paperStyle} elevation={3} key={index}>
                        <HorizontalScrollList data={{ data : element, name: makeTitle(index) }}></HorizontalScrollList>
                    </Paper>
                ))
            }
        </div>
    );
}

export default withStyles(styles)(Main);