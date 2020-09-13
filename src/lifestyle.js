import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardActionArea from '@material-ui/core/CardActionArea';
import image1 from './images/lifestyle_thmb_img01.png';
import image2 from './images/lifestyle_thmb_img02.png';
import image3 from './images/lifestyle_thmb_img03.png';
import image4 from './images/lifestyle_thmb_img04.png';




import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles( (theme) => ({
  root: {
    minWidth: 275,
    margin : '0px 10vw',
    background: 'linear-gradient(0deg, rgba(220,220,220,1) 30%, rgba(255,255,255,1) 70%)'
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
    width : 140
    
  },
  text1 :{
    padding: theme.spacing(1),
    margin : '4px 3vw',
    color : 'green'
  },
  text2 :{
    color : 'green',
    fontSize: 20
    
  },
  line :{
    margin : '-4vh 3vw 2vh ',
    color : 'green'
  },
  button : {
    color :'green'
  }
}));

export default function OutlinedCard() {
  const classes = useStyles();
  

  return (
    <Card className={classes.root} variant="outlined">
      <Typography className = {classes.text1} gutterBottom align = 'left' variant="h5" component="h2">
            THE CONNECTED LIFESTYLE
          </Typography>
          <Typography className = {classes.line} gutterBottom align = 'left' variant="h5" component="h2">
            _____________________________________________________________________
          </Typography>
      <CardContent>
        <Grid container
        direction="row"
        justify="center"
        alignItems="center"
        spacing = {2}>

        <Grid item xs = {4}>
        
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,totam rem aperiam,eaque ipsa.

            Numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.Ut enim ad minima veniam,quis nostrum exercitationem ullam corporis suscipit labouriosam,nisi ut aliquid ex ea commodi consequater?Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nhil molestiae consequater.
          </Typography>
        </CardContent>
      
        <CardActions>
            <Button variant="outlined" size="small" className = {classes.button}>Learn More   {">"}</Button>
        </CardActions>
        </Grid>

        <Grid item xs = {2}>
        <CardActionArea>
        <CardMedia
          className={classes.media}
          image={image1}
          title="CONNECT"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" className = {classes.text2} component="h9">
            CONNECT
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Sdolor doloremque of sece ndolemque dolo

            Edolo aemque of dol doloremque services
          </Typography>
        </CardContent>
      </CardActionArea>
        </Grid>
        <Grid item xs = {2}>
        <CardActionArea>
        <CardMedia
          className={classes.media}
          image={image2}
          title="EXPERIENCE"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" className = {classes.text2} component="h9">
            EXPERIENCE
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Sdolor doloremque of sece ndolemque dolo

            Edolo aemque of dol doloremque services
            </Typography>
        </CardContent>
      </CardActionArea>
        </Grid>
        <Grid item xs = {2}>
        <CardActionArea>
        <CardMedia
          className={classes.media}
          image={image3}
          title="DISCOVER"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" className = {classes.text2} component="h2">
            DISCOVER
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Sdolor doloremque of sece ndolemque dolo

          Edolo aemque of dol doloremque services
          </Typography>
        </CardContent>
      </CardActionArea>
        </Grid><Grid item xs={2} >
        <CardActionArea>
        <CardMedia
          className={classes.media}
          image={image4}
          title="GROW"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" className = {classes.text2} component="h2">
            GROW
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Sdolor doloremque of sece ndolemque dolo

          Edolo aemque of dol doloremque services
          </Typography>
        </CardContent>
      </CardActionArea>
        </Grid>
        </Grid>
        
      </CardContent>
      
      
    </Card>
  );
}
