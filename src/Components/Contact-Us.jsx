// import React, { useState } from 'react'
import CommonHeading from "./CommonHeading"
const ContactUs = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     company: '',
//     natureOfEnquiry: '',
//     email: '',
//     query: ''
//   })

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     const { name, value } = e.target
//     setFormData(prevState => ({
//       ...prevState,
//       [name]: value
//     }))
//   }

//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault()
//     // Add your form submission logic here
//     console.log('Form submitted:', formData)
//   }

  return (
   
    <div className='mt-[2vw] relative'>
    <CommonHeading title="Contact us" />
      <div className="bg-blue-500 text-white text-center py-3 text-xl font-bold">
        Contact Us
      </div>
      <form 
        // onSubmit={handleSubmit} 
        className="bg-blue-400 p-6 space-y-4"
      >
        <div className="grid grid-cols-2 gap-4">
          <input
            type="text"
            name="name"
            placeholder="Name"
            // value={formData.name}
            // onChange={handleChange}
            className="w-full p-2 rounded"
          />
          <input
            type="text"
            name="company"
            placeholder="Company"
            // value={formData.company}
            // onChange={handleChange}
            className="w-full p-2 rounded"
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <input
            type="text"
            name="natureOfEnquiry"
            placeholder="Nature of Enquiry"
            // value={formData.natureOfEnquiry}
            // onChange={handleChange}
            className="w-full p-2 rounded"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            // value={formData.email}
            // onChange={handleChange}
            className="w-full p-2 rounded"
          />
        </div>
        <textarea
          name="query"
          placeholder="Enter Your Query Here..."
        //   value={formData.query}
        //   onChange={handleChange}
          className="w-full p-2 rounded h-32"
        />
        <button 
          type="submit" 
          className="w-full bg-blue-800 text-white py-3 rounded hover:bg-blue-900 transition-colors"
        >
          Send Message
        </button>
      </form>
      <div className="bg-white border-t border-gray-200 py-4 text-center">
        <div className="flex justify-center space-x-4 text-sm">
          <div>📞 +91 9856324575</div>
          <div>✉️ info@hrcompany.com</div>
          <div>📍 Abu Dhabi House 19 Washington Square N, New York, NY 10011, USA</div>
        </div>
      </div>
    </div>
  )
}

export default ContactUs