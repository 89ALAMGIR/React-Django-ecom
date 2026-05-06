import { useEffect, useState } from 'react';
import axios from 'axios'; // 1. Import axios at the top

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // 2. Use axios.get instead of fetch
    axios.get('http://127.0.0.1:8000/api/products/')
      .then(response => {
        // Axios puts the backend data inside a '.data' object automatically
        console.log("Data received:", response.data); // Add this line
        setProducts(response.data); // here message is backend views.py ->return JsonResponse({"messag": "Hello from Django!"})
      })
      .catch(error => {
        console.error('Error connecting to the backend:', error);
      });
  }, []); 

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <h1 className="text-3xl font-bold underline p-4">Product List </h1>
      <div className="container mx-auto p-4">
        {products.map((product) => (
          <div key={product.id} className="bg-white p-4 rounded shadow mb-4">
            <h2 className="text-xl font-semibold">{product.name}</h2>
            <p className="text-gray-600">{product.description}</p>
            <p className="text-gray-800 font-bold">${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
