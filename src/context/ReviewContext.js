import { createContext, useReducer } from 'react'

export const ReviewsContext = createContext()

export const reviewsReducer = (state, action) => {
  console.log(action)
  switch (action.type) {
    case 'SET_REVIEWS': 
      return {
        reviews: action.payload
      }
    case 'CREATE_REVIEW':
      return {
        reviews: [action.payload, ...state.reviews]
      }
    case 'DELETE_REVIEW':
     return {
        reviews: state.reviews.filter((r) => r._id !== action.payload._id)
      }
    case 'UPDATE_REVIEW' :
      return {
        ...state,
        reviews: state.reviews.map((review) => {
          if (review._id === action.payload._id) {
            return action.payload
          }
          return review
        })
      }

    default:
      return state
  }
}

export const ReviewsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reviewsReducer, {
    reviews: null
  })

  return (
    <ReviewsContext.Provider value={{...state, dispatch}}>
      { children }
    </ReviewsContext.Provider>
  )
}