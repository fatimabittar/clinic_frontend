import { useState} from "react"
import { useReviewsContext } from "../../hooks/useReviewsContext"
import { useAuthContext } from "../../hooks/useAuthContext"
import axios from "axios"

const ReviewForm = () => {
    const { user } = useAuthContext()
    const { dispatch } = useReviewsContext()
    const [name, setName] = useState('')
    const [message, setMessage] = useState('')
    const [logo, setLogo] = useState('')
    const [error, setError] = useState(null)
    const[added,setAdded]=useState(null)
    const handleSubmit = async (e) => {
      e.preventDefault()
    
     if (!user) {
        setError('You must be logged in')
        return
     }
     const formData = new FormData();
     formData.append('name', name);
     formData.append('message', message);
     formData.append('logo',logo);
    try{ 
       const response = await axios({
        url:'http://localhost:8000/reviews/add', 
        method: 'POST',
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${user.token}`
       },
        data: formData
      })
      console.log(response)
     const json = await response.data
     
      if (response.status===200) {
        setName('')
        setMessage('')
        setLogo('')
        setError(null)
        setAdded("uploaded successfully")
        dispatch({type: 'CREATE_REVIEW', payload: json})
        
      }
      else{
        setError(json.error)
      }
    }
    catch{
       
          setError("error")
          setAdded(null)
    }
    
    }
    return (
      <form className="create" onSubmit={handleSubmit}>
        <h3>Add a New Review</h3>
  
        <label className="label">Name:</label>
        <input 
          className="input"
          type="text"
          onChange={(e) => setName(e.target.value)}
          value={name}
      />
  
        <label className="label">message:</label>
        <input 
          className="input"
          type="text"
          onChange={(e) => setMessage(e.target.value)}
          value={message}
        />
        
        <label className="label">Logo:</label>
        <input 
         className="input" 
         type="file"
        onChange={(e) => setLogo(e.target.files[0])}
        />
  
        <button>Add Workout</button>
        {error && <div className="error">{error}</div>}
        {added && <div className="valid">{added}</div>}
      </form>
    )
  }
  
  export default ReviewForm