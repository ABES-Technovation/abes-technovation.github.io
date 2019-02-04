import React from 'react';
import seed from '../../Seed';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import './profile.css';
import Chip from '@material-ui/core/Chip';
import { unstable_Box as Box } from '@material-ui/core/Box';

 const styles = theme => ({
    image: {
         align:'center',
        [theme.breakpoints.down('sm')]: {
            width: 29 + '%',

        },
        [theme.breakpoints.up('md')]: {
            width: 50 + '%',
        },
        [theme.breakpoints.up('lg')]: {
            height: 25 + 'vh',
            width: 25 + '%',
        },
    },
    root:{
        marginTop:-20+'%',
        flexGrow:1,
        marginTop:"10%",
    },
   paper: {
    padding: theme.spacing.unit * 2,
    color: theme.palette.text.secondary,
  },
    font1: {
        textAlign:'center',
        marginTop:-4+'%',
        fontWeight: '500',
        fontFamily: "'Nunito', sans-serif",
    },
     font2: {
        fontWeight: '500',
        fontFamily: "'Nunito', sans-serif",
         [theme.breakpoints.up('xs')]: {
            textAlign: 'center',
        },
        [theme.breakpoints.up('lg')]: {
                 marginLeft: -30+'%',
                 marginRight: 20+'%',
                 textAlign: 'left',
    },
   
    },
  font: {

        fontWeight: '400',
        fontFamily: "'Nunito', sans-serif",
        [theme.breakpoints.up('xs')]: {
            fontSize: '16px',
            textAlign: 'center',
            padding: '0%',
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '15px',
            textAlign: 'left',
            padding: '0 12.5%',
        },
        [theme.breakpoints.up('lg')]: {
            fontSize: '20px',
            textAlign: 'left',
            marginLeft: -55+'%',
            padding: '0 25%',
        },
    },
    hr:{
        [theme.breakpoints.up('xs')]: {
            marginLeft: 25+'%',
            marginRight: 25+'%',
            marginTop: -2+'%',

        },
        [theme.breakpoints.up('md')]: {
         
        },
        [theme.breakpoints.up('lg')]: {
            marginLeft: -30+'%',
            marginRight: 35+'%',
            marginTop: -3+'%',
    }
},
    g1:{
            marginTop:-5+'%',
            [theme.breakpoints.up('xs')]: {
            marginTop:-1+'%',

        },
    },  
    g2:{
            marginTop:-4+'%',
},
  icon: {
        margin: '8px 20px 0px 20px',
        color: '#3F51B5',
        fontSize: '35px'
    },
chips:{
    display:'flex',
    direction:'row',
    flexWrap:'wrap',
    [theme.breakpoints.up('xs')]: {
            align:'center',
            marginLeft: 10+'%',
        },
    [theme.breakpoints.up('lg')]: {
            marginLeft: -30+'%',
            marginRight: 35+'%',
            marginTop: -3+'%',
},

},
contacts:{
marginLeft:-15+'%'
},
  });

 var properties={
    color: 'primary',
    onDelete: 'none',
    avatar: 'none',
    icon: 'none',
    variant: 'default',
  }
var skills= ['HTML','Css','Javascript','Bootstrap','ReactJS','Nodejs'];
const profile = (props) => {
  const { classes } = props;
    return (        
          <div className={classes.root}>
      <Grid container>
        <Grid item xs={12} sm={6} className={classes.g1}>
          <p className={classes.paper}>
          <center><img className={classes.image} src={process.env.PUBLIC_URL + '/akash.jpg'} alt='' /></center></p>
          <h4 className={classes.font1}><b>{seed.profile.name}</b></h4><br/>
          <h4 className={classes.font1}>({seed.profile.status})</h4>
        </Grid>
        <Grid item xs={12} sm={6} className={classes.g2}>
          <p className={classes.font}><b>About {seed.profile.fname}</b></p>
          <hr className={classes.hr}/>
          <p className={classes.font2}>{seed.profile.about}</p>
          <p className={classes.font}><b>Skills</b></p>
          <hr className={classes.hr}/>
          <br/>
          <div className={classes.chips}>
          {skills.map(skill =>{
            return <Chip className="chip"
                label={skill}
                color={properties.color}
                icon={properties.icon}
                variant={properties.variant}
                
              />
          })}
          </div>
          <br/>
          <p className={classes.font}><b>Portfolio</b></p>
          <hr className={classes.hr}/>
          <div className={classes.font2}  dangerouslySetInnerHTML={{__html:'<a href="https://akashdeep98.github.io/">https://akashdeep98.github.io/</a>'}}/>
          <br/>
          <p className={classes.font}><b>Contact</b></p>
          <hr className={classes.hr}/>
          <Grid container direction='row' justify='center' class={classes.contacts}>
                <a className={classes.icon} href="https://www.facebook.com/abestechnovation/"><i className="fab fa-github"></i></a>
                <a className={classes.icon} href="https://www.facebook.com/abestechnovation/"><i className="fab fa-facebook-square"></i></a>
                <a className={classes.icon} href="https://www.instagram.com/technovationabes/"><i className="fab fa-instagram"></i></a>
                <a className={classes.icon} href="mailto:technovation@abes.ac.in"><i className="fas fa-envelope"></i></a>
            </Grid>
            <br/>
            <br/>
            <br/>
        </Grid>
      </Grid>
    </div>

      );
 };

export default withStyles(styles)(profile);