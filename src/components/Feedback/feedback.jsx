
const Feedback = function ({feedbackList}) {

  const sendDelete = function (e) {
    console.log(e.target.id);
  }

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