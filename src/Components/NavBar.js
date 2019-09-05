import React from 'react';
import { makeStyles } from '@material-ui/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import AddIcon from '@material-ui/icons/Add';
import HomeIcon from '@material-ui/icons/Home';


const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  appBar: {
    top: 'auto',
    bottom: 0,
    position: 'fixed',
    width: '100%',
    marginTop: 50

  }
});

export default function NavBar() {
  
  const classes = useStyles();
  const [value, setValue] = React.useState('recents');

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  function goToAdd(e) {
    window.location = '/add'
  }
  
  function goToHome(e) {
    window.location = '/'
  }

  
  return (
    <BottomNavigation position='fixed' value={value} onChange={handleChange} className={classes.appBar}>
      <BottomNavigationAction label="Home" value="home" icon={<HomeIcon />} onClick ={()=> goToHome()}></BottomNavigationAction>
      <BottomNavigationAction label="Add" value="add" icon={<AddIcon />} onClick={()=> goToAdd()}></BottomNavigationAction>
    </BottomNavigation>
  );
  
  
}
