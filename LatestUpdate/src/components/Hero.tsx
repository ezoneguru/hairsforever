import { Phone, Mail } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  return (
    <div className="relative h-screen bg-gray-900" style={{ marginTop: '-72px', paddingTop: '0' }}>
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1761931403667-a6753db21f32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYWlyJTIwc2Fsb24lMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzY1Mjk5MzIwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Hair Patch Clinic"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
      </div>



      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-start justify-center h-[calc(100%-88px)] px-6 lg:px-12 max-w-3xl">
        <h2 className="text-5xl lg:text-7xl text-white mb-6">
          Restore Your Confidence
        </h2>
        <p className="text-xl lg:text-2xl text-gray-200 mb-8">
          Expert hair patch solutions tailored to your unique needs. Natural looking results that transform lives.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a href="#contact" className="px-8 py-4 bg-amber-500 text-white hover:bg-amber-600 transition-colors text-center">
            Book Consultation
          </a>
          <a href="#services" className="px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-black transition-colors text-center">
            View Services
          </a>
        </div>
        <div className="flex flex-col sm:flex-row gap-6 mt-12 text-white">
          <a href="tel:+919559559816" className="flex items-center gap-2 hover:text-amber-400 transition-colors">
            <Phone size={20} />
            <span>+91 9559559816</span>
          </a>
          <a href="mailto:info@hairrevive.com" className="flex items-center gap-2 hover:text-amber-400 transition-colors">
            <Mail size={20} />
            <span>info@hairrevive.com</span>
          </a>
        </div>
      </div>
    </div>
  );
}
