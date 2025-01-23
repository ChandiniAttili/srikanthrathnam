
import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-blue-900">Contact Us</h2>
        
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <MapPin className="w-8 h-8 text-blue-600" />
              <div>
                <h3 className="font-bold text-lg">Address</h3>
                <p className="text-gray-600">
                  H.NO: 1-16-321, Post office line,<br />
                  Vasundhara college Back side,<br />
                  Petrol Pump area, Kagaznagar,<br />
                  Sirpur-T Consistency,<br />
                  Kumuram Bheem Asifabad District,<br />
                  Telangana-504296
                </p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <Phone className="w-8 h-8 text-blue-600" />
              <div>
                <h3 className="font-bold text-lg">Phone</h3>
                <a href="tel:+919392462636" className="text-blue-600 hover:underline">
                  +91 9848000561
                </a>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <Mail className="w-8 h-8 text-blue-600" />
              <div>
                <h3 className="font-bold text-lg">Email</h3>
                <a href="mailto:srikanthrathnam@gmail.com" className="text-blue-600 hover:underline">
                  srikantrathnam@gmail.com
                </a>
              </div>
            </div>
          </div>
          
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              ></textarea>
            </div>
            
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}