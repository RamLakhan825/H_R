import CommonHeading from './CommonHeading'
import React from "react";
import address from "../assets/address.png";
import email from "../assets/mail.png";
import phone2 from "../assets/phone2.png";

function ContactUs() {
  return (
    <div className='mt-[2vw] relative'>
      <CommonHeading title="Contact Us" />
      <div 
        className="w-4/5 mx-auto p-6 bg-blue-500 rounded-lg shadow-lg my-8"
        style={{ backgroundColor: "#3b99c8", fontFamily: "Poppins, sans-serif" }}
      >
        <div className="grid grid-cols-2 gap-4 mb-4">
          <input type="text" placeholder="Name" className="h-14 p-3 rounded w-full bg-white" />
          <input type="text" placeholder="Company" className="h-14 p-3 rounded w-full bg-white" />
          <input type="text" placeholder="Nature of Enquiry" className="h-14 p-3 rounded w-full bg-white" />
          <input type="email" placeholder="Email" className="h-14 p-3 rounded w-full bg-white" />
        </div>
        <textarea
          placeholder="Enter Your Query Here..."
          className="w-full p-3 rounded h-32 mb-4 bg-white"
        ></textarea>
        <button className="w-full bg-blue-700 text-white py-3 rounded" style={{ backgroundColor: "#016698" }}>
          Send Message
        </button>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center md:space-x-6 p-9 text-center md:text-left" style={{ fontFamily: "Poppins, sans-serif" }}>
        {/* Phone Section */}
        <div className="flex items-center space-x-2 mb-4 md:mb-0 ">
          <img src={phone2} alt="Phone" className="w-6 h-6 md:w-[2vw] md:h-[2vw]" />
          <span className="font-medium text-sm md:text-base">+91 9856324575</span>
        </div>

        {/* Vertical Divider */}
        <div className="hidden md:block h-8 w-1 bg-pink-500"></div>

        {/* Email Section */}
        <div className="flex items-center space-x-2 mb-4 md:mb-0">
          <img src={email} alt="Email" className="w-6 h-6 md:w-[2vw] md:h-[2vw]" />
          <span className="font-medium text-sm md:text-base">info@hrcompany.com</span>
        </div>

        {/* Vertical Divider */}
        <div className="hidden md:block h-8 w-1 bg-pink-500"></div>

        {/* Address Section */}
        <div className="flex items-center space-x-2">
          <img src={address} alt="Location" className="w-6 h-6 md:w-[2vw] md:h-[2vw]" />
          <span className="font-medium text-sm md:text-base">
            Abu Dhabi House 19 Washington Square N, New York, NY 10011, USA
          </span>
        </div>
      </div>
    </div>
  )
}

export default ContactUs;
