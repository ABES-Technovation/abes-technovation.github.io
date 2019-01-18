import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile'

import EventCard from './EventCard/EventCard';
import MemberCard from './MemberCard/MemberCard';

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
                width: 100 + '%',
                flexWrap: 'nowrap',
                // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
                transform: 'translateZ(0)',
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
                marginBottom: '20px',
                // marginTop: '0px'
            }
        }
    );
}

const HorizontalScrollList = props => {
    const { classes } = props;
    const tileData = props.data;

    let title = tileData.name;
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
            tileData.data.map((cardData, index) => (
                <GridListTile key={index} >
                    < MemberCard data={cardData} />
                </GridListTile>
            ))
        );
    }

    return (
        <div>
            <div className={classes.root}>
                <div>
                    <h1 className={classes.fontForHeader}>{title}</h1>
                    <hr className={classes.hr} />
                </div>
                <GridList className={classes.gridList} cols={(title === 'Events') ? ((window.innerWidth <= 725) ? 1.25 : 3.5) : ((window.innerWidth <= 725) ? 1.2 : 4.5)} cellHeight='auto'>
                    {cardStyle}
                </GridList>
            </div>
        </div>

    );
};

export default withStyles(styles)(HorizontalScrollList);