import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../common/ProductCard';
import { useProducts } from '../../hooks/useProducts';

const FeaturedProducts: React.FC = () => {
  const { products, loading } = useProducts();
  
  // Filter to get only 6 featured products
  const featuredProducts = products
    .filter(product => product.featured)
    .slice(0, 6);
  
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif mb-4 text-gray-900">Featured Collection</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our handpicked selection of exquisite pieces, crafted with the finest materials and unparalleled attention to detail.
          </p>
        </div>
        
        {loading ? (
          <div className="flex justify-center">
            <div className="w-16 h-16 border-4 border-[#D4AF37] border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Link 
                to="/products" 
                className="inline-block px-8 py-3 border-2 border-[#14213D] bg-[#14213D] text-white font-medium rounded-md hover:bg-transparent hover:text-[#14213D] transition-colors duration-300"
              >
                View All Products
              </Link>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default FeaturedProducts;