import { useState, useEffect } from "react";
import { getAllProducts } from "../services/productServices";

export const useGetAllProducts = () => {
    const [loading, setLoading]  = useState (false);
    const [products, setProducts] = useState ([]);

    useEffect (() => {
        getAllProducts()
        .then(
            (res) => {
                setProducts(res.data.products);
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => setLoading(false));
        },[]);

        return { loading, products};

}