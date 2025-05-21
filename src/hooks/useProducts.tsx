import { useState, useEffect } from 'react';
import { Product } from '../types/Product';
import { products as staticProducts } from '../data/products';

export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  useEffect(() => {
    // Simulate loading from an API
    const fetchProducts = async () => {
      try {
        // In a real app, this would be an API call
        // For now, we'll just use the static data with a timeout to simulate load time
        setTimeout(() => {
          setProducts(staticProducts);
          setLoading(false);
        }, 800);
      } catch (err) {
        setError('Failed to load products');
        setLoading(false);
      }
    };
    
    fetchProducts();
  }, []);
  
  const getProductById = (id: string): Product | undefined => {
    return products.find(product => product.id === id);
  };
  
  const getProductsByCategory = (category: string): Product[] => {
    return products.filter(product => 
      product.category.toLowerCase() === category.toLowerCase()
    );
  };
  
  const getFeaturedProducts = (): Product[] => {
    return products.filter(product => product.featured);
  };
  
  return {
    products,
    loading,
    error,
    getProductById,
    getProductsByCategory,
    getFeaturedProducts
  };
};