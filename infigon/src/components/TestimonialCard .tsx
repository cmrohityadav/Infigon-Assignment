import React from 'react'
import TestimonialItem from './TestimonialItem'

interface card {
 
    detail:Array<Object>;
  
   
    
  }
function TestimonialCard ({detail}:card) {
  return (
    <>
  

  {detail.map((e)=><TestimonialItem key={detail} imgUrl={e.imageUrl} detail={e.status} naam={e.name} />)}
  


    </>
  )
}

export default TestimonialCard 