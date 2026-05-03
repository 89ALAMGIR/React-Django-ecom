// 

import { useEffect, useState } from 'react';
import axios from 'axios'; // 1. Import axios at the top

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    // 2. Use axios.get instead of fetch
    axios.get('http://127.0.0.1:8000/api/')
      .then(response => {
        // Axios puts the backend data inside a '.data' object automatically
        setMessage(response.data.message); 
      })
      .catch(error => {
        console.error('Error connecting to the backend:', error);
      });
  }, []); 

  return (
    <div>
      <h1>Backend Response:</h1>
      <p>{message}</p>
    </div>
  );
}

export default App;
