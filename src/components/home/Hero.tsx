import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const slides = [
  {
    id: 1,
    image: 'https://images.pexels.com/photos/9428948/pexels-photo-9428948.jpeg',
    title: 'Timeless Elegance',
    subtitle: 'Discover our exclusive collection of handcrafted jewelry',
    cta: 'Shop Now',
    link: '/products'
  },
  {
    id: 2,
    image: 'https://images.pexels.com/photos/8100371/pexels-photo-8100371.jpeg',
    title: 'Luxury Redefined',
    subtitle: 'Exquisite pieces that celebrate life\'s special moments',
    cta: 'View Collection',
    link: '/products?category=necklaces'
  },
  {
    id: 3,
    image: 'https://images.pexels.com/photos/5442447/pexels-photo-5442447.jpeg',
    title: 'Eternal Brilliance',
    subtitle: 'Unique designs with ethically sourced gemstones',
    cta: 'Explore',
    link: '/products?category=rings'
  }
];

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <section className="relative h-screen overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
            currentSlide === index ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div 
            className="absolute inset-0 bg-center bg-cover"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          </div>
          
          <div className="relative h-full flex items-center">
            <div className="container mx-auto px-4">
              <div className="max-w-lg text-white">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-4 animate-fadeIn">
                  {slide.title}
                </h1>
                <p className="text-xl opacity-90 mb-8 animate-fadeIn animation-delay-200">
                  {slide.subtitle}
                </p>
                <Link
                  to={slide.link}
                  className="inline-block px-8 py-3 border-2 border-[#D4AF37] bg-[#D4AF37] text-white font-medium rounded-md hover:bg-transparent hover:text-white transition-colors duration-300 animate-fadeIn animation-delay-400"
                >
                  {slide.cta}
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
      
      <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentSlide === index 
                ? 'bg-[#D4AF37] w-10' 
                : 'bg-white bg-opacity-50 hover:bg-opacity-70'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;