import { useReviewsContext } from '../../hooks/useReviewsContext'
import { useAuthContext } from '../../hooks/useAuthContext'
import { useState } from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import Update from '../Update';

const ReviewDetails = ({ review }) => {
  const { dispatch } = useReviewsContext()
  const { user } = useAuthContext()
  const [text, setText] = useState(review.message);
  const [isEditing, setIsEditing] = useState(false);
  
  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = async () => {
    setIsEditing(false);
    console.log(text)
    const url = "http://localhost:8000/reviews/update/" + review._id
    const response = await fetch(url, {
     method: 'PATCH',
     headers: {
       'Authorization': `Bearer ${user.token}`,
       'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      message: text
    })

  })
 const json = await response.json()

  if (response.ok) {
    dispatch({type: 'UPDATE_REVIEW', payload: json})
   }
   console.log(response)
  };

  const handleChange = (event) => {
    setText(event.target.value);
  };
  const handleClickD = async () => {
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
     <div className='name'>
        <div className='left'>
          <h4>{review.name}</h4>
        </div>
         
         <div className='right'>
            <IconButton aria-label="delete" size="large"  onClick={handleClickD} className='delete'>
               <DeleteIcon />
            </IconButton>
            <IconButton aria-label="edit" size="large"  className='edit' onClick={handleEdit}>
               <EditIcon/>
            </IconButton>
        </div>
      </div>

      <div className='message' >
        <div className='msg'>
          <strong>Review: </strong>
           <div>
              {!isEditing && (
                    <div>
                      <p>{text}</p>
                    </div>
              )}
              {isEditing && (
              <div>
                <textarea value={text} onChange={handleChange} />
                <button onClick={handleSave}>Save</button>
              </div>
             )}
    </div>
       </div>
      </div>
    
        <img  src={`data:image/jpeg;base64,${review.logo}`} alt="customers" /> 
    </div> 
         
   
      
  
    
  )
}

export default ReviewDetails
