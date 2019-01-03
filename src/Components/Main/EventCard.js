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
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    height: 40,
  },
};

function EventCard(props) {
  const { classes } = props;
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardContent>
          <Grid container spacing={24}>
            <Grid item xs={12}>
                Left Side
            </Grid>
            <Grid item xs={12}>
                Right Side
            </Grid>
          </Grid>
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
  );
}

EventCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(EventCard);
