"use client";
import React, { useEffect, useState } from "react";
import CourseVideoDescription from "./_components/CourseVideoDescription";
import GlobalApi from "@/app/_utils/GlobalApi";
import CourseEnroll from "./_components/CourseEnroll";
import CourseContentSection from "./_components/CourseContentSection";

function CoursePreview({ params }) {
  const [courseInfo, setCourseInfo] = useState();

  useEffect(() => {
    params && getCourseInfoById();
  }, [params]);

  const getCourseInfoById = () => {
    GlobalApi.getCourseBySlug(params?.courseId).then((resp) => {
      setCourseInfo(resp.courseList);
    });
  };

  return (
    courseInfo && (
      <div className="grid grid-cols-1 md:grid-cols-3 p-5 gap-3">
        <div className="col-span-2 bg-white p-3">
          <CourseVideoDescription courseInfo={courseInfo} />
        </div>

        <div>
          <CourseEnroll />
          <CourseContentSection courseInfo={courseInfo} />
        </div>
      </div>
    )
  );
}

export default CoursePreview;
