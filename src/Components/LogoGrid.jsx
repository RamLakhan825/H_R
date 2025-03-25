import React from "react";
import CommonHeading from "./CommonHeading";
import xlriLogo from "../assets/image 4.png";
import conferenceBoardLogo from "../assets/image 5.png";
import iitRoorkeeLogo from "../assets/image 6.png";
import mdiLogo from "../assets/image 7.png";
import imdLogo from "../assets/image 8.png";
import isbLogo from "../assets/image 9.png";
import stanfordLogo from "../assets/image 10.png";
import ashridgeLogo from "../assets/image 11.png";
import iimCalcuttaLogo from "../assets/image 12.png";
import otherLogo from "../assets/image 13.png";

const logos = [
  { src: ashridgeLogo, alt: "Ashridge" },
  { src: mdiLogo, alt: "MDI Gurgaon" },
  { src: xlriLogo, alt: "XLRI Jamshedpur" },
  { src: conferenceBoardLogo, alt: "The Conference Board" },
  { src: iimCalcuttaLogo, alt: "IIM Calcutta" },
  { src: isbLogo, alt: "ISB" },
  { src: imdLogo, alt: "IMD" },
  { src: otherLogo, alt: "Other Institute" },
  { src: stanfordLogo, alt: "Stanford" },
  { src: iitRoorkeeLogo, alt: "IIT Roorkee" },
];

const LogoGrid = () => {
  return (
    <div className="mt-[2vw] relative">
      <CommonHeading title="Our Academic and Professional Learning Exposures" />

      <div className="container mx-auto py-10 px-4">
        {/* Added left padding to prevent overlap with vertical line */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-y-8 md:gap-y-12 lg:gap-y-16 gap-x-4 items-center justify-center pl-[6vw] md:pl-[8vw]">
          {logos.map((logo, index) => (
            <div key={index} className="flex justify-center p-2">
              <img
                src={logo.src}
                alt={logo.alt}
                className="h-[20vw] sm:h-[15vw] md:h-[10vw] lg:h-[8vw] object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoGrid;
