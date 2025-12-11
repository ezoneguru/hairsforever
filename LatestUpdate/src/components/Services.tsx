import { Scissors, Users, Clock, Shield } from 'lucide-react';

const services = [
  {
    icon: Scissors,
    title: 'Custom Hair Patches',
    description: 'Individually crafted hair patches designed to match your natural hair color, texture, and style perfectly.',
    features: ['100% Natural Hair', 'Custom Design', 'Perfect Match']
  },
  {
    icon: Users,
    title: 'Expert Consultation',
    description: 'Personalized consultation with our experienced specialists to find the perfect solution for your needs.',
    features: ['Free Assessment', 'Personalized Plan', 'Expert Advice']
  },
  {
    icon: Clock,
    title: 'Maintenance & Care',
    description: 'Comprehensive aftercare services to ensure your hair patch looks natural and lasts longer.',
    features: ['Regular Upkeep', 'Styling Tips', 'Product Support']
  },
  {
    icon: Shield,
    title: 'Quality Guarantee',
    description: 'We stand behind our work with a satisfaction guarantee and premium quality materials.',
    features: ['Warranty Included', 'Premium Materials', 'Satisfaction Guaranteed']
  }
];

export function Services() {
  return (
    <section id="services" className="py-20 px-6 lg:px-12 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive hair restoration solutions with personalized care and attention to detail
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-amber-500 flex items-center justify-center mb-6">
                <service.icon size={32} className="text-white" />
              </div>
              <h3 className="text-2xl mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-gray-700">
                    <span className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
