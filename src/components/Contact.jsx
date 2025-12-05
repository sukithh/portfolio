import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      // EmailJS configuration - Replace with your actual values
      // Get these from https://www.emailjs.com/
      const serviceId = 'service_vfalggp';
      const templateId = 'template_y2l88pg';
      const publicKey = 'F-u-sdYD3xMnELVoZ';

      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        publicKey
      );

      setStatus({
        type: 'success',
        message: 'Message sent successfully! I\'ll get back to you soon.'
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Failed to send message. Please try again or contact me directly via email.'
      });
      console.error('EmailJS Error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Social links
  const socialLinks = [
    { icon: FaGithub, url: 'https://github.com/sukithh', label: 'GitHub', color: 'hover:text-gray-400' },
    { icon: FaLinkedin, url: 'https://www.linkedin.com/in/sukith-m-jain-b79407384', label: 'LinkedIn', color: 'hover:text-blue-400' },
    { icon: FaInstagram, url: 'https://www.instagram.com/sukithh/', label: 'Instagram', color: 'hover:text-pink-400' },
  ];

  // Contact info
  const contactInfo = [
    { icon: FaEnvelope, text: 'sukithmjain@gmail.com', href: 'sukithmjain@gmail.com'},
    { icon: FaMapMarkerAlt, text: 'Bengaluru, India', href: null },
  ];

  return (
    <section id="contact" className="section-padding relative">
      <div className="container mx-auto px-6" ref={ref}>
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Have a project in mind or just want to say hi? Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left Side - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="glass-card p-8">
              <h3 className="text-2xl font-bold text-white mb-6">
                Send me a message
              </h3>

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                {/* Name Input */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-dark-300 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-primary transition-colors"
                    placeholder="John Doe"
                  />
                </div>

                {/* Email Input */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-dark-300 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-primary transition-colors"
                    placeholder="john@example.com"
                  />
                </div>

                {/* Subject Input */}
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-dark-300 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-primary transition-colors"
                    placeholder="Project Inquiry"
                  />
                </div>

                {/* Message Textarea */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 bg-dark-300 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-primary transition-colors resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                {/* Status Message */}
                {status.message && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`p-4 rounded-lg ${
                      status.type === 'success' 
                        ? 'bg-green-500/20 border border-green-500/50 text-green-400' 
                        : 'bg-red-500/20 border border-red-500/50 text-red-400'
                    }`}
                  >
                    {status.message}
                  </motion.div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full neon-button disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </motion.div>

          {/* Right Side - Contact Info & Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Contact Information */}
            <div className="glass-card p-8">
              <h3 className="text-2xl font-bold text-white mb-6">
                Contact Information
              </h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    className="flex items-center gap-4"
                  >
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center flex-shrink-0">
                      <info.icon className="text-primary text-xl" />
                    </div>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="text-gray-300 hover:text-white transition-colors"
                      >
                        {info.text}
                      </a>
                    ) : (
                      <span className="text-gray-300">{info.text}</span>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="glass-card p-8">
              <h3 className="text-2xl font-bold text-white mb-6">
                Follow Me
              </h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                    whileHover={{ scale: 1.1, y: -5 }}
                    className={`w-14 h-14 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-white text-2xl transition-colors ${social.color}`}
                    aria-label={social.label}
                  >
                    <social.icon />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Quick Links or Additional Info */}
            <div className="glass-card p-8">
              <h3 className="text-2xl font-bold text-white mb-4">
                Let's Collaborate!
              </h3>
              <p className="text-gray-300 leading-relaxed">
                I'm always open to discussing new projects, creative ideas, or opportunities 
                to be part of your vision. Let's create something amazing together!
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
