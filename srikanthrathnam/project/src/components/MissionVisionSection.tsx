import { Target, Eye } from 'lucide-react';

const images = [
  { src: '/m1.jpeg' },
  { src: '/m2.jpeg' },
  { src: '/m3.jpeg' },
  { src: '/m4.jpeg' },
  { src: '/m5.jpeg' },
  { src: '/m6.jpeg' },
  { src: '/m7.jpeg' },
  { src: '/m8.jpeg' },
  { src: '/m9.jpeg' },
  { src: '/m10.jpeg' },
  { src: '/m11.jpeg' },
  { src: '/m12.jpeg' },
  { src: '/s1.jpeg' },
  { src: '/s2.jpeg' },
  { src: '/s4.jpeg' },
  { src: '/s5.jpeg' },
  { src: '/s6.jpeg' },
  { src: '/s7.jpeg' },
  { src: '/s8.jpeg' },
  { src: '/s9.jpeg' },
  { src: '/s10.jpeg' },
  
];

export default function MissionVisionSection() {
  return (
    <section id="mission-vision" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Mission & Vision Header */}
        <h2 className="text-4xl font-bold text-center mb-16 text-blue-900">Mission & Vision</h2>

        {/* Mission and Vision Cards */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Mission */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-blue-100 rounded-full">
                <Target className="w-8 h-8 text-blue-900" />
              </div>
              <h3 className="text-2xl font-bold text-blue-900">Our Mission</h3>
            </div>
            <p className="text-gray-700">
              To create positive change through effective governance, transparent leadership, and
              community-driven initiatives that improve the quality of life for all citizens. We are
              committed to building a more inclusive, sustainable, and prosperous society through
              progressive policies and grassroots engagement.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-blue-100 rounded-full">
                <Eye className="w-8 h-8 text-blue-900" />
              </div>
              <h3 className="text-2xl font-bold text-blue-900">Our Vision</h3>
            </div>
            <p className="text-gray-700">
              To establish a model of governance that prioritizes economic growth, environmental
              sustainability, and social justice. We envision a future where every citizen has
              access to quality education, healthcare, and opportunities for advancement, supported
              by strong infrastructure and innovative policies.
            </p>
          </div>
        </div>

        {/* Gallery */}
        <h3 className="text-3xl font-bold text-center mb-12 text-blue-900">Gallery</h3>

        {/* Image Gallery Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((img, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow overflow-hidden"
            >
              <img
                src={img.src}
                alt={`Gallery Image ${index + 1}`}
                className="w-full h-64 object-contain" // Ensures the full image, including faces, is visible
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
