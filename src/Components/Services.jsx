import React from "react";

const Services = () => {
  return (
    <section className="bg-white p-6 mt-2">
      <h2 className="text-center text-3xl font-bold text-violet-600 mb-8">
        My Services
      </h2>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Service 1 */}
        <div
          data-aos="fade-up"
          data-aos-duration="1500"
          className="bg-gray-50 shadow-md rounded-xl p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow duration-300"
        >
          <div className="text-5xl mb-4">🗄️</div>
          <h3 className="text-xl font-bold text-violet-600 mb-2">
            Database Administration
          </h3>
          <p className="text-gray-700">
            I design, optimize, and manage databases ensuring high performance,
            availability, and data integrity.
          </p>
        </div>

        {/* Service 2 */}
        <div
          data-aos="fade-up"
          data-aos-duration="1500"
          className="bg-gray-50 shadow-md rounded-xl p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow duration-300"
        >
          <div className="text-5xl mb-4">💻</div>
          <h3 className="text-xl font-bold text-violet-600 mb-2">
            Full Stack Development
          </h3>
          <p className="text-gray-700">
            From backend APIs to frontend interfaces, I build responsive and
            scalable web applications.
          </p>
        </div>

        {/* Service 3 */}
        <div
          data-aos="fade-up"
          data-aos-duration="1500"
          className="bg-gray-50 shadow-md rounded-xl p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow duration-300"
        >
          <div className="text-5xl mb-4">☁️</div>
          <h3 className="text-xl font-bold text-violet-600 mb-2">
            Cloud & DevOps
          </h3>
          <p className="text-gray-700">
            I deploy and manage applications on AWS, ensuring continuous
            integration, delivery, and scalability.
          </p>
        </div>

        {/* Service 4 */}
        <div
          data-aos="fade-up"
          data-aos-duration="1500"
          className="bg-gray-50 shadow-md rounded-xl p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow duration-300"
        >
          <div className="text-5xl mb-4">📖</div>
          <h3 className="text-xl font-bold text-violet-600 mb-2">
            Technical Writing & Documentation
          </h3>
          <p className="text-gray-700">
            I create clean, professional documentation for projects, making them
            easy to understand and maintain.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
