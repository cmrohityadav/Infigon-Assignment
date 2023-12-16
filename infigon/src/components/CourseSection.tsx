import React from "react";
import CourseCard from "./CourseCard";

function CourseSection() {
  const CourseList = [
    {
      name: "C++ with DSA Game Development Program",
      price: 5999,
      icon: "https://th.bing.com/th/id/OIP.lzUhh3cMIyqgUJcdtzvMjgHaFj?rs=1&pid=ImgDetMain",
      rating: 4.5,
    },
    {
      name: "AWS Data Analytics Course",
      price: 25000,
      icon: "https://primetsr.com/wp-content/uploads/2020/02/AWS-cloud-background-1-960x1000.png",
      rating: 4.8,
    },
    {
      name: "MERN Full Stack Development Course",
      price: 15000,
      icon: "https://ubiqum.com/assets/uploads/2021/11/full-stack-developer-mern-1024x1024.png",
      rating: 4.9,
    },
  ];
  return (
    <>
      <div className="flex justify-center mt-5">
        <h1 className="text-black font-bold text-6xl">Our Courses</h1>
      </div>

      {/* courses container */}
      <div className="flex justify-center gap-1 mt-2">
        <CourseCard list={CourseList} />
      </div>
    </>
  );
}

export default CourseSection;
