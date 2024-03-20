import React from "react";
import ProgressCourseItem from "./ProgressCourseItem";

function InProgressCourseList({ userEnrollCourses }) {
  return (
    <div className="p-5 bg-white mt-3 rounded-sm">
      <h2 className="text-primary text-xl font-semibold">
        Recent Enrolled Courses
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 mt-3 gap-5">
        {userEnrollCourses.map((item, index) => (
          <ProgressCourseItem key={index} course={item} />
        ))}
      </div>
    </div>
  );
}

export default InProgressCourseList;
