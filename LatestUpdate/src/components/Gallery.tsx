import { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ChevronDown, ChevronUp } from 'lucide-react';

// Import local images
import result1 from '../assets/images/gallery/result-1.jpg';
import result2 from '../assets/images/gallery/result-2.jpg';
import result3 from '../assets/images/gallery/result-3.jpg';
import result4 from '../assets/images/gallery/result-4.jpg';
import result5 from '../assets/images/gallery/result-5.jpg';
import result6 from '../assets/images/gallery/result-6.jpg';

const galleryItems = [
  { id: 1, image: result1, title: 'Transformation Case 1' },
  { id: 2, image: result2, title: 'Transformation Case 2' },
  { id: 3, image: result3, title: 'Transformation Case 3' },
  { id: 4, image: result4, title: 'Transformation Case 4' },
  { id: 5, image: result5, title: 'Transformation Case 5' },
  { id: 6, image: result6, title: 'Transformation Case 6' }
];

export function Gallery() {
  const [showAll, setShowAll] = useState(false);
  
  // Show 3 items initially, or all if showAll is true
  const displayedItems = showAll ? galleryItems : galleryItems.slice(0, 3);

  return (
    <section id="gallery" className="py-20 px-6 lg:px-12 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl mb-4">Our Results</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See the life-changing transformations we have achieved for our clients
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {displayedItems.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:-translate-y-1 hover:shadow-xl">
              <div className="relative h-[300px]">
                <ImageWithFallback
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="text-xl text-gray-800">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* Show More Button */}
        {galleryItems.length > 3 && (
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

        {/* Info Box */}
        <div className="mt-16 bg-amber-50 border-l-4 border-amber-500 p-8 max-w-3xl mx-auto">
          <p className="text-lg text-gray-700">
            <span className="italic">Note:</span> Individual results may vary. All images represent actual client results. Photos are used with permission for illustrative purposes.
          </p>
        </div>
      </div>
    </section>
  );
}
