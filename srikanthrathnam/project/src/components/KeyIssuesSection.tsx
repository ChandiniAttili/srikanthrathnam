import { useState, useEffect } from 'react';
import { GraduationCap, Heart, Building2, Shield, TreePine, Users } from 'lucide-react';

const issues = [
  {
    title: 'Education Reform',
    description: 'Modernizing our education system and ensuring equal access to quality education for all.',
    Icon: GraduationCap,
  },
  {
    title: 'Healthcare Access',
    description: 'Improving healthcare infrastructure and making quality medical care affordable and accessible.',
    Icon: Heart,
  },
  {
    title: 'Infrastructure Development',
    description: 'Investing in sustainable infrastructure to support our growing community needs.',
    Icon: Building2,
  },
  {
    title: 'Public Safety',
    description: 'Strengthening community safety measures and emergency response systems.',
    Icon: Shield,
  },
  {
    title: 'Environmental Protection',
    description: 'Implementing green policies and promoting sustainable development practices.',
    Icon: TreePine,
  },
  {
    title: 'Social Welfare',
    description: 'Supporting vulnerable communities and ensuring inclusive growth for all citizens.',
    Icon: Users,
  },
];

const images = [
  '/img1.jpg',
  '/imge2.jpg',
  '/img4.jpg',
  '/img5.jpg',
  '/img6.jpg',
  '/img7.jpg',
];

export default function KeyIssuesSection() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="key-issues" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-blue-900">Key Issues</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {issues.map((issue, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-blue-100 rounded-full">
                  <issue.Icon className="w-6 h-6 text-blue-900" />
                </div>
                <h3 className="text-xl font-bold text-blue-900">{issue.title}</h3>
              </div>
              <p className="text-gray-700">{issue.description}</p>
            </div>
          ))}
        </div>

        {/* Image Slider Below the Key Issues */}
        <div className="relative w-full h-[400px] rounded-lg overflow-hidden">
          <img
            src={images[currentImage]}
            alt="Key Issue Image"
            className="w-full h-full object-cover transition-opacity duration-1000"
          />
        </div>
      </div>
    </section>
  );
}
