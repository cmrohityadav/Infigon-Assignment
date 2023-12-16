import React from 'react'
import TestimonialCard from './TestimonialCard ';

function Testimonials() {
    const contacts = [
        {
          uid: 1,
          name: 'Rohit Chhabiraj Yadav',
          status: 'A good Software developer',
          imageUrl: 'https://avatars.githubusercontent.com/u/100376340?v=4',
        },
        {
            uid:5 ,
            name: 'Hitesh Choudhary',
            status: 'Just an extra ordinary teacher',
            imageUrl: 'https://avatars.githubusercontent.com/u/11613311?v=4',
          },
        {
          uid: 2,
          name: 'Anurag Tiwari',
          status: 'I ❤️ To Code and Teach!',
          imageUrl: 'https://avatars.githubusercontent.com/u/94738352?v=4',
        },
        {
          uid: 3,
          name: 'Sanket Singh',
          status: 'Making your GPay smooth',
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