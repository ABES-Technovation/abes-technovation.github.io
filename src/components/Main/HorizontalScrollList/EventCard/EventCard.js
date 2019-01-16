import React from "react";
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography'

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
        }
    );
}

const EventCard = (props) => {
    const { classes } = props;
    const { data } = props;
    return (
        <Card className={classes.card}>
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
            <CardActions>
                <Button size="small" color="primary">
                    Share
                </Button>
                <Button size="small" color="primary">
                    Learn More
                </Button>
            </CardActions>
        </Card>
    );
}

export default withStyles(styles)(EventCard);