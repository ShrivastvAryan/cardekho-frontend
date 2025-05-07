'use client';
import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { Button } from '@chakra-ui/react';

const DefaultContactForm = {
  username: '',
  email: '',
  message: '',
};

const ContactUs = () => {
  const [contact, setContact] = useState(DefaultContactForm);

  // Simulated user data (replace with actual user fetching logic)
  const simulatedUserData = {
    username: 'Username',
    email: 'abc@gmail.com',
  };

  useEffect(() => {
    if (simulatedUserData) {
      setContact({
        username: simulatedUserData.username,
        email: simulatedUserData.email,
        message: '',
      });
    }
  }, []);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setContact((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form Submitted:', contact);
    // Here you would typically send the form data to a backend
  };

  const Links = [
    { label: 'Github', link: 'https://github.com/ShrivastvAryan', image: <FaGithub /> },
    { label: 'LinkedIn', link: 'https://www.linkedin.com/in/aryanshrivastava290605/', image: <FaLinkedin /> },
    { label: 'Instagram', link: 'https://www.instagram.com/aryanshrivastv_/', image: <FaInstagram /> },
    { label: 'Twitter', link: 'https://x.com/ShrivastvAryan', image: <FaXTwitter /> },
  ];

  return (
    <>
      <div className="text-4xl text-red-500 flex justify-center py-4">Contact Form</div>

      <div className="md:flex">
        <div className="border-[1px] border-black p-4 m-2 rounded-md md:w-1/2">
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col mt-4">
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                name="username"
                id="username"
                autoComplete="off"
                required
                className="bg-red-100 pl-2 rounded-lg w-full mt-1"
                value={contact.username}
                onChange={handleInput}
              />
            </div>

            <div className="flex flex-col mt-4">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="off"
                required
                className="bg-red-100 pl-2 rounded-lg w-full mt-1"
                value={contact.email}
                onChange={handleInput}
              />
            </div>

            <div className="flex flex-col mt-4">
              <label htmlFor="message">Message:</label>
              <textarea
                name="message"
                id="message"
                rows="4"
                className="bg-red-100 pl-2 rounded-lg w-full mt-1"
                value={contact.message}
                onChange={handleInput}
              />
            </div>

            <div className="flex justify-center items-center pt-4">
              <Button type="submit" colorScheme="red">
                Submit
              </Button>
            </div>
          </form>
        </div>

        <div className="border-[1px] border-black p-4 m-2 rounded-md md:w-1/2 flex justify-center items-center">
          <div className="flex justify-evenly gap-4 flex-wrap">
            {Links.map((icon, index) => (
              <div
                key={index}
                className="rounded-full w-16 h-16 lg:w-28 lg:h-28 bg-red-100 relative hover:shadow-lg transition-transform duration-300 hover:-translate-y-1"
              >
                <a
                  href={icon.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-3xl absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                >
                  {icon.image}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
