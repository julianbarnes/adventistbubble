import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Checkbox from '@material-ui/core/Checkbox';
import Avatar from '@material-ui/core/Avatar'
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
    root: {
      width: '50%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
      padding: '5%'
    },
  });
  
class TitleBar extends React.Component {
    

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar>
                    <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" color="inherit" className={classes.grow}>
                        News
                    </Typography>
                    <Button color="inherit">Login</Button>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}


export default withStyles(styles)(TitleBar);