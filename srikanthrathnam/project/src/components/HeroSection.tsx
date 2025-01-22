import { useState, useEffect } from 'react';

// Images from the public folder
const images = [
  '/public/img11.jpeg',
  '/public/img21.jpeg',
  '/public/img13.jpeg',
  '/public/img14.jpeg',
  '/public/img15.jpeg',
  '/public/img16.jpeg',
];

export default function HeroSection() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="pt-20 min-h-screen flex flex-col items-center bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Side Content */}
          <div className="lg:w-1/2 text-gray-800">
            <h1 className="text-4xl font-bold mb-6 color-Green">
              Srikanth Rathnam
            </h1>
            <p className="text-lg leading-relaxed mb-6">
              Srikanth Rathnam is the founder and chairman of Bheem Society Private Limited and Avanthi Facility Management Services Private Limited. 
              Additionally, he serves as the state convenor for the SC department. Srikanth has always been committed to societal well-being and development. 
              Under his leadership, Bheem Society and Avanthi Facility Management Services have provided various services, empowering communities and offering solutions to challenges in society. 
              His extensive experience in leadership roles has helped him create platforms for community growth. 
              He aims to bring together individuals and organizations to work towards social empowerment. With a strong commitment to societal service, Srikanth Rathnam strives to contribute positively and pave the way for a better future.
            </p>
          </div>

          {/* Right Side Image Carousel */}
          <div className="lg:w-1/2 relative mb-6">
            <div className="w-[600px] h-[600px] mx-auto rounded-lg shadow-lg overflow-hidden">
              {images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Image ${index + 1}`}
                  className={`w-full h-full object-cover object-center transition-opacity duration-1000 absolute top-0 left-0 ${index === currentImage ? 'opacity-100' : 'opacity-0'}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div key={index} className="relative w-full h-[300px]">
              <img
                src={image}
                alt={`Additional Image ${index + 1}`}
                className="w-full h-full object-cover object-center rounded-lg shadow-md"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

