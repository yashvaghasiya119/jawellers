import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Minus, Plus, Star, Heart, Truck, Shield, RefreshCw } from 'lucide-react';
import { useProducts } from '../hooks/useProducts';
import { useCart } from '../hooks/useCart';

const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { getProductById, loading } = useProducts();
  const { addToCart } = useCart();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  
  const product = getProductById(id || '');
  
  // Reset state when product changes
  useEffect(() => {
    setSelectedImage(0);
    setQuantity(1);
  }, [id]);
  
  if (loading) {
    return (
      <div className="min-h-screen pt-24 flex justify-center items-center">
        <div className="w-16 h-16 border-4 border-[#D4AF37] border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }
  
  if (!product) {
    return (
      <div className="min-h-screen pt-24 flex justify-center items-center">
        <div className="text-center">
          <h2 className="text-2xl font-serif mb-4">Product Not Found</h2>
          <p className="text-gray-600 mb-6">The product you're looking for doesn't exist or has been removed.</p>
          <Link 
            to="/products" 
            className="inline-block px-6 py-3 bg-[#D4AF37] text-white rounded-md hover:bg-[#B8860B] transition-colors duration-300"
          >
            Browse Our Collection
          </Link>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen pt-24 pb-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Product Images */}
          <div className="lg:w-1/2">
            <div className="relative aspect-square mb-4 overflow-hidden rounded-lg">
              <img 
                src={product.images[selectedImage]} 
                alt={product.name} 
                className="w-full h-full object-cover"
              />
              
              {product.discount > 0 && (
                <div className="absolute top-4 left-4 bg-red-500 text-white text-sm px-3 py-1 rounded-md">
                  {product.discount}% OFF
                </div>
              )}
            </div>
            
            <div className="grid grid-cols-4 gap-2">
              {product.images.map((image, index) => (
                <button 
                  key={index} 
                  onClick={() => setSelectedImage(index)}
                  className={`border rounded-md overflow-hidden aspect-square ${
                    selectedImage === index 
                      ? 'border-[#D4AF37] ring-2 ring-[#D4AF37] ring-opacity-30' 
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <img 
                    src={image} 
                    alt={`${product.name} - view ${index + 1}`} 
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
          
          {/* Product Details */}
          <div className="lg:w-1/2">
            <nav className="mb-4 text-sm">
              <ol className="flex items-center space-x-2 text-gray-500">
                <li>
                  <Link to="/" className="hover:text-[#D4AF37] transition-colors duration-300">Home</Link>
                </li>
                <li>/</li>
                <li>
                  <Link to="/products" className="hover:text-[#D4AF37] transition-colors duration-300">Products</Link>
                </li>
                <li>/</li>
                <li>
                  <Link 
                    to={`/products?category=${product.category.toLowerCase()}`}
                    className="hover:text-[#D4AF37] transition-colors duration-300"
                  >
                    {product.category}
                  </Link>
                </li>
              </ol>
            </nav>
            
            <h1 className="text-3xl font-serif text-gray-900 mb-2">{product.name}</h1>
            
            <div className="flex items-center space-x-2 mb-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={16} 
                    className={i < product.rating ? 'text-[#D4AF37] fill-[#D4AF37]' : 'text-gray-300'} 
                  />
                ))}
              </div>
              <span className="text-sm text-gray-500">({product.reviews} reviews)</span>
            </div>
            
            <div className="mb-6">
              {product.discount > 0 ? (
                <div className="flex items-center space-x-3">
                  <span className="text-2xl font-semibold text-gray-900">
                    ${(product.price * (1 - product.discount / 100)).toFixed(2)}
                  </span>
                  <span className="text-xl text-gray-500 line-through">
                    ${product.price.toFixed(2)}
                  </span>
                </div>
              ) : (
                <span className="text-2xl font-semibold text-gray-900">
                  ${product.price.toFixed(2)}
                </span>
              )}
            </div>
            
            <div className="border-t border-b border-gray-200 py-6 mb-6">
              <p className="text-gray-700 mb-4">{product.description}</p>
              
              <div className="flex items-center space-x-2 mb-2">
                <span className="font-medium text-gray-900">Material:</span>
                <span className="text-gray-700">{product.material}</span>
              </div>
              
              {product.gemstone && (
                <div className="flex items-center space-x-2 mb-2">
                  <span className="font-medium text-gray-900">Gemstone:</span>
                  <span className="text-gray-700">{product.gemstone}</span>
                </div>
              )}
              
              <div className="flex items-center space-x-2">
                <span className="font-medium text-gray-900">Availability:</span>
                <span className={`${product.inStock ? 'text-green-600' : 'text-red-600'}`}>
                  {product.inStock ? 'In Stock' : 'Out of Stock'}
                </span>
              </div>
            </div>
            
            <div className="mb-8">
              <div className="flex items-center space-x-4 mb-6">
                <div className="flex items-center border border-gray-300 rounded-md">
                  <button 
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3 py-2 text-gray-600 hover:text-gray-900 focus:outline-none"
                    disabled={quantity <= 1}
                  >
                    <Minus size={18} />
                  </button>
                  <span className="px-4 py-2 text-gray-900 font-medium w-12 text-center">
                    {quantity}
                  </span>
                  <button 
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-3 py-2 text-gray-600 hover:text-gray-900 focus:outline-none"
                  >
                    <Plus size={18} />
                  </button>
                </div>
                
                <button 
                  onClick={() => addToCart(product, quantity)}
                  className="flex-1 px-6 py-3 bg-[#14213D] text-white font-medium rounded-md hover:bg-[#0c1629] transition-colors duration-300 flex items-center justify-center space-x-2"
                  disabled={!product.inStock}
                >
                  <ShoppingBag size={18} />
                  <span>Add to Cart</span>
                </button>
                
                <button 
                  className="px-3 py-3 border border-gray-300 rounded-md text-gray-700 hover:text-[#D4AF37] hover:border-[#D4AF37] transition-colors duration-300"
                  aria-label="Add to wishlist"
                >
                  <Heart size={18} />
                </button>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-md">
                <Truck className="text-[#D4AF37]" size={20} />
                <div>
                  <h4 className="font-medium text-sm">Free Shipping</h4>
                  <p className="text-xs text-gray-500">On all orders over $100</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-md">
                <RefreshCw className="text-[#D4AF37]" size={20} />
                <div>
                  <h4 className="font-medium text-sm">30-Day Returns</h4>
                  <p className="text-xs text-gray-500">Hassle-free returns</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-md">
                <Shield className="text-[#D4AF37]" size={20} />
                <div>
                  <h4 className="font-medium text-sm">1-Year Warranty</h4>
                  <p className="text-xs text-gray-500">Guaranteed quality</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Related Products */}
        <div className="mt-16">
          <h2 className="text-2xl font-serif mb-8">You May Also Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Show 4 products from the same category */}
            {/* This would use the useProducts hook to get related products */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;