import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Paper from '@material-ui/core/Paper';
import EventCard from './Main/EventCard';
import axios from 'axios';

//import TitleBar from './TitleBar';

const styles = theme => ({
    root: {
      width: '100%',
      maxWidth: 500,
      backgroundColor: theme.palette.background.paper,
      padding: '5%'
    },
  });
  
class Main extends React.Component {
    
    constructor(props) {
        super(props);
        //bind the methods 

        this.state = {
            events: []
        };
    }

    componentDidMount() {
        axios.get('http://localhost:8000/events')
            .then(res => {
                this.setState({events: res.data})
            })
    }

    eventList() {
        return this.state.events.map(currentEvent => {
            return <EventCard key={currentEvent._id} value={currentEvent.title}></EventCard>
        })
    }
    
    

    

    render() {
        const { classes } = this.props;
        return (
        <div>
            
            <Paper elevation={1} style={{width: "100%", margin:'auto'}}>
                <List dense className={classes.root} style={{margin: "auto", width:"100%"}}>
                    {this.eventList()}

                </List>
            </Paper>
        </div>
        );
    }
}


export default withStyles(styles)(Main);