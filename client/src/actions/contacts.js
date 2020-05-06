import axios from 'axios';
import { setAlert } from './alert';




export const sendContact = ({name, email, message}) => async dispatch => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }
      const body = JSON.stringify({name, email, message});
  
      try {
        const res = await axios.post('/api/contact', body, config);
  
        dispatch(setAlert("Wiadomośc została wsyłana", 'danger'));
  
      } catch(err) {
       const errors = err.response.data.errors;
  
       if(errors) {
         errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
         console.log(errors.msg);
       }
  
      
      }
  };