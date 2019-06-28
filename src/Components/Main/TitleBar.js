import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import sdalogo from './sdalogo.png'
import CardMedia from '@material-ui/core/CardMedia';



const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 0,
  },
  img: {
    width: 50,
    height: 50,
    marginRight: '60%'
  }
};

function TitleBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>    
        <Typography>Bubble</Typography>
          <img src={sdalogo} className={classes.img}></img>
          
          <MenuIcon />
        </Toolbar>
      </AppBar>
    </div>
  );
}


export default withStyles(styles)(TitleBar);
