import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';
import {useState} from 'react';


// material Ui components
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';
import FormHelperText from '@material-ui/core/FormHelperText';


// see feeling component for details 
const Understand = function () {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();
  const history = useHistory();
  
// this is material ui stuff...
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
    // see feeling component for details 
    if (!input) {
      swal('Please enter a number between 1 and 5');
      return; // return will leave function 
    }; // end if statement

      dispatch({
        type: 'SET_UNDERSTAND_INPUT',
        payload: input
      }) // end dispatch

    history.push('/supported')
  }; // end nextClicked

  // this will allow the user to go back
  const previous = function () {
    history.push('/feeling');
  }; // end previous


  return (
    <div>
      <p>How well did you understand the material? 1 is Terrible and 5 is Fantastic</p>

    {/* this allows the user to go back */}
      <Button variant="contained" color="primary" onClick={previous}>Previous</Button>


      <FormControl className={classes.formControl}>
        <InputLabel id="select-label">Answer</InputLabel>
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
      
      <Button variant="contained" color="primary" onClick={nextClicked}>NEXT</Button>
    </div>
  ) // end return
}; // end Understand

export default Understand;