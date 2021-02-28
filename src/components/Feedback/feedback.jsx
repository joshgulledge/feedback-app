import axios from "axios";
import swal from "sweetalert";

const Feedback = function ({feedbackList, getFeedback}) {

  const sendDelete = function (e) {
    const feedbackId = e.target.id;

    // make sure they want to delete
    swal({
      title: 'Are you sure?',
      text: 'This action can not be undone',
      icon: 'warning',
      buttons: true,
      dangerMode: true
    }).then( feedBack => {
      // if ok button pressed then make the delete
      if (feedBack) {
        // send axios call
        axios({
          method:'DELETE',
          url: `/deleteFeedback/${feedbackId}`
        }).then(response => {
          // reload the feedback
          getFeedback();
          // show success message
          swal('Feedback has been deleted', {icon: "success"
          });
        }).catch(err => console.log(err)); // this ends the axios call
        
        // if they canceled the delete 
      } else {
        swal('Feedback has not been deleted')
      };
    });

  }; // end sendDelete

  return (
    <tbody>
      {/* loop through list */}
      {feedbackList.map(feedback => {
        return(
          <tr key={feedback.id}>
            <td>{feedback.feeling}</td>
            <td>{feedback.understanding}</td>
            <td>{feedback.support}</td>
            <td>{feedback.comments}</td>
            <button id={feedback.id} onClick={sendDelete}>Delete</button>
          </tr>
        )
      })}  
  </tbody>
  )
};

export default Feedback;