import React from 'react';

const ContactPage = () => {
  return (
    <>
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-800">Contact Us</h2>
          <p className="mt-4 text-gray-600">We would love to hear from you. Get in touch with us today!</p>
          <form
            className="mt-8 max-w-md mx-auto"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full px-4 py-2 mb-4 border rounded-md focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full px-4 py-2 mb-4 border rounded-md focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              name="message"
              placeholder="Your Message"
               rows={4}
              className="w-full px-4 py-2 mb-4 border rounded-md focus:ring-2 focus:ring-blue-500"
            ></textarea>
            <button
              type="submit"
              className="w-full px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
