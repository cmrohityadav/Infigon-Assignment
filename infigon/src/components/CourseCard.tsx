import React from "react";
import CouseItem from "./CouseItem";



function CourseCard({list}) {
    console.log(list)
  return (
    <>
      
        {list.map((e)=> <CouseItem  key={e} name={e.name} icon={e.icon}  price={e.price} rating={e.rating}/>)}
      
    </>
  );
}

export default CourseCard;
