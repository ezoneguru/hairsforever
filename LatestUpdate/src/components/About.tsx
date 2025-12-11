import { Award, Heart, Target } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const stats = [
  { number: '5+', label: 'Years Experience' },
  { number: '5000+', label: 'Happy Clients' },
  { number: '98%', label: 'Satisfaction Rate' },
  { number: '20+', label: 'Expert Specialists' }
];

const values = [
  {
    icon: Award,
    title: 'Excellence',
    description: 'Committed to delivering the highest quality hair patch solutions using premium materials.'
  },
  {
    icon: Heart,
    title: 'Care',
    description: 'We understand the emotional impact of hair loss and provide compassionate, personalized service.'
  },
  {
    icon: Target,
    title: 'Precision',
    description: 'Attention to detail in every patch, ensuring natural-looking results that exceed expectations.'
  }
];

export function About() {
  return (
    <section id="about" className="py-20 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-4xl lg:text-5xl mb-6">About HairsForever</h2>
            <p className="text-xl text-gray-600 mb-6">
              For over 5 years, we have been the trusted name in hair restoration, helping thousands of individuals regain their confidence and transform their lives.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Our team of certified specialists combines cutting-edge techniques with personalized care to deliver natural-looking hair patches that seamlessly blend with your existing hair. We believe everyone deserves to feel confident and comfortable in their own skin.
            </p>
            <button className="px-8 py-4 bg-amber-500 text-white hover:bg-amber-600 transition-colors">
              Learn More About Us
            </button>
          </div>
          <div className="relative h-[500px]">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1758202292826-c40e172eed1c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwY2xpbmljJTIwbW9kZXJufGVufDF8fHx8MTc2NTI5ODAwNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Modern Clinic Interior"
              className="w-full h-full object-cover shadow-2xl"
            />
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-5xl text-amber-500 mb-2">{stat.number}</div>
              <div className="text-lg text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Values */}
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-amber-500 flex items-center justify-center mx-auto mb-4">
                <value.icon size={32} className="text-white" />
              </div>
              <h3 className="text-2xl mb-4">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
