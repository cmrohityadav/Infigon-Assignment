import React from 'react'



function TestimonialItem({imgUrl,detail,naam}) {
  return (
    <>
     <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img 
            className="p-8 rounded-t-lg h-72"
            src={imgUrl}
            alt="product image"
          />
        </a>
        <div className="px-5 pb-5">
          <a href="#">
            <h2 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
             {naam}
            </h2>
          </a>
          <br />
          <a href="#">
            <h5 className="text-sm font-semibold tracking-tight text-gray-900 dark:text-white">
             {detail}
            </h5>
          </a>
          
            
          </div>
          
            

          </div>
       
    </>
  )
}

export default TestimonialItem