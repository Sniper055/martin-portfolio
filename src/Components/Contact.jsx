import React from "react";
import { Link } from 'react-router-dom'

const Contact = () => {
  return (
    <section className="bg-white p-6 mt-2">
      <h2 className="text-center text-3xl font-bold text-violet-600 mb-8">
        Contact Me
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Left Side - Contact Info */}
        <div
          data-aos="fade-right"
          data-aos-duration="1500"
          className="bg-gray-50 shadow-md rounded-xl p-6 flex flex-col justify-center"
        >
          <h3 className="text-2xl font-bold text-violet-600 mb-4">
            Let’s Connect
          </h3>
          <p className="text-gray-700 mb-4">
            I’d love to hear from you! Whether you have a project in mind, want
            to collaborate, or just want to say hi — feel free to reach out.
          </p>

          <ul className="space-y-3 text-gray-700">
            <li>
              <strong>Email:</strong>{" "}
              <Link
                to="mailto:kpornyuiemartin2002@gmail.com"
                className="text-violet-600 hover:underline"
              >
                kpornyuiemartin2002@gmail.com
              </Link>
            </li>
            <li>
              <strong>Phone:</strong> +233 55 123 4567
            </li>
            <li>
              <strong>Location:</strong> Koforidua, Ghana
            </li>
          </ul>
        </div>

        {/* Right Side - Contact Form */}
        <div
          data-aos="fade-left"
          data-aos-duration="1500"
          className="bg-gray-50 shadow-md rounded-xl p-6"
        >
          <form className="flex flex-col space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
            />
            <textarea
              rows="5"
              placeholder="Your Message"
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
            ></textarea>
            <button
              type="submit"
              className="bg-violet-600 text-white py-3 rounded-lg hover:bg-violet-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
