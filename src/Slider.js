import React, { Component } from 'react';
import Slider from 'infinite-react-carousel';
import {useStyle} from '@material-ui/core/styles'
import Image1 from './images/banner_slider_01.jpg';
import Image2 from './images/banner_slider_02.jpg';
import { Typography } from '@material-ui/core';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box'

const divStyles = {
  top : '50%',
};


const text = {
    
    margin : '-62vh 10.4vw 5vh',
    color : 'green',
    
  };
const text2 = {
  margin : '0vh -48vw 0vh 0vw',
    
  }
 
const button = {
    color :'green',
    margin : '-65vh 0vw 0vh 62.2vw',
  };

export default class CustomSlider extends Component {
  
  render() {
    
    const settings =  {
      arrows: false,
      autoplay: true,
      dots : true
    };
  
    
 
    return (
      <div>
        <Slider style = {divStyles} { ...settings }>
          <div >
            <img src={Image1}/>
            <CardContent>
            <Typography style = {text} gutterBottom align = 'right' variant="h5" component="h2">
            META CONSECTETUS
          </Typography>
            <Typography  style = {text2} variant="body1" color="textSecondary" component="p">
            <Box>Nulla Pariatur. Nulla Pariatur.</Box>
            <Box>Nulla Voluptatem Pariatur.</Box>
          </Typography>
        </CardContent>
      
        <CardActions>
            <Button variant="outlined" size="small" style = {button}>Learn More   {">"}</Button>
        </CardActions>
          </div>
          <div>
          <img src={Image2}/>
          <CardContent>
            <Typography style = {text} gutterBottom align = 'right' variant="h5" component="h2">
            META CONSECTETUS
          </Typography>
            <Typography  style = {text2} variant="body1" color="textSecondary" component="p">
            <Box>Nulla Pariatur. Nulla Pariatur.</Box>
            <Box>Nulla Voluptatem Pariatur.</Box>
          </Typography>
        </CardContent>
      
        <CardActions>
            <Button variant="outlined" size="small" style = {button}>Learn More   {">"}</Button>
        </CardActions>
          </div>
        </Slider>
      </div>
    );
  }
}