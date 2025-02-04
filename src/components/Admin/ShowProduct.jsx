import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ShowProducts from '../ShowProducts'

function ShowProduct() {
    const [ShowProduct, setShowProduct] = useState([])

    useEffect(() => {
        // Define the async function within the useEffect
        const fetchProducts = async () => {
            try {
                const res = await axios.get("http://localhost:3000/api/products");
                setShowProduct(res.data);
                console.log("Fetched products:",res.data);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };

        fetchProducts();
    }, []);
  return (
    <div>
         <div>
            {ShowProduct.length > 0 ? (
                ShowProduct.map((product, index) => (
                    <div key={index}>
                        <h3>{product.name}</h3>
                        <p>{product.description}</p>
                        {/* Add more product details as needed */}
                    </div>
                ))
            ) : (
                <p>Loading products...</p>
            )}
        </div>
    </div>
  )
}

export default ShowProduct