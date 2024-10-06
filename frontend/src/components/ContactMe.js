import React, { useState } from 'react';
import "../style.css";

const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    setIsSuccess(false);

    console.log('Form data:', formData);

    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      console.log('Server response:', data);

      if (response.ok) {
        setIsSuccess(true);
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
      } else {
        const errorData = await response.json();
        setError(errorData.message || 'Something went wrong');
      }
    } catch (err) {
      setError('Failed to send message');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container my-20 p-4 flex flex-col justify-center items-center">
      <div className='heading font-extrabold text-black text-5xl mb-10 text-center'>Contact Me</div>
      <div className='w-2/3 h-[2px] bg-black text-center mb-20'></div>
      <div className='md:w-[700px] w-11/12 border border-black flex flex-col place-content-between shrink-0 rounded overflow-hidden shadow-lg bg-black/20'>
      <form
        onSubmit={handleSubmit}
        className=" shadow-md rounded-lg p-8 w-full text-xl"
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
        </div>

        {/* Feedback */}
        {isLoading && <p className="text-blue-500">Sending message...</p>}
        {isSuccess && <p className="text-green-500">Message sent successfully!</p>}
        {error && <p className="text-red-500">{error}</p>}

        <div className="flex items-center justify-between">
          <button
          type="submit"
          disabled={isLoading}
            className="relative px-6 py-5 text-2xl font-extrabold text-black border-2 border-black transition-transform transform hover:bg-black/40 hover:text-black"
          >
            <span className="relative z-10" >Send Message</span>
            <div className="absolute inset-0  bg-gradient-to-br from-rose-400 to-gray-600 rotate-12 transform origin-center -z-10"></div>
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
