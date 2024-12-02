// LLAMADA DE API 
import axios from "axios";

export async function getAllProducts () {
    return await axios.get("https://dummyjson.com/products");

}

export async function getAllCategories () {
    return await axios.get("https://dummyjson.com/products/categories");
}