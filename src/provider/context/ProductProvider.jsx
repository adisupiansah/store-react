import { createContext, useState, useEffect } from 'react'
import axios from 'axios';
import { API_URL } from '../../utils/API/APIKEY';

const ProductContext = createContext();

const ProductProvider = ({ children }) => {

    const [product, setProduct] = useState([])

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get(`${API_URL}/products.json`);
          const data = response.data;
          if (data) {
            const dataArray = Object.entries(data).map(([key, value]) => ({
              id: key,
              ...value,
            }));
            setProduct(dataArray);
          }
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
    
      fetchData();
    }, []);
        

    return (
        <ProductContext.Provider value={{ product, setProduct }}>
            {children}
        </ProductContext.Provider>
    )
}

export { ProductContext, ProductProvider }