// lib/api.js

import { Category } from "../../utils/categories";
import { Product } from "../../../data.ts/product";

// Function to fetch product data
export const fetchProductData = async (productId:Product) => {
    const res = await fetch(`https://api.example.com/products/${productId}`);
    if (!res.ok) {
      throw new Error('Failed to fetch product data');
    }
    return res.json();
  };
  
  // Function to fetch category data
  export const fetchCategoryData = async (categoryId:Category) => {
    const res = await fetch(`https://api.example.com/categories/${categoryId}`);
    if (!res.ok) {
      throw new Error('Failed to fetch category data');
    }
    return res.json();
  };
  
  // Function to fetch all products
  export const fetchAllProducts = async () => {
    const res = await fetch('https://api.example.com/products');
    if (!res.ok) {
      throw new Error('Failed to fetch products');
    }
    return res.json();
  };
  
  // Function to fetch all categories
  export const fetchAllCategories = async () => {
    const res = await fetch('https://api.example.com/categories');
    if (!res.ok) {
      throw new Error('Failed to fetch categories');
    }
    return res.json();
  };
  