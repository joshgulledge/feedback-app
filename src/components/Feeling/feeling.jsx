import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';

// material ui components
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';
import FormHelperText from '@material-ui/core/FormHelperText';

const Feeling = function () {
  // this lets us use history to move around pages... will be in all pages
  const history = useHistory();

  // use a local state to validate input
  const [input, setInput] = useState('');
  // ^ a string because all inputs are strings

  // allows us to send things to redux...
  //  will be on all pages
   const dispatch = useDispatch();

  //  this is material ui settings
  const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 100, 
    },
    // selectEmpty: {
    //   marginTop: theme.spacing(0),
    // }, // couldn't figure out what this was doing
  }));
  const classes = useStyles(); // for material ui 
  
  const nextClicked = function () {
    // validate the input before moving to next page
    if (!input) {
      swal('Please enter a number between 1 and 5');
      return; // return will leave function 
    };

      // send the value to redux to handle
      dispatch({
        type: 'SET_FEELING_INPUT',
        payload: input
      }) // end dispatch

    // if pass the check then move to next page
    history.push('/understand')
  }; // end nextClicked

  return (
    <div>
      <p>How are you feeling today? 1 is Terrible and 5 is Fantastic</p>

    {/* The following comes from material UI */}
      {/* Used the examples in the docs */}
      <FormControl className={classes.formControl}>
        {/* the label is for the input field */}
        <InputLabel id="select-label">Answer</InputLabel>
        {/* this makes a drop down with premade values */}
        <Select
          labelId="select-label"
          value={input}
          onChange={(e) =>
            setInput(e.target.value)
          }
        >
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={4}>4</MenuItem>
          <MenuItem value={5}>5</MenuItem>
        </Select>
        <FormHelperText>Required</FormHelperText>
      </FormControl>

      <Button variant="contained" color="primary" onClick={nextClicked}>Next</Button>
      
    </div>
  ) // end of what to return
}; // end Feeling

export default Feeling;