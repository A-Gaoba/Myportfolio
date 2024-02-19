"use client"
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [submissionStatus, setSubmissionStatus] = useState<'success' | 'error' | null>(null);

  useEffect(() => {
    if (submissionStatus === 'success' || submissionStatus === 'error') {
      const timeout = setTimeout(() => {
        setSubmissionStatus(null);
      }, 5000);

      return () => clearTimeout(timeout);
    }
  }, [submissionStatus]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      // Replace this with actual form submission logic
      const response = await fetch('https://formspree.io/f/maygedly', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      });

      if (response.ok) {
        setSubmissionStatus('success');
        setName('');
        setEmail('');
        setMessage('');
      } else {
        setSubmissionStatus('error');
      }
    } catch (error) {
      setSubmissionStatus('error');
    }
  };

  return (
    <div className="flex flex-wrap justify-center items-center lg:h-screen p-4">
      <div className="w-full ">
        <h1 className="dark:text-white text-4xl font-bold mb-8 hidden lg:block">
          Contact
        </h1>
        <p className="dark:text-white text-md mb-4 text-xs lg:text-base">
          Got an exciting project in need of help? 
        </p>
        <p className="dark:text-white text-md mb-8 text-xs lg:text-base">
        Don&apos;t hesitate to get in touch by sending me an email! 
        </p>
        <motion.form
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          action="https://formspree.io/f/maygedly"
          method="POST"
          onSubmit={handleSubmit}
        >
          <div className="mb-4">
            <input
              type="text"
              id="name"
              placeholder="Name"
              className="w-full bg-black text-white rounded-lg px-4 py-2"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              placeholder="Email"
              id="email"
              className="w-full bg-black text-white rounded-lg px-4 py-2"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <textarea
              id="message"
              placeholder="Message"
              className="w-full bg-black text-white rounded-lg px-4 py-2"
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          {submissionStatus === 'success' && (
            <p className="text-green-500 bg-[#00ff0033] p-4 w-72 max-h-[100px]">Message sent successfully!</p>
          )}
          {submissionStatus === 'error' && (
            <p className="text-red-500 bg-[#ff000033] p-4 w-72 max-h-[100px]">An error occurred. Please try again.</p>
          )}
          <button
            type="submit"
            className="dark:text-white hover:text-sky-500 rounded-lg py-2 p-4 border-2"
          >
            Send Message
          </button>
          <br />

        </motion.form>
      </div>
    </div>
  );
};

export default Contact;
