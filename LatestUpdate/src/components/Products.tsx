import { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ChevronDown, ChevronUp } from 'lucide-react';

// Import local images
import patch1 from '../assets/images/patches/patch-1.jpg';
import patch2 from '../assets/images/patches/patch-2.jpg';
import patch3 from '../assets/images/patches/patch-3.jpg';
import product1 from '../assets/images/products/product-1.jpg';

const productItems = [
  { id: 1, image: patch1, title: 'Premium Hair Patch 1' },
  { id: 2, image: patch2, title: 'Premium Hair Patch 2' },
  { id: 3, image: patch3, title: 'Premium Hair Patch 3' },
  { id: 4, image: product1, title: 'Hair Care Product' }
];

export function Products() {
  const [showAll, setShowAll] = useState(false);
  
  // Show 3 items initially, or all if showAll is true
  const displayedItems = showAll ? productItems : productItems.slice(0, 3);

  return (
    <section id="products" className="py-20 px-6 lg:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl mb-4">Our Hair Patches and Products</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Premium quality hair systems and care products for natural looking results
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {displayedItems.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:-translate-y-1 hover:shadow-xl border border-gray-100 h-full flex flex-col">
              <div className="relative w-full aspect-[4/3]">
                <ImageWithFallback
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 text-center flex-grow flex items-center justify-center">
                <h3 className="text-xl text-gray-800 truncate w-full">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* Show More Button - Only if more than 3 items */}
        {productItems.length > 3 && (
          <div className="text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 px-8 py-3 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition-colors font-semibold"
            >
              {showAll ? (
                <>
                  Show Less <ChevronUp size={20} />
                </>
              ) : (
                <>
                  Show More <ChevronDown size={20} />
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
