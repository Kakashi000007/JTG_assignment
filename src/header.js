import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Slide from '@material-ui/core/Slide';
import logo from './images/logo.png'
import {withStyles} from '@material-ui/styles';
import ButtonBase from '@material-ui/core/ButtonBase';

const styles = theme => ({
    root: {
      width: '100%',
      display: "inline",
      position: "fixed",
      top: "0",
      height: "15vh",
      fontWeight: "400",
      textAlign: 'left',
      padding: '0px 0 0 20px',
      zIndex: '1',
      background : 'linear-gradient(90deg, rgba(225,225,225,1) 0%, rgba(255,255,255,1) 27%, rgba(181,181,181,1) 74%)',
    },
    paper :{
        width : '100vw',
        display: "inline",
        position: "relative",
        top: "2.5vh",
        left : '10vw',
        right : '10vw',
        zIndex : "tooltip",
        background : '#ffffff00',
        

    },
    headerTitle :{
        margin : '3vh 3vw 0px 2vw'
    },
});



function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

function HideAppBar(props) {
    const{classes} = props;
  return (
    <React.Fragment>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar  className = {classes.root}>
          <Paper elevation={0} className = {classes.paper}>
              <Grid container spacing={2}>
              <Grid item xs ={3}>
                <ButtonBase>
                    <img alt = "" src ={logo}/>
                </ButtonBase>
              </Grid>
              
              <Grid  className = {classes.headerTitle} item  xs={1}>
                  <Typography>PRODUCTS</Typography>
              </Grid>
              <Grid item  className = {classes.headerTitle}  xs={1}>
                  <Typography>COMPANY</Typography>
              </Grid>
              <Grid item  className = {classes.headerTitle} xs={1}>
                  <Typography textAlign = 'left'>NEWS+EVENTS</Typography>
              </Grid>
              <Grid item   className = {classes.headerTitle}xs={2}>
                  <Typography   style ={{margin : '0vh 0vw 0px 4vw'}} >ABOUT US</Typography>
              </Grid>
              </Grid>
          </Paper>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
      
    </React.Fragment>
  );
}
export default withStyles(styles)(HideAppBar);