import React from 'react';
import CommonHeading from './CommonHeading';
const industries = [
  'Telecommunication', 'Infotech', 'Heavy Metals', 'Retail', 'Engineering',
  'FMCG - Non Durables', 'FMCG - Durables', 'Textiles & Fashion', 'Construction Materials', 'Banking',
  "SME's", 'Large Diversified Business', 'Industrial Manufacturing', 'Pharmaceuticals',
  'Textile Engineering', 'Management Consulting & Professional services (Global)', 'Logistics & Supply Chain', 'EPC'
];

const IndustriesWeServed = () => {
  return (
    <div className='mt-[2vw] relative'>
      <CommonHeading title='The Industries we served' />
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-6 ' style={{marginLeft:"5%",marginTop:"5%"}}>
        {industries.map((industry, index) => (
          <div 
            key={index} 
            className='text-white text-center p-4 h-24 shadow-md hover:scale-105 transition-transform duration-200 cursor-pointer flex items-center justify-center hover:bg-opacity-80 active:scale-95'
            style={{backgroundColor:"#2596be"}}
          >
            {industry}
          </div>
        ))}
        <div className='bg-white text-black font-semibold text-center p-4 h-24 shadow-md flex items-center justify-center hover:scale-105 transition-transform duration-200 cursor-pointer hover:bg-gray-200 active:scale-95'>
          And Many More...
        </div>
      </div>   
    </div>
  );
};

export default IndustriesWeServed;