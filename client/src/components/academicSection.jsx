import React from 'react';
import { Box ,StatsCounter} from './index';

export default function AcademicSection() {
  const boxes = [
    {
      imageSrc: "../images/ug_academic.jpg",
      heading: 'Undergraduate Education',
      description: 'Build a strong foundation in technology.',
      link: '/admissions'
    },
    {
      imageSrc:"../images/stu_exch_academic.jpg",
      heading: 'Student Exchange Programs',
      description: 'Explore global learning opportunities.',
      link: '/admissions'
    },
    {
      imageSrc: '../images/phd_academic.jpg',
      heading: 'Postgraduate & PhD',
      description: 'Advance your research and career.',
      link: '/admissions'
    }
  ];

  return (
    <>
    <div className="w-full my-8">
    <div className="min-h-screen w-[90%] mx-auto md:px-12">
      <div className="text-start mb-16">
        <h2 className="text-4xl font-bold mb-4">Academics</h2>
        <p className="text-2xl">At IIIT Nagpur, explore a range of programs from undergraduate to doctoral studies.</p>
      </div>
      <div className="flex justify-between gap-6">
        {boxes.map((box, index) => (
          <Box
            key={index}
            imageSrc={box.imageSrc}
            heading={box.heading}
            description={box.description}
            link={box.link}
            className="w-[25rem] h-[30rem]"
          />
        ))}
      </div>
      </div>
      {/* <StatsCounter counters={counterData || []} /> */}

    </div>
    
    </>
  );
}



// import React from 'react'
// import {Box} from "./index"
// export default function AcademicSection() {
//   return (
//     <>
//     <div>
//         <h2 className="text-4xl">Academics</h2>
//         <p>At IIIT Nagpur, you can apply for a diverse range of degree programmes, exchange and doctoral studies, and more.</p>

//     </div>
//     <div>
//         <Box imageSrc={imageSrc} heading={heading} description={description} className="w-60 h-80 " 
//         />
       
//     </div>
//     </>
   
//   )
// }
