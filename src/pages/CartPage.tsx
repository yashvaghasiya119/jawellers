import React from 'react';
import { Link } from 'react-router-dom';
import { Trash2, ArrowRight, RefreshCw } from 'lucide-react';
import { useCart } from '../hooks/useCart';

const CartPage: React.FC = () => {
  const { cartItems, removeFromCart, updateCartItemQuantity, clearCart } = useCart();
  
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * (1 - item.discount / 100) * item.quantity, 
    0
  );
  
  const shipping = subtotal > 100 ? 0 : 10;
  const total = subtotal + shipping;
  
  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen pt-24 pb-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-serif text-gray-900 mb-8">Your Cart</h1>
          
          <div className="bg-white rounded-lg shadow-sm p-8 text-center">
            <div className="mb-6">
              <div className="bg-gray-100 inline-flex p-6 rounded-full mb-4">
                <ShoppingBag size={32} className="text-gray-400" />
              </div>
              <h2 className="text-2xl font-medium mb-2">Your cart is empty</h2>
              <p className="text-gray-600 mb-6">
                Looks like you haven't added any jewelry to your cart yet.
              </p>
              <Link 
                to="/products" 
                className="inline-block px-8 py-3 bg-[#D4AF37] text-white rounded-md hover:bg-[#B8860B] transition-colors duration-300 font-medium"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen pt-24 pb-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-serif text-gray-900 mb-8">Your Cart</h1>
        
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-2/3">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="hidden md:grid grid-cols-5 bg-gray-50 p-4 border-b">
                <div className="col-span-2">
                  <span className="font-medium">Product</span>
                </div>
                <div className="text-center">
                  <span className="font-medium">Price</span>
                </div>
                <div className="text-center">
                  <span className="font-medium">Quantity</span>
                </div>
                <div className="text-center">
                  <span className="font-medium">Total</span>
                </div>
              </div>
              
              {cartItems.map((item) => (
                <div key={item.id} className="border-b last:border-b-0 p-4">
                  <div className="md:grid md:grid-cols-5 items-center">
                    <div className="flex items-center col-span-2 mb-4 md:mb-0">
                      <div className="w-20 h-20 bg-gray-100 rounded-md overflow-hidden mr-4">
                        <img 
                          src={item.images[0]} 
                          alt={item.name} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900">
                          <Link to={`/products/${item.id}`} className="hover:text-[#D4AF37] transition-colors duration-300">
                            {item.name}
                          </Link>
                        </h3>
                        <p className="text-sm text-gray-500">{item.category}</p>
                      </div>
                    </div>
                    
                    <div className="text-center mb-4 md:mb-0">
                      <span className="md:hidden font-medium mr-2">Price:</span>
                      {item.discount > 0 ? (
                        <div className="flex flex-col">
                          <span className="font-medium">
                            ${(item.price * (1 - item.discount / 100)).toFixed(2)}
                          </span>
                          <span className="text-sm text-gray-500 line-through">
                            ${item.price.toFixed(2)}
                          </span>
                        </div>
                      ) : (
                        <span className="font-medium">
                          ${item.price.toFixed(2)}
                        </span>
                      )}
                    </div>
                    
                    <div className="flex justify-center mb-4 md:mb-0">
                      <span className="md:hidden font-medium mr-2">Quantity:</span>
                      <div className="flex items-center border border-gray-300 rounded-md">
                        <button 
                          onClick={() => updateCartItemQuantity(item.id, Math.max(1, item.quantity - 1))}
                          className="px-2 py-1 text-gray-600 hover:text-gray-900"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="px-2 py-1 text-gray-900 w-8 text-center">
                          {item.quantity}
                        </span>
                        <button 
                          onClick={() => updateCartItemQuantity(item.id, item.quantity + 1)}
                          className="px-2 py-1 text-gray-600 hover:text-gray-900"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                    </div>
                    
                    <div className="text-center mb-4 md:mb-0">
                      <span className="md:hidden font-medium mr-2">Total:</span>
                      <span className="font-medium">
                        ${((item.price * (1 - item.discount / 100)) * item.quantity).toFixed(2)}
                      </span>
                    </div>
                    
                    <div className="flex justify-end md:justify-center">
                      <button 
                        onClick={() => removeFromCart(item.id)}
                        className="text-gray-500 hover:text-red-500 transition-colors duration-300"
                        aria-label={`Remove ${item.name} from cart`}
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
              
              <div className="p-4 flex justify-between items-center bg-gray-50">
                <button 
                  onClick={clearCart}
                  className="text-sm text-gray-600 hover:text-red-500 transition-colors duration-300 flex items-center"
                >
                  <Trash2 size={14} className="mr-1" />
                  Clear Cart
                </button>
                
                <Link 
                  to="/products" 
                  className="text-sm text-gray-600 hover:text-[#D4AF37] transition-colors duration-300 flex items-center"
                >
                  <RefreshCw size={14} className="mr-1" />
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/3">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-medium mb-6">Order Summary</h2>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-medium">${subtotal.toFixed(2)}</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  {shipping === 0 ? (
                    <span className="text-green-600">Free</span>
                  ) : (
                    <span className="font-medium">${shipping.toFixed(2)}</span>
                  )}
                </div>
                
                <div className="border-t border-gray-200 pt-4 flex justify-between">
                  <span className="font-medium">Total</span>
                  <span className="font-semibold text-xl">${total.toFixed(2)}</span>
                </div>
              </div>
              
              <div className="mb-6">
                <p className="text-sm text-gray-500 mb-2">
                  Free shipping on all orders over $100
                </p>
                {subtotal < 100 && (
                  <p className="text-sm text-[#D4AF37]">
                    Add ${(100 - subtotal).toFixed(2)} more to qualify for free shipping
                  </p>
                )}
              </div>
              
              <button className="w-full py-3 bg-[#14213D] text-white font-medium rounded-md hover:bg-[#0c1629] transition-colors duration-300 flex items-center justify-center space-x-2">
                <span>Proceed to Checkout</span>
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;