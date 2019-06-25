import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ListItem from '@material-ui/core/ListItem';
import acf from './acf.jpg'
import prayer from './prayerline.jpeg'
import youth from './youthday.jpeg'



const styles = {
  card: {
    maxWidth: 645,
    width: '145vw',
    height: 'auto'
  },
  media: {
    paddingTop: 120,
    height: 320,
    width: 'auto'
  },
};

function EventCard(props) {
  const { classes } = props;
  const images = [acf,prayer,youth]
  return (
    <ListItem key={props.value} button>
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia image={images[0]} className={classes.media} title="Image"/>
          <CardContent>
          <Typography variant="h6" component="h2">
            This is event { props.value }
          </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
    </ListItem>
  );
}

EventCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(EventCard);
