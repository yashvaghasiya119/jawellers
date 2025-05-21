import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sophia Anderson',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg',
    role: 'Event Planner',
    stars: 5,
    text: 'The diamond engagement ring I purchased exceeded all expectations. The craftsmanship is impeccable, and the customer service was outstanding from beginning to end.'
  },
  {
    id: 2,
    name: 'Michael Thompson',
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg',
    role: 'Financial Advisor',
    stars: 5,
    text: 'I was looking for the perfect anniversary gift, and Lumière delivered beyond my expectations. My wife absolutely loved her sapphire necklace, and the packaging was exquisite.'
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg',
    role: 'Interior Designer',
    stars: 5,
    text: 'The custom-designed bracelet I ordered was exactly what I envisioned. The attention to detail and quality of materials make Lumière stand out from other jewelry brands.'
  }
];

const Testimonials: React.FC = () => {
  const [current, setCurrent] = useState(0);
  
  const next = () => {
    setCurrent((current + 1) % testimonials.length);
  };
  
  const prev = () => {
    setCurrent((current - 1 + testimonials.length) % testimonials.length);
  };
  
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif mb-4 text-gray-900">What Our Clients Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover why our customers choose Lumière for life's most precious moments.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto relative">
          <div 
            className="overflow-hidden transition-all duration-300"
            style={{ height: '320px' }}
          >
            <div 
              className="transition-transform duration-500 flex"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div 
                  key={testimonial.id} 
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="bg-gray-50 rounded-lg p-8 text-center">
                    <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-4 border-2 border-[#D4AF37]">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    <div className="flex justify-center mb-4">
                      {[...Array(testimonial.stars)].map((_, i) => (
                        <Star key={i} size={16} className="text-[#D4AF37] fill-[#D4AF37]" />
                      ))}
                    </div>
                    
                    <p className="text-gray-600 italic mb-6">"{testimonial.text}"</p>
                    
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-center space-x-2 mt-6">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  current === i 
                    ? 'bg-[#D4AF37] w-10' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
          
          <button 
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-gray-800 hover:text-[#D4AF37] transition-colors duration-300 focus:outline-none"
            aria-label="Previous testimonial"
          >
            <ArrowLeft size={20} />
          </button>
          
          <button 
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-gray-800 hover:text-[#D4AF37] transition-colors duration-300 focus:outline-none"
            aria-label="Next testimonial"
          >
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;