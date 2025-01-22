import { FileText } from 'lucide-react';

const documents = [
  {
    title: 'Srikanth Profile',
    src: '/Srikanthprofile.pdf', // Path for your local PDF
  },
  {
    title: 'Srikanth Letter',
    src: '/Srikanthletter.pdf', // Path for your local PDF
 
  },
];

const images = [
  {
    src: '/v1.jpeg', // Local image in public/images folder
  },
  {

    src: '/v2.jpeg', // Local image in public/images folder
  },
  {

    src:'/v3.jpeg', // Local image in public/images folder
  },
  {

    src:'/v4.jpeg', // Local image in public/images folder
  },
  {
  
    src: '/v5.jpeg', // Local image in public/images folder
  },
  {
    
    src:'/v1.jpeg', // Local image in public/images folder
  },
];

export default function PageContent() {
  return (
    <div>
      {/* Documents Section */}
      <section id="documents" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-blue-900">PDF View</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
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
      <section id="images" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-blue-900">Image Gallery</h2>
          
          <div className="grid grid-cols-3 gap-8">
            {images.map((img, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <img 
                  src={img.src} // Path to the image in the public/images folder
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />

              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
