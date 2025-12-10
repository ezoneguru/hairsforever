import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h4 className="text-xl mb-4">HairsForever</h4>
            <p className="text-gray-400">
              Transforming lives through expert hair restoration solutions since 2019.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#services" className="hover:text-amber-400 transition-colors">Services</a></li>
              <li><a href="#about" className="hover:text-amber-400 transition-colors">About Us</a></li>
              <li><a href="#gallery" className="hover:text-amber-400 transition-colors">Gallery</a></li>
              <li><a href="#testimonials" className="hover:text-amber-400 transition-colors">Testimonials</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Custom Hair Patches</li>
              <li>Consultations</li>
              <li>Maintenance & Care</li>
              <li>Styling Services</li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-xl mb-4">Connect With Us</h4>
            <div className="flex gap-4 mb-4">
              <a href="#" className="hover:text-amber-400 transition-colors">
                <Facebook size={24} />
              </a>
              <a href="#" className="hover:text-amber-400 transition-colors">
                <Instagram size={24} />
              </a>
              <a href="#" className="hover:text-amber-400 transition-colors">
                <Twitter size={24} />
              </a>
              <a href="#" className="hover:text-amber-400 transition-colors">
                <Linkedin size={24} />
              </a>
            </div>
            <p className="text-gray-400 text-sm">
              Follow us for tips, updates, and success stories.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400 text-sm">
            <div>
              © 2025 HairsForever. All rights reserved.
            </div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-amber-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-amber-400 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-amber-400 transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
