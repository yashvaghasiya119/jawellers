import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="bg-[#14213D] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-serif mb-4">Our Story</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Crafting exquisite jewelry that captures life's most precious moments
          </p>
        </div>
      </div>
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-serif mb-6 text-gray-900">Our Heritage</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Founded in 1998, Lumière has been dedicated to creating jewelry that transcends trends and celebrates the beauty of fine craftsmanship. Our journey began in a small workshop in Paris, where our founder Claudia Beaumont combined her family's legacy of goldsmithing with innovative design.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                For over two decades, we have remained committed to our founding philosophy: that truly exceptional jewelry should not only be beautiful but should tell a story and stand the test of time.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Today, Lumière is recognized worldwide for creating pieces that balance classic elegance with contemporary vision, always with the highest standards of quality and ethical sourcing.
              </p>
            </div>
            <div className="md:w-1/2">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-full h-full border-2 border-[#D4AF37]"></div>
                <img 
                  src="https://images.pexels.com/photos/5370706/pexels-photo-5370706.jpeg" 
                  alt="Jewelry Workshop" 
                  className="relative z-10 w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif mb-4 text-gray-900">Our Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              At the heart of Lumière are the values that guide everything we do, from design to customer experience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-16 h-16 bg-[#D4AF37] bg-opacity-10 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#D4AF37]">
                  <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"></path>
                  <line x1="16" y1="8" x2="2" y2="22"></line>
                  <line x1="17.5" y1="15" x2="9" y2="15"></line>
                </svg>
              </div>
              <h3 className="text-xl font-medium text-center mb-3">Craftsmanship</h3>
              <p className="text-gray-600 text-center">
                We believe in the value of handcrafted jewelry, where each piece receives dedicated attention from our master artisans, ensuring impeccable quality and detail.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-16 h-16 bg-[#D4AF37] bg-opacity-10 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#D4AF37]">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="2" y1="12" x2="22" y2="12"></line>
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-medium text-center mb-3">Sustainability</h3>
              <p className="text-gray-600 text-center">
                We are committed to ethical sourcing, using recycled precious metals and conflict-free gemstones, minimizing our environmental impact while creating jewelry of exceptional beauty.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-16 h-16 bg-[#D4AF37] bg-opacity-10 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#D4AF37]">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <h3 className="text-xl font-medium text-center mb-3">Community</h3>
              <p className="text-gray-600 text-center">
                We support local artisans and communities, preserving traditional jewelry-making techniques while providing fair wages and opportunities for growth.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row-reverse items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-serif mb-6 text-gray-900">Our Artisans</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Behind every Lumière creation is a team of dedicated artisans who bring decades of expertise to their craft. Our jewelers, stone setters, and polishers work together in our atelier, combining traditional techniques with modern innovation.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Many of our master craftspeople have been with us for over fifteen years, passing their knowledge to the next generation through our apprenticeship program. This ensures that the specialized skills required to create truly exceptional jewelry continue to thrive.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We believe that the hands that craft our jewelry are as important as the materials they work with – each piece carries the passion and dedication of the artisan who created it.
              </p>
            </div>
            <div className="md:w-1/2">
              <div className="relative">
                <div className="absolute -top-4 -right-4 w-full h-full border-2 border-[#D4AF37]"></div>
                <img 
                  src="https://images.pexels.com/photos/5370711/pexels-photo-5370711.jpeg" 
                  alt="Jewelry Artisan" 
                  className="relative z-10 w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;