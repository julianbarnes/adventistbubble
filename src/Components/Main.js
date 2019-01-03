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
import EventCard from './Main/EventCard';

//import TitleBar from './TitleBar';

const styles = theme => ({
    root: {
      width: '50%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
      padding: '5%'
    },
  });
  
class Main extends React.Component {
    state = {
        eventList: []
    };

    

    render() {
        const { classes } = this.props;

        return (
        <div>
            
            <Paper elevation={1} style={{width: "100%", margin:'auto'}}>
                <List dense className={classes.root} style={{margin: "auto", width:"80%"}}>
                    {[0, 1, 2, 3].map(value => (
                    <ListItem key={value} button>
                        
                        <EventCard value={value}></EventCard>
                        
                    </ListItem>
                    ))}
                </List>
            </Paper>
        </div>
        );
    }
}


export default withStyles(styles)(Main);