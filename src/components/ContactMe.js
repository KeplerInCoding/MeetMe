import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import "../style.css";

const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [state, handleSubmit] = useForm("xnnqqnkb"); // Your Formspree form ID

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Success message when form is submitted
  if (state.succeeded) {
    alert("Message sent successfully!")
  }

  return (
    <div className="container my-20 p-4 flex flex-col justify-center items-center">
      <div className='heading font-extrabold text-black text-5xl mb-10 text-center'>Contact Me</div>
      <div className='w-2/3 h-[2px] bg-black text-center mb-20'></div>
      <div className='md:w-[700px] w-11/12 border border-black flex flex-col place-content-between shrink-0 rounded overflow-hidden shadow-lg bg-black/20'>
        <form
          onSubmit={handleSubmit}
          className="shadow-md rounded-lg p-8 w-full text-xl"
        >
          {/* Form Fields */}
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            <ValidationError prefix="Name" field="name" errors={state.errors} />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            <ValidationError prefix="Email" field="email" errors={state.errors} />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="subject">
              Subject
            </label>
            <input
              type="text"
              name="subject"
              id="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            <ValidationError prefix="Subject" field="subject" errors={state.errors} />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32"
            />
            <ValidationError prefix="Message" field="message" errors={state.errors} />
          </div>

          <div className="flex items-center justify-between">
            <button
              type="submit"
              disabled={state.submitting}
              className="relative px-6 py-5 text-2xl font-extrabold text-black border-2 border-black transition-transform transform hover:bg-black/40 hover:text-black"
            >
              <span className="relative z-10">Send Message</span>
              <div className="absolute inset-0 bg-gradient-to-br from-rose-400 to-gray-600 rotate-12 transform origin-center -z-10"></div>
            </button>
          </div>
        </form>
      </div>
      <p className="mt-6 text-gray-600 text-2xl">
        Alternatively, you can reach me directly at:
        <a href="mailto:shreyakv8@gmail.com" className="text-blue-500"> shreyakv8@gmail.com</a>
      </p>
    </div>
  );
};

export default ContactMe;
