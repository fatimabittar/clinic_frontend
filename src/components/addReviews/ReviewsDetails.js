import { useReviewsContext } from '../../hooks/useReviewsContext'
import { useAuthContext } from '../../hooks/useAuthContext'


const ReviewDetails = ({ review }) => {
  const { dispatch } = useReviewsContext()
  const { user } = useAuthContext()
  const handleClick = async () => {
           const url = "http://localhost:8000/reviews/delete/" + review._id
           const response = await fetch(url, {
            method: 'DELETE',
            headers: {
              'Authorization': `Bearer ${user.token}`
           },
         })
        const json = await response.json()
      
         if (response.ok) {
           dispatch({type: 'DELETE_REVIEW', payload: json})
          }
          
    }
  return (
    <div className="review-details">
      <h4>{review.name}</h4>
      <p><strong>message: </strong>{review.message}</p>
      <p><strong>logo </strong>{review.logo}</p>
      <span className="material-symbols-outlined" onClick={handleClick}>delete</span>

    </div>
  )
}

export default ReviewDetails
