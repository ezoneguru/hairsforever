import { MapPin, Clock, Phone } from 'lucide-react';

export function Location() {
  return (
    <section id="location" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Visit Our <span className="text-amber-500">Clinic</span>
          </h2>
          <p className="text-lg text-gray-600">
            Find us at our convenient location
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Map */}
          <div className="rounded-xl overflow-hidden shadow-lg h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4841.81679525097!2d82.98889039581562!3d25.325273421045864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x483c6ff094fe34cd%3A0x35d29f380c79fa7!2shairs%20forever%20Wig%20house!5e0!3m2!1sen!2sin!4v1765396557337!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Hairs Forever Wig House Location"
            />
          </div>

          {/* Info Cards */}
          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-xl shadow-md">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-amber-100 rounded-lg">
                  <MapPin className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Our Address</h3>
                  <p className="text-gray-600">
                    Hairs Forever Wig House<br />
                    2nd Floor, Englisha Line, S-21/84<br />
                    Near Kisan Phool Mandi<br />
                    Vijay Nagar Colony, Chetganj<br />
                    Varanasi, Uttar Pradesh 221002
                  </p>
                  <a
                    href="https://maps.app.goo.gl/dnBthbTU2yoBHSnVA?g_st=aw"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-3 text-amber-600 hover:text-amber-700 font-medium"
                  >
                    Get Directions →
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl shadow-md">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-amber-100 rounded-lg">
                  <Clock className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Working Hours</h3>
                  <div className="text-gray-600 space-y-1">
                    All Days: 10:00 AM - 7:30 PM
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl shadow-md">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-amber-100 rounded-lg">
                  <Phone className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Contact</h3>
                  <div className="text-gray-600 space-y-1">
                    <p>
                      <a href="tel:+919559559816" className="hover:text-amber-600">
                        +91 9559559816
                      </a>
                    </p>
                    <p>
                      <a href="mailto:info@hairsforever.com" className="hover:text-amber-600">
                        info@hairsforever.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
