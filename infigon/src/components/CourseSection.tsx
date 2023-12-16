import React from "react";
import CourseCard from "./CourseCard";

function CourseSection() {
  const CourseList = [
    {
      name: "C++ with DSA Game Development Program",
      price: 5999,
      icon: "https://th.bing.com/th/id/OIP.lzUhh3cMIyqgUJcdtzvMjgHaFj?rs=1&pid=ImgDetMain",
      rating: 5,
    },
    {
      name: "AWS Data Analytics Course",
      price: 25000,
      icon: "https://www.schoolofit.co.za/wp-content/uploads/2020/04/AWS-Data-Analytics-Course-806x393.jpg",
      rating: 4.5,
    },
    {
      name: "MERN Full Stack Development Course",
      price: 15000,
      icon: "https://ubiqum.com/assets/uploads/2021/11/full-stack-developer-mern-1024x1024.png",
      rating: 5,
    },
  ];
  return (
    <>
      <div className="flex justify-center mt-5">
        <h1 className="text-black font-bold text-6xl">Our Courses</h1>
      </div>

      {/* courses container */}
      <div>
        <CourseCard list={CourseList} />
      </div>
    </>
  );
}

export default CourseSection;
