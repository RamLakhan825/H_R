
import image23 from '../assets/image23.png';
import React from 'react';
import CommonHeading from './CommonHeading';
import logo2 from '../assets/logo2.png';

const LeaderShipCoachingAndDevelopment = () => {
  const content = {
    left1: [
      '1. FMCG (Global)',
      '2. Multi Engineering International Company',
      '3. Large EPC Group',
      '4. Infotech',
      '5. Management consulting and professional services (Global)',
    ],
    left2: [
      'Setting ethical guidelines to establish ground rules.',
      'Building trust and coaching presence with the coachee.',
      'Enhancing communication through direct interaction, active listening, and questioning.',
      'Facilitating learning and achieving results.',
      'Conducting effective feedback meetings.',
    ],
    right1: [
      'Handling interpersonal and functional conflicts.',
      'Managing superior expectations effectively.',
      'Developing assertiveness and confidence.',
      'Enhancing networking and relationship-building skills.',
      'Prioritizing work for optimal results.',
      'Navigating difficult and demanding interactions.',
      'Strengthening self-confidence and self-esteem.',
      'Delivering impactful plans for global meetings.',
      'Managing multiple responsibilities while maintaining peace of mind.',
      'Influencing others to drive accountability and commitment.',
      'Fostering high-performance team dynamics.',
      'Maintaining control over personal behavior and emotions.',
      'Adapting effectively to transitions.',
      'Overcoming business challenges strategically.',
      'Developing an entrepreneurial mindset.',
      'Achieving high performance in professional settings.',
    ],
    right2: [
      'Senior Management – CEOs, Business & Functional Heads.',
      'Professionals with 20-30 years of experience.',
      'Experts with backgrounds in Engineering and Management.',
      'High-potential managers ready for leadership growth.',
    ]
  };

  return (
    <div className='relative mt-8 ' style={{ fontFamily: 'Poppins, sans-serif' }}>
      <CommonHeading title='Leadership Coaching & Development' />
      
      <div className='flex flex-col md:flex-row items-center md:items-start w-full h-auto mt-6 gap-6 mt-[5%] ml-[7%]'>

        {/* Left Section */}
        <div className='w-full md:w-1/3 p-6 text-left break-words'>
          <h2 className='font-bold text-lg'>Experienced, Certified & Trained Coaches</h2>
          <p className='mt-2'>Scope and Clients:</p>
          <p className='mt-1'>
            Coaching assignments typically span 9-12 sessions over a year per coachee, with each session lasting approximately 2.5 hours or more. Clients include:
          </p>
          <ul className='mt-2 list-disc pl-4'>
            {content.left1.map((point, index) => (
              <li key={index} className='mb-1'>{point}</li>
            ))}
          </ul>

          <ul className='mt-4 list-disc pl-4'>
            {content.left2.map((point, index) => (
              <li key={index} className='mb-1'>{point}</li>
            ))}
          </ul>
        </div>

        {/* Image in Center */}
        <div className='w-full md:w-1/3 flex justify-center'>
          <img 
            src={image23} 
            alt='Leadership Coaching' 
            className='max-w-full h-auto object-cover rounded-lg shadow-md'
          />
        </div>

        {/* Right Section */}
        <div className='w-full md:w-1/3 p-6 text-left break-words'>
          <h2 className='font-bold text-lg'>Key Challenges Addressed:</h2>
          <ul className='mt-2 list-disc pl-4'>
            {content.right1.map((point, index) => (
              <li key={index} className='mb-1'>{point}</li>
            ))}
          </ul>

          <p className='mt-4'>Target Audience:</p>
          <ul className='mt-2 list-disc pl-4'>
            {content.right2.map((point, index) => (
              <li key={index} className='mb-1'>{point}</li>
            ))}
          </ul>
        </div>

      </div>

      {/* Logo Positioned INSIDE This Component But Out of Content */}
      <div className='absolute bottom-0 right-0 pr-[2vw] pb-[2vw]'>
        <img src={logo2} className='h-[6vw]' alt="Company Logo" />
      </div>
    </div>
  );
};

export default LeaderShipCoachingAndDevelopment;




