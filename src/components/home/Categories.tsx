import React from 'react';
import { Link } from 'react-router-dom';

const categories = [
  {
    id: 'rings',
    name: 'Rings',
    image: 'https://images.pexels.com/photos/9428834/pexels-photo-9428834.jpeg',
    count: 42
  },
  {
    id: 'necklaces',
    name: 'Necklaces',
    image: 'https://images.pexels.com/photos/10917030/pexels-photo-10917030.jpeg',
    count: 38
  },
  {
    id: 'earrings',
    name: 'Earrings',
    image: 'https://images.pexels.com/photos/8100457/pexels-photo-8100457.jpeg',
    count: 31
  },
  {
    id: 'bracelets',
    name: 'Bracelets',
    image: 'https://images.pexels.com/photos/1191531/pexels-photo-1191531.jpeg',
    count: 27
  }
];

const Categories: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif mb-4 text-gray-900">Browse by Category</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our curated collections, each offering a unique expression of elegance and craftsmanship.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map(category => (
            <Link 
              key={category.id}
              to={`/products?category=${category.id}`}
              className="group overflow-hidden rounded-lg shadow-md relative h-80 transition-transform duration-300 hover:-translate-y-2"
            >
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${category.image})` }}
              >
                <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-20 transition-opacity duration-300"></div>
              </div>
              
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <h3 className="text-white text-2xl font-serif mb-2">{category.name}</h3>
                <p className="text-white text-sm opacity-90">{category.count} products</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;