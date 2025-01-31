import { GraduationCap, Heart, Building2, Shield, TreePine, Users } from 'lucide-react';

// Define key issues along with corresponding images
const issues = [
  {
    title: 'Education Reform',
    description: 'Modernizing our education system and ensuring equal access to quality education for all.',
    Icon: GraduationCap,
    image: '/img1.jpg', // Associated image for this issue
  },
  {
    title: 'Healthcare Access',
    description: 'Improving healthcare infrastructure and making quality medical care affordable and accessible.',
    Icon: Heart,
    image: '/im2.jpg',
  },
  {
    title: 'Infrastructure Development',
    description: 'Investing in sustainable infrastructure to support our growing community needs.',
    Icon: Building2,
    image: '/img4.jpg',
  },
  {
    title: 'Public Safety',
    description: 'Strengthening community safety measures and emergency response systems.',
    Icon: Shield,
    image: '/img5.jpg',
  },
  {
    title: 'Environmental Protection',
    description: 'Implementing green policies and promoting sustainable development practices.',
    Icon: TreePine,
    image: '/img6.jpg',
  },
  {
    title: 'Social Welfare',
    description: 'Supporting vulnerable communities and ensuring inclusive growth for all citizens.',
    Icon: Users,
    image: '/img7.jpg',
  },
];

export default function KeyIssuesSection() {
  return (
    <section id="key-issues" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-blue-900">Key Issues</h2>

        {/* Key Issues Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {issues.map((issue, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              {/* Issue Icon and Title */}
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-blue-100 rounded-full">
                  <issue.Icon className="w-6 h-6 text-blue-900" />
                </div>
                <h3 className="text-xl font-bold text-blue-900">{issue.title}</h3>
              </div>

              {/* Issue Description */}
              <p className="text-gray-700 mb-6">{issue.description}</p>

              {/* Issue Image */}
              <div className="relative w-full h-48 rounded-lg overflow-hidden">
                <img
                  src={issue.image}
                  alt={issue.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
