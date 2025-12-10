import { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sandeep Kumar',
    rating: 5,
    date: 'July 2025',
    text: 'Superb service with a very natural hair patch look. Quality is excellent and this is honestly the best place in Varanasi if you want a great appearance in a budget-friendly range.',
  },
  {
    id: 2,
    name: 'Rahul Verma',
    rating: 5,
    text: 'I was nervous before the procedure but the team explained everything patiently. The result looks completely natural and no one can tell I\'m wearing a patch.',
  },
  {
    id: 3,
    name: 'Amit Mishra',
    rating: 5,
    text: 'Comfortable to wear all day, even in the Varanasi heat. Maintenance service is also quick and professional.',
  },
  {
    id: 4,
    name: 'Mohit Srivastava',
    rating: 5,
    text: 'Staff behaviour is very humble and the styling they did after fixing the patch changed my overall personality. Highly recommended.',
  }
];

export function Testimonials() {
  // We need to duplicate the items for the infinite scroll effect
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section id="testimonials" className="content-overlay py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-24">
            <div className="text-center mb-16">
                <h2 className="text-4xl lg:text-5xl mb-4">Client <span className="text-amber-500">Testimonials</span> </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">Hear what our clients say about their experience</p>
            </div>
        </div>
        <div className="scroller" data-speed="slow" data-animated="true">
            <ul className="scroller__inner">
                {duplicatedTestimonials.map((testimonial, index) => (
                    <li key={`${testimonial.id}-${index}`} className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 w-[300px] flex-shrink-0">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-16 h-16 min-w-[4rem] min-h-[4rem] rounded-full bg-gray-100 flex items-center justify-center text-gray-500 overflow-hidden flex-shrink-0 aspect-square border border-gray-100">
                                <span className="text-xl font-bold">{testimonial.name.charAt(0)}</span>
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-900 text-sm">{testimonial.name}</h4>
                                <p className="text-gray-500 text-xs">{testimonial.date || 'Client'}</p>
                            </div>
                        </div>
                        <p className="text-gray-600 italic mb-4 text-sm leading-relaxed">"{testimonial.text}"</p>
                        <div className="flex text-yellow-500 gap-1">
                            ⭐ ⭐ ⭐ ⭐ ⭐
                        </div>
                    </li>
                ))}
            </ul>
        </div>
        
        <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-24 mt-16">
            <hr className="border-gray-200 mb-12" />
            <div className="grid md:grid-cols-3 gap-8 text-center contents-center">
                <div className="p-4">
                    <div className="text-4xl mb-4">⭐</div>
                    <div className="text-4xl font-bold text-gray-900 mb-2">4.9/5</div>
                    <div className="text-gray-600">Average Rating</div>
                </div>
                <div className="p-4">
                    <div className="text-4xl mb-4">✓</div>
                    <div className="text-4xl font-bold text-gray-900 mb-2">100%</div>
                    <div className="text-gray-600">Verified Reviews</div>
                </div>
                <div className="p-4">
                    <div className="text-4xl mb-4">🏆</div>
                    <div className="text-4xl font-bold text-gray-900 mb-2">#1</div>
                    <div className="text-gray-600">In Varanasi</div>
                </div>
            </div>
        </div>
    </section>
  );
}
