import { createContext, useState, useEffect } from 'react'
import axios from 'axios';
import { API_URL } from '../../utils/API/APIKEY';


const ProductContext = createContext();

const ProductProvider = ({ children }) => {

    const [product, setProduct] = useState([])

    useEffect(() => {
        const viewProduct = async () => {
            try {
                const response  = await axios.get(`${API_URL}/.json/products`);
                setProduct(response.data)
            } catch (error) {
                console.error("ada eror waktu fetching data: ",error);
            }
        }

        viewProduct()
    }, [])


    return (
        <ProductContext.Provider value={{ product }}>
            {children}
        </ProductContext.Provider>
    )
}

export { ProductContext, ProductProvider }