import React, { useState } from 'react';

const NewsletterSubscribe: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would send this to your backend
    setSubscribed(true);
    setEmail('');
  };

  return (
    <section className="bg-[#FAF9F6] py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-serif mb-4 text-gray-900">Subscribe to Our Newsletter</h2>
          <p className="text-gray-600 mb-8">
            Be the first to hear about new collections, exclusive offers, and jewelry care tips.
          </p>
          
          {subscribed ? (
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4 inline-block">
              <p className="text-green-800">
                Thank you for subscribing! You'll receive our next newsletter soon.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row max-w-md mx-auto gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                required
                className="flex-grow px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-[#D4AF37] text-white rounded-md hover:bg-[#B8860B] transition-colors duration-300 font-medium"
              >
                Subscribe
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default NewsletterSubscribe;