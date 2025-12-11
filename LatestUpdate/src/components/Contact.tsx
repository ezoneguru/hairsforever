import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-20 px-6 lg:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl mb-4">Get In Touch</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Schedule your free consultation today and take the first step towards renewed confidence
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white p-8 shadow-lg">
            <h3 className="text-2xl mb-6">Book Your Free Consultation</h3>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block mb-2 text-gray-700">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-amber-500"
                  placeholder="John Doe"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block mb-2 text-gray-700">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-amber-500"
                  placeholder="john@example.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="phone" className="block mb-2 text-gray-700">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-amber-500"
                  placeholder="+1 (234) 567-890"
                  required
                />
              </div>

              <div>
                <label htmlFor="service" className="block mb-2 text-gray-700">
                  Interested Service
                </label>
                <select
                  id="service"
                  className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-amber-500"
                >
                  <option>Select a service</option>
                  <option>Custom Hair Patch</option>
                  <option>Consultation</option>
                  <option>Maintenance Service</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block mb-2 text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-amber-500"
                  placeholder="Tell us about your concerns or questions..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-amber-500 text-white hover:bg-amber-600 transition-colors"
              >
                Submit Request
              </button>

              <p className="text-sm text-gray-500">
                * We respect your privacy. Your information will be kept confidential.
              </p>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white p-8 shadow-lg">
              <h3 className="text-2xl mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <MapPin className="text-amber-500 flex-shrink-0" size={24} />
                  <div>
                    <div className="mb-1">Visit Us</div>
                    <p className="text-gray-600">
                      Hairs Forever Wig House,
                      2nd Floor, Englisha Line, S-21/84,
                      Near Kisan Phool Mandi,
                      Vijay Nagar Colony, Chetganj,
                      Varanasi, Uttar Pradesh 221002
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Phone className="text-amber-500 flex-shrink-0" size={24} />
                  <div>
                    <div className="mb-1">Call Us</div>
                    <a href="tel:+919559559816" className="text-gray-600 hover:text-amber-500">
                      +91 9559559816
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Mail className="text-amber-500 flex-shrink-0" size={24} />
                  <div>
                    <div className="mb-1">Email Us</div>
                    <a href="mailto:info@hairrevive.com" className="text-gray-600 hover:text-amber-500">
                      info@hairrevive.com
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Clock className="text-amber-500 flex-shrink-0" size={24} />
                  <div>
                    <div className="mb-1">Working Hours</div>
                    <div className="text-gray-600">
                      All Days: 10:00 AM - 7:30 PM
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Emergency Contact */}
            <div className="bg-amber-500 text-white p-8">
              <h3 className="text-2xl mb-4">Need Immediate Assistance?</h3>
              <p className="mb-6">
                Our customer support team is available to answer your questions and schedule urgent appointments.
              </p>
              <a
                href="tel:+919559559816"
                className="inline-block px-8 py-4 bg-white text-amber-500 hover:bg-gray-100 transition-colors"
              >
                Call Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
