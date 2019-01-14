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
                height : 95 + '%',
                margin: '0px 15px 15px 15px'
            },
            media: {
                minHeight: 200,
            },
        }
    );
}

const EventCard = (props) => {
    console.log(props)
    const { classes } = props;
    const { data } = props;
    return (
        <Card className={classes.card}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={data.eventImg}
                    title={data.eventName}/>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
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