import { Target, Eye } from 'lucide-react';

const images = [
  '/public/m1.jpeg', '/public/m2.jpeg', '/public/m3.jpeg',
  '/public/m4.jpeg', '/public/m5.jpeg', '/public/m6.jpeg',
  '/public/m7.jpeg', '/public/m8.jpeg', '/public/m9.jpeg',
  '/public/m10.jpeg', '/public/m11.jpeg', '/public/m12.jpeg',
];

export default function MissionVisionSection() {
  return (
    <section id="mission-vision" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-blue-900">Mission & Vision</h2>

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
              To create positive change through effective governance, transparent leadership, and community-driven initiatives that improve the quality of life for all citizens. We are committed to building a more inclusive, sustainable, and prosperous society through progressive policies and grassroots engagement.
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
              To establish a model of governance that prioritizes economic growth, environmental sustainability, and social justice. We envision a future where every citizen has access to quality education, healthcare, and opportunities for advancement, supported by strong infrastructure and innovative policies.
            </p>
          </div>
        </div>

        {/* Image Grid Below Mission & Vision */}
        <h3 className="text-3xl font-bold text-center mb-12 text-blue-900">Gallery</h3>
        <div className="grid grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div key={index} className="relative w-full h-[300px]">
              <img
                src={image}
                alt={`Image ${index + 1}`}
                className="w-full h-full object-contain rounded-lg shadow-md bg-gray-100"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
