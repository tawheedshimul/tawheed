import React from "react";

const ContactPage = () => {
  return (
    <section className="bg-gray-900 text-white min-h-screen flex items-center justify-center px-6">
      <div className=" mx-auto w-full shadow-lg rounded-lg">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-teal-600 mb-6">
          Get in Touch
        </h2>
        <p className="text-center text-gray-600 mb-10">
          I'd love to hear from you! Feel free to reach out with any questions or project inquiries.
        </p>

        <form
          action="#"
          method="POST"
          className="space-y-6"
        >
          {/* Name Field */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-600">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
              placeholder="Your Name"
            />
          </div>

          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-600">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
              placeholder="yourname@example.com"
            />
          </div>

          {/* Message Field */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-600">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              required
              className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
              placeholder="Write your message here..."
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-teal-500 hover:bg-teal-600 text-white font-medium px-6 py-3 rounded-lg shadow-md transition-all"
            >
              Send Message
            </button>
          </div>
        </form>

        {/* Contact Info */}
        <div className="mt-12 text-center">
          <p className="text-gray-600">Or reach me at:</p>
          <p className="text-teal-500 font-medium">email@example.com</p>
          <p className="text-gray-600">+123 456 7890</p>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
