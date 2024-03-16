import React from "react";
import WelcomeBanner from "./_components/WelcomeBanner";
import CourseList from "./_components/CourseList";

function Courses() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 p-5">
      <div className="col-span-3">
        <WelcomeBanner />
        <CourseList />
      </div>

      <div></div>
    </div>
  );
}

export default Courses;
