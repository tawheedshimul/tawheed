import React, { useState } from "react";
import { motion } from "framer-motion";
import { message } from "antd";

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("https://blog-server-ten-sand.vercel.app/api/sendEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (result.success) {
        message.success("Your message has been sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        message.error(result.message || "Failed to send the message. Please try again later.");
      }
    } catch (error) {
      message.error("An error occurred. Please try again later.");
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="flex items-center justify-center px-6 py-8 border-dashed border-gray-800 border-2"
    >
      <div className="mx-auto w-full shadow-lg rounded-lg p-6">
        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center text-gradient mb-6"
        >
          Get in Touch
        </motion.h2>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-400"
            placeholder="Your Name"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-400"
            placeholder="yourname@example.com"
          />
          <textarea
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-400"
            placeholder="Write your message here..."
          ></textarea>
          <button
            type="submit"
            className="bg-teal-500 w-full hover:bg-teal-600 text-white font-medium px-6 py-3 rounded-lg shadow-md transition-all"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </motion.section>
  );
};

export default ContactPage;