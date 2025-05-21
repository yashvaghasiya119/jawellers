import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Heart } from 'lucide-react';
import { Product } from '../../types/Product';
import { useCart } from '../../hooks/useCart';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  
  return (
    <div className="group relative overflow-hidden rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="relative aspect-square overflow-hidden">
        <img 
          src={product.images[0]} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {product.discount > 0 && (
          <div className="absolute top-3 left-3 bg-red-500 text-white text-xs px-2 py-1 rounded">
            {product.discount}% OFF
          </div>
        )}
        
        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
        
        <div className="absolute top-3 right-3 space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button 
            className="w-9 h-9 rounded-full bg-white shadow-md flex items-center justify-center text-gray-700 hover:text-[#D4AF37] transition-colors duration-300"
            aria-label="Add to wishlist"
          >
            <Heart size={18} />
          </button>
        </div>
      </div>
      
      <div className="p-4 bg-white">
        <Link to={`/products/${product.id}`} className="block">
          <h3 className="text-lg font-medium text-gray-900 mb-1 hover:text-[#D4AF37] transition-colors duration-300">
            {product.name}
          </h3>
          <p className="text-sm text-gray-600 mb-2">{product.category}</p>
        </Link>
        
        <div className="flex items-center justify-between">
          <div>
            {product.discount > 0 ? (
              <div className="flex items-center space-x-2">
                <span className="text-lg font-medium text-gray-900">
                  ${(product.price * (1 - product.discount / 100)).toFixed(2)}
                </span>
                <span className="text-sm text-gray-500 line-through">
                  ${product.price.toFixed(2)}
                </span>
              </div>
            ) : (
              <span className="text-lg font-medium text-gray-900">
                ${product.price.toFixed(2)}
              </span>
            )}
          </div>
          
          <button 
            onClick={() => addToCart(product)}
            className="w-10 h-10 rounded-full bg-[#14213D] flex items-center justify-center text-white hover:bg-[#D4AF37] transition-colors duration-300"
            aria-label={`Add ${product.name} to cart`}
          >
            <ShoppingBag size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;