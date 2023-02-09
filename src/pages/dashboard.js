
import { useEffect }from 'react'
import { useReviewsContext } from '../hooks/useReviewsContext'
import { useAuthContext } from '../hooks/useAuthContext'


import ReviewDetails from '../components/addReviews/ReviewsDetails'
import ReviewForm from '../components/addReviews/ReviewForm'

const Dashboard= () => {
  const {reviews, dispatch} = useReviewsContext()
  const {user} = useAuthContext()

  useEffect(() => {
    const fetchReviews = async () => {
      const response = await fetch('http://localhost:8000/reviews/read', {
        headers: {'Authorization': `Bearer ${user.token}`},
      })
      const json = await response.json()

      if (response.ok) {
        dispatch({type: 'SET_REVIEWS', payload: json})
      }
    }

    if (user) {
      fetchReviews()
    }
  }, [dispatch, user])
  
  
  return (
    <div className="dashboard">
      <div className="reviews">
         {reviews && reviews.map((review) => (
          <ReviewDetails key={review._id} review={review} />
        ))}
        
      </div>
      <ReviewForm />
    </div>
  )
}

export default Dashboard