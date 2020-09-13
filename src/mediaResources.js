import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import ButtonBase from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardActionArea from '@material-ui/core/CardActionArea';
import image1 from './images/VideoThumbnail/1 (1).jpg';
import image2 from './images/VideoThumbnail/1 (2).jpg';
import image3 from './images/VideoThumbnail/1 (3).jpg';
import image4 from './images/VideoThumbnail/1 (4).jpg';
import video1 from './images/VideoThumbnail/download.jfif';
import video2 from './images/VideoThumbnail/download (1).jfif';
import video3 from './images/VideoThumbnail/download (2).jfif';
import video4 from './images/VideoThumbnail/download (3).jfif';
import close from './images/close.png';
import CardMedia from '@material-ui/core/CardMedia';
import { Box, Button } from '@material-ui/core';
import Modal from '@material-ui/core/Modal';

function getModalStyle() {
  const top = 50 ;
  const left = 50 ;
  return {
    top: `${top}%`,
    left: `${left}%`,
    position: 'absolute',
    transform: `translate(-50%, -50%)`,
  };
}
function getCloseStyle() {
  const top = 8 ;
  const left = 73 ;
  return {
    top: `${top}%`,
    left: `${left}%`,
    position: 'absolute',
    transform: `translate(-50%, -50%)`,
  };
}
function getTitleStyle() {
  const top = 8 ;
  const left = 30;
  return {
    top: `${top}%`,
    left: `${left}%`,
    position: 'absolute',
    color : 'white',
    transform: `translate(-50%, -50%)`,
  };
}
const divStyle = {
  backgroundImage: `url(${image1})`,
}
const useStyles = makeStyles((theme) =>({
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
    width : 200,
    
  },
  mediaFull: {
    height: 440,
    width : 600,
    
  },
  text:{
    margin : '0vh 0.6vw -3.3vh 0vw',
    color : 'green'
  },
  line1 :{
    color : 'green',
    margin : '0vh 0vw 3vh'
  }
 }));

export default function OutlinedCard() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [currImage, setcurrImage] = React.useState(0);
  const [vidurl, setVidurl] = React.useState(0);
  const [title, setTitle] = React.useState(0);
  const [modalStyle] = React.useState(getModalStyle);
  const [titleStyle] = React.useState(getTitleStyle);
  const [closeStyle] = React.useState(getCloseStyle);

  const handleOpen = (props) => {
    setOpen(true);
    setcurrImage(props.url);
    setTitle(props.title)
  };
  
  const handleOpen2 = (props) => {
    setOpen2(true);
    setVidurl(props.url);
    
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleClose2 = () => {
    setOpen2(false);
  };
  const image = [{url : image1, title: 'Scenery 1'}, {url : image2, title: 'Scenery 2'  }, {url : image3, title: 'Scenery 3'}, {url : image4, title: 'Scenery 4'}];
  const video = [{url : 'https://www.youtube.com/embed/bC-BYhuFUtY ', img : video1}, {url : 'https://www.youtube.com/embed/oqtfqVsFaqc ', img : video2}, {url : 'https://www.youtube.com/embed/Y_B6VADhY84 ', img: video3}, {url : 'https://www.youtube.com/embed/AdrnN3A79yc ', img : video4}];

  return (
    
    <Card className={classes.root} variant="outlined">
       
       <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div style = {divStyle}>
         
          <img src={close} style = {closeStyle}/>
          
  <Typography style = {titleStyle}>{title}</Typography>
       <CardMedia
          className={classes.mediaFull}
           image={currImage}
           title="Image"
           style = {modalStyle}
         /> </div>
      </Modal>


      <Modal
        open={open2}
        onClose={handleClose2}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div style = {divStyle}>
         
          <img src={close} style = {closeStyle}/>
          

       <CardMedia
          className={classes.mediaFull}
          component='iframe'
          title='test'
          src={vidurl}
           style = {modalStyle}
         /> </div>
      </Modal>

      <CardContent>
        <Grid container
        direction="row"
        justify="center"
        alignItems="center">

        <Grid item xs = {6}>
        <Typography className = {classes.text} align = 'left' gutterBottom variant="h5" component="h2">
            Media Resources - Images
          </Typography>
          <Typography className = {classes.line1} gutterBottom align = 'left' variant="h5" component="h2">
            ________________________________
          </Typography>
          <Grid container  direction="row" xs = {12} justify="center"
  alignItems="center" spacing={0}>
        {image.map(image => (
        <ButtonBase onClick={() => handleOpen(image)}>
         <CardMedia
          className={classes.media}
           image={image.url}
           title="Image"
         />
         </ButtonBase>
        ))}
         
        <Typography>
        <Box fontSize={12} textAlign="left" m={1}>because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful.But I must explain to you give you a complete account of the system</Box>
        </Typography>
</Grid>
</Grid>
        <Grid item xs = {6}>
        <Typography className = {classes.text}  align = 'left' gutterBottom variant="h5" component="h2">
            Media Resources - Videos
          </Typography>
          <Typography className = {classes.line1} gutterBottom align = 'left' variant="h5" component="h2">
          ________________________________
          </Typography>
          <Grid container  direction="row" xs = {12} justify="center"
  alignItems="center" spacing={0}>
        
        
        {video.map(video => (
        <ButtonBase onClick={() => handleOpen2(video)}>
         <CardMedia
          className={classes.media}
           image={video.img}
           title="Video"
         />
         </ButtonBase>
        ))}
        <Typography>
        <Box fontSize={12} textAlign="left" m={1}>because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful.it is pleasure, but consequences that are extremely painful.</Box>
        </Typography>
</Grid>
</Grid>
        </Grid>
        
      </CardContent>
      
      
    </Card>
  );
}

