import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import CardActionArea from '@material-ui/core/CardActionArea';
import image5 from './images/custmr_logo01.png';
import image6 from './images/custmr_logo02.png';
import image7 from './images/custmr_logo03.png';
import image8 from './images/custmr_logo04.png';
import image9 from './images/custmr_logo05.png';
import image0 from './images/custmr_logo06.png';

import CardMedia from '@material-ui/core/CardMedia';


const useStyles = makeStyles( (theme) =>({
  root: {
    minWidth: 275,
    margin : '0px 10vw',
    
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  media: {
    height: 140,
  },
  text1 :{
    padding: theme.spacing(1),
    margin : '4px 0vw',
    color : 'green'
  },
  line :{
    margin : '-5.2vh 0.6vw 2vh ',
    color : 'green'
  },
  line2 :{
    margin : '3vh 1vw 0vh ',
    color : '#D3D3D3'
  },
  text2 :{
    color : 'green'
  },
  date :{
    color : '#808080'
  }
}));


function Row1() {
    const classes = useStyles();
    return (
      <React.Fragment>
        <Grid item xs={4}>
        <CardMedia
          className={classes.media}
          image={image5}
          title="DOLOREMQUE"
        />
        </Grid>
        <Grid item xs={4}>
        <CardMedia
          className={classes.media}
          image={image6}
          title="DOLOREMQUE"
        />
        </Grid>
        <Grid item xs={4}>
        <CardMedia
          className={classes.media}
          image={image7}
          title="DOLOREMQUE"
        />
        </Grid>
      </React.Fragment>
    );
  }
  function Row2() {
    const classes = useStyles();
    return (
      <React.Fragment>
        <Grid item xs={4}>
        <CardMedia
          className={classes.media}
          image={image8}
          title="DOLOREMQUE"
        />
        </Grid>
        <Grid item xs={4}>
        <CardMedia
          className={classes.media}
          image={image9}
          title="DOLOREMQUE"
        />
        </Grid>
        <Grid item xs={4}>
        <CardMedia
          className={classes.media}
          image={image0}
          title="DOLOREMQUE"
        />
        </Grid>
      </React.Fragment>
    );
  }

export default function OutlinedCard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Grid container
        direction="row"
        justify="center"
        alignItems="center">

        <Grid item xs = {8}>
        <Typography className = {classes.text1} align = 'left' gutterBottom variant="h5" component="h2">
            OUR CUSTOMER
          </Typography>
          <Typography className = {classes.line} gutterBottom align = 'left' variant="h5" component="h2">
            __________________________________________
          </Typography>
          <Grid container spacing={1}>
        <Grid container item xs={12} spacing={3}>
          <Row1 />
        </Grid>
        <Grid container item xs={12} spacing={3}>
          <Row2 />
        </Grid>
</Grid>
</Grid>
        <Grid item xs = {4}>
        <Typography className = {classes.text1} align = 'left' gutterBottom variant="h5" component="h2">
            IN THE NEWS
          </Typography>
          <Typography className = {classes.line} gutterBottom align = 'left' variant="h5" component="h2">
            ____________________
          </Typography>
          <Typography className = {classes.text2} align = 'left' variant="h9" component="h9">
          <Box fontSize={12} fontWeight="fontWeightBold" m={1}>
          The standard Lorem Ipsum passage, 
      </Box>
         
          </Typography>
          <Typography className = {classes.date} align = 'left' variant="h9" component="h9">
            <Box fontSize={12} fontWeight="fontWeightBold" m={1}>July 1,2011</Box>
          </Typography>
          <Typography variant="h9" component="h9">
<Box fontSize={12} textAlign="left" m={1}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud sed do eiusmod tempor incididunt ut labore et dolore magna aliqua amet, sed do eiusmod tempor incididunt...........</Box><Box fontSize={12} textAlign="left" className = {classes.text2} margin = {'-4vh 0vw'}textAlign="right">Continue Reading</Box>
          </Typography>

          <Typography className = {classes.line2} gutterBottom align = 'left' variant="h5" component="h2">
            ____________________
          </Typography>

          <Typography className = {classes.text2} align = 'left' variant="h9" component="h9">
          <Box fontSize={12} fontWeight="fontWeightBold" m={1}>
          consectetur adipiscing elit, sed do eiusmod
      </Box>
         
          </Typography>
          <Typography className = {classes.date} align = 'left' variant="h9" component="h9">
            <Box fontSize={12} fontWeight="fontWeightBold" m={1}>July 1,2011</Box>
          </Typography>
          <Typography variant="h9" component="h9">
<Box fontSize={12} textAlign="left" m={1}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostruddolor sit amet ..........</Box><Box fontSize={12} textAlign="left" className = {classes.text2} margin = {'-4vh 0vw'}textAlign="right">Continue Reading</Box>
          </Typography>

        </Grid>
        </Grid>
        
      </CardContent>
      
      
    </Card>
  );
}
