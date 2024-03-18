"use client";
import React, { useEffect, useState } from "react";
import CourseVideoDescription from "./_components/CourseVideoDescription";
import GlobalApi from "../../../../app/_utils/GlobalApi";
import CourseEnroll from "./_components/CourseEnroll";
import CourseContentSection from "./_components/CourseContentSection";
import { useUser } from "@clerk/nextjs";

function CoursePreview({ params }) {
  const { user } = useUser();
  const [courseInfo, setCourseInfo] = useState();
  const [isUserEnrolled, setIsUserEnrolled] = useState();

  useEffect(() => {
    params && getCourseInfoById();
  }, [params]);

  useEffect(() => {
    courseInfo && user && getUserEnrolledToCourse();
  }, [courseInfo, user]);

  const getCourseInfoById = () => {
    GlobalApi.getCourseBySlug(params?.courseId).then((resp) => {
      setCourseInfo(resp?.courseList);
    });
  };

  const getUserEnrolledToCourse = () => {
    GlobalApi.checkUserEnrolled(
      courseInfo.slug,
      user.primaryEmailAddress.emailAddress
    ).then((resp) => {
      if (resp?.userEnrollCourses) {
        setIsUserEnrolled(resp?.userEnrollCourses[0]?.id);
      }
    });
  };

  return (
    courseInfo && (
      <div className="grid grid-cols-1 md:grid-cols-3 p-5 gap-3">
        <div className="col-span-2 bg-white p-3">
          <CourseVideoDescription courseInfo={courseInfo} />
        </div>

        <div>
          <CourseEnroll
            courseInfo={courseInfo}
            isUserEnrolled={isUserEnrolled}
          />
          <CourseContentSection
            courseInfo={courseInfo}
            isUserEnrolled={isUserEnrolled}
          />
        </div>
      </div>
    )
  );
}

export default CoursePreview;
