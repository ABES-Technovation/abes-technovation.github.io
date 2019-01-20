import React from 'react';
import seed from '../../Seed';
import { withStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';

 const styles = theme => ({
    image: {
        marginTop: '4%',
        [theme.breakpoints.down('sm')]: {
            width: 29 + '%',
            height: 'auto',
        },
        [theme.breakpoints.up('md')]: {
            width: 50 + '%',
            height: 'auto',
        },
        [theme.breakpoints.up('lg')]: {
            width: 32 + '%',
            height: 100 + '%',
        },
    },
     root: {
    flexGrow: 1,
  },
  });

const profile = (props) => {
  const { classes } = props;
    return (        
        <Grid  container className={classes.root} style={{margin:'100px'}} >
            <Grid md={4} sm={12}>
                <center>
                    <img src={process.env.PUBLIC_URL + '/akash.jpg'} alt='something' className={classes.image}/>
                </center>
            </Grid>
            <Grid md={8} sm={12}>
                <center><h1>About:</h1><br/>
                <p>{seed.profile.about}</p></center>
            </Grid>
        </Grid>
      );
 };

export default withStyles(styles)(profile);