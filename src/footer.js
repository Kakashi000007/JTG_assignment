import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import image from './images/footer_bg.jpg'
import { Box, Typography } from "@material-ui/core";
 
const useStyles = makeStyles({
  footer : {
    height : '12vh'
  }
});
const divStyle = {
    backgroundImage: `url(${image})`
  }

function Footer() {
  const classes = useStyles();
  return (
    <div style = {divStyle}  className={classes.footer}>
      <p style = {{color : 'white'}}>HOME PRODUCTS CUSTOMERS NEWS+EVENTS  ABOUT US  @2011 Company Name.All rights reserved.</p>
    </div>
  );
}

export default Footer;
