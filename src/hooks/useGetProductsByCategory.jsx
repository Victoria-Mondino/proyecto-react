import { useEffect, useState } from "react"
import { getProductsByCategory } from "../services/productServices"


export const useGetProductsByCategory = (id) => {
    const [products, setProducts] = useState ([]);
    const [loading, setLoading] = useState(true);

    useEffect (() => {
        getProductsByCategory(id)
        .then((res) => setProducts(res.data.products)) 
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));         
    },[id]);

    




    
  return { products, loading };
}
