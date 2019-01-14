import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile'

import EventCard from './EventCard/EventCard';
// import MemberCard from './EventCard/EventCard';

const styles = theme => {
    return (
        {
            root: {
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-around',
                overflow: 'hidden',
                backgroundColor: theme.palette.background.paper,
            },
            gridList: {
                flexWrap: 'nowrap',
                // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
                transform: 'translateZ(0)',
            },
        }
    );
}

const HorizontalScrollList = props => {
    const { classes } = props;
    const tileData = props.data;

    let title = tileData.name;
    console.log(tileData)
    let cardStyle = null;

    if (title === "Events") {
        cardStyle = (
            tileData.data.map((cardData, index) => (
                <GridListTile key={index} >
                    < EventCard data={cardData} />
                </GridListTile>
            ))

        );
    } else {
        cardStyle = (
            <h5>Members List Coming Soon...</h5>
        );
    }

    return (

        <div>
            <h1>{title}</h1>
            <div className={classes.root}>
                <GridList className={classes.gridList} cols={(window.innerWidth <= 500) ? 1.25 : 2.5} cellHeight='auto'>
                    {cardStyle}
                </GridList>
            </div>
        </div>

    );
};

export default withStyles(styles)(HorizontalScrollList);