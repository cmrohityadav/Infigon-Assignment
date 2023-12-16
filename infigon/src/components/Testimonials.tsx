import React from 'react'
import TestimonialCard from './TestimonialCard ';

function Testimonials() {
    const contacts = [
        {
          uid: 1,
          name: 'Rohit Chhabiraj Yadav',
          status: 'I was just a simple Mathematics graduate before some years. Then, I had enrolled for Machine learning masters program provided by iNeuron and then enrolled into 2nd program Deep learning with Advanced Computer vision and NLP, and then my whole life changed. I worked for some couple of the projects in iNeuron itself as an intern. Previous year, I havejoined Baker Hughes, a GE company as a Computer Vision Engineer',
          imageUrl: 'https://avatars.githubusercontent.com/u/100376340?v=4',
        },
        {
            uid:5 ,
            name: 'Hitesh Choudhary',
            status: 'I was just a simple Mathematics graduate before some years. Then, I had enrolled for Machine learning masters program provided by iNeuron and then enrolled into 2nd program Deep learning with Advanced Computer vision and NLP, and then my whole life changed. I worked for some couple of the projects in iNeuron itself as an intern. Previous year, I havejoined Baker Hughes, a GE company as a Computer Vision Engineer and Today, I am working in ConvergeOne LLc. This all has been made possible only due to Sudhanshu Sir, Krish Sir, and whole iNeuron Team. From Zero to some figures, This is not a big deal, but yes You have to give your best.',
            imageUrl: 'https://avatars.githubusercontent.com/u/11613311?v=4',
          },
        {
          uid: 2,
          name: 'Anurag Tiwari',
          status: 'I have taken enrolled in Machine Learning, Deep learning course in June 2020, then i was just in my 2nd year of engineering. I have learnt almost everything about Data Science and Machine Learning from Ineuron. Their support team are always active to solve doubts... Now I am in my final year and got a job offer from Michelin. Thank you INeuron team...',
          imageUrl: 'https://avatars.githubusercontent.com/u/94738352?v=4',
        },
        {
          uid: 3,
          name: 'Sanket Singh',
          status: 'Started journey with ineuron as a newbie at the starting of the pandemic. After the community event of python, got enrolled into Machine Learning and Deep Learning parallely and then did an internship which helped to enhance my practical knowledge and to implement algorithms. It was just after after the internship I never stopped. Got full time offer from infosys for DIGITAL SPECIALIST ENGINEER(DSE), bagged more than 5 internship and full time offers from startups across India for Data Science roles which paid in a intern more than what MNC offers to a full time employee. Being a 4th year student I would recommend everyone to go forward with INEURON.',
          imageUrl: 'https://avatars.githubusercontent.com/u/29747452?v=4',
        },
        {
          uid: 4,
          name: 'Anirudh Jwala',
          status: 'Building secure Digital banks',
          imageUrl: 'https://avatars.githubusercontent.com/u/25549847?v=4',
        },
      ];
  return (
    
    <>
        <div className="flex justify-center mt-5">
        <h1 className="text-black font-bold text-6xl">Sucess Stories</h1>

      </div>

      {/* courses container */}
      <div className="flex justify-center gap-1 mt-2 flex-wrap">
        <TestimonialCard detail={contacts} />
      </div>

    
    </>
  )
}

export default Testimonials