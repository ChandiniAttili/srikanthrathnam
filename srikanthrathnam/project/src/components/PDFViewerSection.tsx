
import { FileText } from 'lucide-react';

const documents = [
  {
    title: 'Srikanth Profile',
    src: '/Srikanthprofile.pdf',
  },
  {
    title: 'Srikanth Letter',
    src: '/Srikanthletter.pdf',
  },
];

const images = [
  {
    src: '/v1.jpeg',
  },
  {
    src: '/v2.jpeg',
  },
  {
    src: '/v3.jpeg',
  },
  {
    src: '/v4.jpeg',
  },
  {
    src: '/v5.jpeg',
  },
  {
    src: '/v1.jpeg',
  },
];

export default function PDFViewerSection() {
  return (
    <div>
      {/* Documents Section */}
      <section id="documents" className="py-12 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-16 text-blue-900">PDF View</h2>
          
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
            {documents.map((doc, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-blue-100 rounded-full">
                    <FileText className="w-6 h-6 text-blue-900" />
                  </div>
                  <h3 className="text-lg font-bold text-blue-900">{doc.title}</h3>
                </div>
                <a
                  href={doc.src}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-full text-center bg-blue-900 text-white py-2 px-4 rounded-lg hover:bg-blue-800 transition-colors"
                >
                  View Document
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Gallery Section */}
      <section id="gallery" className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-16 text-blue-900">Image Gallery</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {images.map((img, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
                <img 
                  src={img.src}
                  alt={`Gallery Image ${index + 1}`}
                  className="w-full h-64 object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}