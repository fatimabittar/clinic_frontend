import { useState} from "react"
import { useReviewsContext } from "../hooks/useReviewsContext"
import { useAuthContext } from "../hooks/useAuthContext"
import "../index.css"
import axios from "axios"


const Update = () => {
    const { user } = useAuthContext()
    const { dispatch } = useReviewsContext()
    const [name, setName] = useState('')
    const [message, setMessage] = useState('')
    const [logo, setLogo] = useState('')
    
    const handleSave = async (e) => {
      e.preventDefault()
    
     const formData = new FormData();
     formData.append('name', name);
     formData.append('message', message);
     formData.append('logo',logo);
    try{ 
       const response = await axios({
        url:'http://localhost:8000/reviews/add', 
        method: 'PUT',
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${user.token}`
       },
        data: formData
      })
     const json = await response.data
      if (response.status===200) {
        setName('')
        setMessage('')
        setLogo('')
        dispatch({type: 'UPDATE_REVIEW', payload: json})
        
      }
    
    }
    catch{
       
    }
    
    }
    return (
      <form className="update">
        <h3>Update a Review</h3>
  
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
  
        <button onClick={handleSave}>save changes</button>
      </form>
    )
  }
 
  
  export default Update