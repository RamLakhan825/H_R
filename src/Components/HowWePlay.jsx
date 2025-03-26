import React from 'react';
import BlueArrow from './arrow';
import CommonHeading from './CommonHeading';

const HowWePlay = () => {
  return (
    <div className="mt-[2vw] relative">
      <CommonHeading title="How we play" />

      <div 
        className="flex flex-wrap justify-center items-center gap-4 p-2 mt-5"
      >
        {[
          { text: "Assess", color: "#0066cc", boxPoints: ["Situation Analysis", "Define Arena of engagement", "First level problem definition"] },
          { text: "Design", color: "#fbfda1", boxPoints: ["Agree on process intervention", "Define resource", "Agree project objectives"] },
          { text: "Align and Commit", color: "#ccffcc", boxPoints: ["Engagement & Alignment of key stakeholders", "Prioritize Interventions", "Resource allocation & time lines"] },
          { text: "Deploy", color: "#99cc00", boxPoints: ["Roll out", "Executional steps", "Speedy execution", "Ensuring that the quality is not compromised"] },
          { text: "Evaluate", color: "#ff5252", boxPoints: ["Review outcome against agreed objectives", "Seek feedback"] },
        ].map((step, index) => (
          <div 
            key={index} 
            className="min-h-[250px] flex flex-col justify-between w-full sm:w-auto text-center items-center"
          >
            <BlueArrow text={step.text} color={step.color} boxPoints={step.boxPoints} width={240} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default HowWePlay;
