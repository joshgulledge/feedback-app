import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';
import {useState} from 'react';


// material ui components
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';


const Comments = function () {
  const [input, setInput] = useState('');
  const history = useHistory();
  const dispatch = useDispatch();

  // material ui styling stuff
  const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));
  const classes = useStyles(); // material ui


  const saveCommentsInput = function (e) {
    // this can be left blank if desired
    dispatch({
      type: 'SET_COMMENTS_INPUT',
      payload: input
    }) // end dispatch

    history.push('/submit');

  }; // end saveCommentsInput

  // this will allow the user to go back
  const previous = function () {
    history.push('/understand');
  }; // end previous

  return (
    <div>
      <p>Do you have any comments?</p>

      {/* this allows the user to go back */}
      <Button variant="contained" color="primary" onClick={previous}>Previous</Button>
      
      {/* <input type="text" 
       placeholder="Enter your comment" 
       onChange={saveCommentsInput}
      /> */}

      <form className={classes.root} noValidate autoComplete="off">
      <TextField  label="Comments Here" variant="filled" onChange={(e) => setInput(e.target.value)}/>
    </form>

      <Button variant="contained" color="primary" onClick={saveCommentsInput}>NEXT</Button>
    </div>
  )
} // end Comments

export default Comments;