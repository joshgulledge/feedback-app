
const Feedback = function ({feedbackList}) {

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
          </tr>
        )
      })}  
  </tbody>
  )
};

export default Feedback;