import { useState, useEffect } from "react";

export default function NewsSection() {
  const updates = [
    {
      src: "/n1.jpeg",
      content:
        "Ratnam Sreekanth has been appointed as the SC Wing Telangana State Convenor by the Telangana Pradesh Congress Committee. He thanked Congress leaders Mallikarjun Kharge and Rahul Gandhi for the trust.",
    },
    {
      src: "/n2.jpeg",
      content:
        "Ratnam Srikant was appointed Telangana State SC Division Convenor by Congress, thanking leaders like Mallikarjun Karge and Rahul Gandhi..",
    },
    {
      src: "/n3.jpeg",
      content:"Ratnam Srikant from Malagurajala village has been appointed as the Telangana State SC Department Convenor. He thanked Congress leaders for their support in achieving this position."
    },
    {
      src: "/n4.jpeg",
      content:"MLC Dandepu Vital congratulated Ratnam Srikant, appointed as the Telangana State SC Wing Convenor by TPCC leadership."
    },
    {
      src: "/n5.jpeg",
      content:"MLC Dande Vithal congratulated Ratnam Srikant, who has been appointed as the Telangana State SC Wing Convenor by the TPCC. The appointment order was handed over to Srikant by SC Wing Chairman Preetham."
    },
    {
      src: "/n6.jpeg",
      content:"MLC Dandepu Vital congratulated Ratnam Srikant, appointed as the Telangana State SC Wing Convenor by TPCC leadership."

    },
    {
      src: "/n01.jpeg",
      content:"A free training program for women was launched in Sanpoor (Srirampur), Mancherial district, under the auspices of the Blaze Men Welfare Society. The program offers courses in stitching, tailoring, fashion designing, and beautician skills to help women become self-employed. Local officials and dignitaries attended and supported the initiative."

    },
    {
      src: "/n02.jpeg",
      content:"On February 6, the District Employment Officer, Venkataramana, emphasized that women would benefit from self-employment opportunities through stitching training. The vocational training courses, organized by the Blaze Men Welfare Society, were inaugurated in Naspur Colony. Local leaders, including Counselor Agalu Duty Raju, former MPTC Penchala Srilatha, and others, attended the event to support the initiative."
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % updates.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(timer);
  }, [updates.length]);

  return (
    <section id="news" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
          Latest Updates
        </h2>
        <div className="flex flex-col lg:flex-row items-center gap-8">
          {/* Text Content on the Left */}
          <div className="lg:w-1/2 text-gray-800 p-4">
            <p className="text-lg leading-relaxed">
              {updates[currentIndex].content}
            </p>
          </div>

          {/* Image on the Right */}
          <div className="lg:w-1/2 h-[400px] flex items-center justify-center rounded-lg shadow-md overflow-hidden">
            <img
              src={updates[currentIndex].src}
              alt={`Update ${currentIndex + 1}`}
              className="max-w-full max-h-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
