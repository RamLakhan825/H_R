
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
      'Establish ground rules: Setting ethical guidelines.',
      'Establish Trust and Coaching presence with Coachee.',
      'Communicate effectively: direct communication, listening, and questioning.',
      'Facilitating learning and results.',
      'Feedback Meetings.'
    ],
    middle: [
      'Prior coachee profiling done',
      'Use of internal data and assessment tools',
      'Identifying the issue & Roadblocks',
      'Effective Methodologies & tools deployed for coaching situations',
      'Action Planning & Timelines',
      'Mentoring',
      'Commitment & Accountability',
      'Managing emotions & holding values'
    ],
    right1: [
      'Managing interpersonal / functional conflicts',
      'Managing Superior’s expectations',
      'Building assertiveness',
      'Enhancing Networking skills',
      'Prioritization of work and achieving results',
      'Dealing with difficult and demanding people',
      'Improving Self confidence',
      'Delivering good plans for key global meetings',
      'Managing Self esteem / Fear of failure',
      'Managing multiple accountabilities and being at peace with self',
      'Influencing others to enhance commitment and accountabilities',
      'Building High performance team',
      'Being in control of personal behavior',
      'Managing Transition.',
      'Resolving business challenges',
      'Developing entrepreneurial mindset',
      'Delivering high performance',
    ],
    right2: [
      'Senior Management – CEOs / Heads of Business & Functions',
      '20-30 years Experience',
      'Engineering and Management Education.',
      'Hi-Potential Managers'
    ]
  };

  return (
    <div className='mt-[2vw] relative'>
      <CommonHeading title='Leadership Coaching & Development' />
      
      <div className='flex flex-col md:flex-row items-center md:items-start w-full h-auto mt-6 gap-6'>

        {/* Left Section */}
        <div className='w-full md:w-1/3 p-6 text-left break-words'>
          <h2 className='font-bold text-lg'>Experienced, Certified & Trained Coaches</h2>
          <p className='mt-2'>
            Scope and Clients:
          </p>
          <p className='mt-1'>
            Assignments completed with 9-12 sessions over a year per coachee. Each session for about 2.5 hrs or more. Clients Include:
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

        <div className='w-full md:w-1/3 flex justify-center'>
          <img 
            src={image23} 
            alt='Leadership Coaching' 
            className='max-w-full h-auto object-cover rounded-lg shadow-md'
          />
        </div>

        <div className='w-full md:w-1/3 p-6 text-left break-words'>
          <h2 className='font-bold text-lg'>Issues – Illustrative:</h2>
          <ul className='mt-2 list-disc pl-4'>
            {content.right1.map((point, index) => (
              <li key={index} className='mb-1'>{point}</li>
            ))}
          </ul>

          <p className='mt-4'>Levels and profiles:</p>
          <ul className='mt-2 list-disc pl-4'>
            {content.right2.map((point, index) => (
              <li key={index} className='mb-1'>{point}</li>
            ))}
          </ul>
        </div>

      </div>
      <img src={logo2}  style={{

                        zIndex: -1
                    }} className='absolute bottom-[1.5vw] h-[8vw] right-[1.5vw]' alt="" />
    </div>
  );
};

export default LeaderShipCoachingAndDevelopment;

