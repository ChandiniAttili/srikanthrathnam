

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-start gap-12">
          <div className="lg:w-1/3">
            <div className="rounded-full overflow-hidden w-64 h-64 mx-auto shadow-xl border-4 border-blue-100">
              <img
                src="/img3.jpeg"
                alt="Srikanth Rathnam Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="lg:w-2/3">
            <h2 className="text-4xl font-bold mb-8 text-blue-900">Personal Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700">
              <div>
                <p><strong>Name:</strong> Rathnam Srikanth Bheem</p>
                <p><strong>Father Name:</strong> Durgaiah</p>
                <p><strong>Mother Name:</strong> Durgamma</p>
                <p><strong>Wife Name:</strong> Kasturi</p>
                <p><strong>Date of Birth:</strong> 18-06-1986</p>
                <p><strong>Religion:</strong> Indian-Hindu</p>
                <p><strong>Cast:</strong> Schedule caste (SC)</p>
                <p><strong>Marital Status:</strong> Married</p>
                <p><strong>Children:</strong> 1 Son & 1 Daughter</p>
                <p><strong>Mother Tongue:</strong> Telugu/Marathi</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3 text-blue-900">Accomplishments</h3>
                <ul className="list-disc pl-5 mb-6">
                  <li>Achieved targets by introducing complete work for any tasks.</li>
                  <li>Achieved service work by completing office work with accuracy and efficiency.</li>
                </ul>

                <h3 className="text-xl font-bold mb-3 text-blue-900">Affiliation</h3>
                <ul className="list-disc pl-5 mb-6">
                  <li>Social Services in Sirpur Kagaznagar Kumuram Bheem Asifabad Dist. Telangana area.</li>
                  <li>Founder of Bheem Foundation Trust in Telangana.</li>
                </ul>

                <h3 className="text-xl font-bold mb-3 text-blue-900">Education</h3>
                <p className="mb-6">
                  Studied at Srirampur in high school (2001-02), Junior college at Asifabad (2002-2004), 
                  completed BSC(BZC) in Hyderabad (2007), and currently pursuing MA (Rural Development) since 2022.
                </p>

                <h3 className="text-xl font-bold mb-3 text-blue-900">Skills</h3>
                <ul className="list-disc pl-5 mb-6">
                  <li>Tax law knowledge</li>
                  <li>Taxation prescience</li>
                </ul>

                <h3 className="text-xl font-bold mb-3 text-blue-900">Languages</h3>
                <p className="mb-6">Telugu, Marathi, Hindi, English</p>

                <h3 className="text-xl font-bold mb-3 text-blue-900">Residence</h3>
                <p>
                  H.NO: 1-16-321, Post office line, Vasundhara college Back side, Petrol Pump area, 
                  Kagaznagar, Sirpur-T Consistency, Kumuram Bheem Asifabad District, Telangana-504296.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}