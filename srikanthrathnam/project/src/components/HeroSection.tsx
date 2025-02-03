
import { useState, useEffect } from "react";

// Images from the public folder
const images = [
  {
    src: "/img15.jpeg",
  },
  {
    src: "/img21.jpeg",
  },
  {
    src: "/img13.jpeg",
  },
  {
    src: "/img14.jpeg",
  },
  {
    src: "/img11.jpeg",
  },
  {
    src: "/img16.jpeg",
  },
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
    <section
      id="home"
      className="pt-20 min-h-screen flex flex-col items-center bg-white"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Side Content */}
          <div className="lg:w-1/2 text-gray-800">
            <h1 className="text-4xl font-bold mb-6 text-green-600">
              Srikanth Rathnam
            </h1>
            <p className="text-lg leading-relaxed mb-6">
              Srikanth Rathnam is the founder and chairman of Bheem Society
              Private Limited and Avanthi Facility Management Services Private
              Limited. Additionally, he serves as the state convenor for the SC
              department. Srikanth has always been committed to societal
              well-being and development. Under his leadership, Bheem Society
              and Avanthi Facility Management Services have provided various
              services, empowering communities and offering solutions to
              challenges in society. His extensive experience in leadership
              roles has helped him create platforms for community growth. He
              aims to bring together individuals and organizations to work
              towards social empowerment. With a strong commitment to societal
              service, Srikanth Rathnam strives to contribute positively and
              pave the way for a better future.
            </p>
          </div>

          {/* Right Side Image Carousel */}
          <div className="lg:w-1/2 relative mb-6">
            <div className="w-full max-w-[550px] aspect-square mx-auto rounded-lg border-4 border-red-500 shadow-lg overflow-hidden relative">
              {images.map((image, index) => (
                <img
                  key={index}
                  src={image.src}
                  alt={`Image ${index + 1}`}
                  className={`w-full h-full object-cover object-center transition-opacity duration-1000 absolute top-0 left-0 ${
                    index === currentImage ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Image Grid */}
        <section id="gallery" className="py-12 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-16 text-blue-900">
              Image Gallery
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {images.slice(0, 6).map((img, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow overflow-hidden"
                >
                  <img
                    src={img.src}
                    alt={`Gallery Image ${index + 1}`}
                    className="w-full aspect-square object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
