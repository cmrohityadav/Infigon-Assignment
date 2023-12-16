import React from 'react'
import TestimonialItem from './TestimonialItem'

function TestimonialCard ({detail}) {
  return (
    <>
  

  {detail.map((e)=><TestimonialItem key={detail} imgUrl={e.imageUrl} detail={e.status} naam={e.name} />)}
  


    </>
  )
}

export default TestimonialCard 