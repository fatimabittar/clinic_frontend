import { ReviewsContext } from '../context/ReviewContext'
import { useContext } from 'react'

export const useReviewsContext = () => {
  const context = useContext(ReviewsContext)

  if (!context) {
    throw Error("error")
  }

  return context
}