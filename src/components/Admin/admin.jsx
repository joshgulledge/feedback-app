import {useEffect, useState} from 'react';
import axios from 'axios';
import Feedback from '../Feedback/feedback';

const Admin = function () {

  // this will store the value returned
  const [feedbackList, setFeedbackList] = useState([]);

  // this will run getFeedback function on page load
  useEffect(() => {
    getFeedback();
  }, []);

  const getFeedback = function () {
    console.log('in getFeedback');

    axios({
      method: 'GET',
      url: '/getFeedback'
    }).then((res) => {
      console.log(res.data);
      setFeedbackList(res.data);
    }).catch(err => console.log(err));

  }; // end getFeedback


  return (
    
      <table>
        <thead>
          <tr>
            <th>Feeling</th>
            <th>Understanding</th>
            <th>Support</th>
            <th>Comments</th>
          </tr>
        </thead>
          <Feedback feedbackList={feedbackList}/>
      </table>
    
  )
};

export default Admin;