import Image from "next/image";
import React from "react";
import { Progress } from "../../../../components/ui/progress";
import Link from "next/link";

function ProgressCourseItem({ course }) {
  const getTotalCompletedChapterPerc = (item) => {
    const perc =
      (item.completedChapter?.length / item?.courseList.chapters?.length) * 100;

    return perc;
  };

  return (
    <Link href={"/course-preview/" + course.courseList?.slug}>
      <div className="border rounded-xl hover:shadow-md cursor-pointer hover:shadow-purple-700 transition-all">
        <Image
          src={course.courseList?.banner?.url}
          width={500}
          height={150}
          alt="Banner"
          className="rounded-t-xl"
        />
        <div className="flex flex-col gap-1 p-2">
          <h2 className="text-md font-semibold">{course.courseList?.name}</h2>
          <h2 className="text-sm text-gray-400">{course.courseList?.autor}</h2>
          <h2 className="text-sm text-gray-400 mt-3">
            {getTotalCompletedChapterPerc(course)}%{" "}
            <span className="float-right">
              {course.completedChapter?.length}/
              {course?.courseList.chapters?.length} Chapters
            </span>
          </h2>
          <Progress
            value={getTotalCompletedChapterPerc(course)}
            className="h-[7px] "
          />
        </div>
      </div>
    </Link>
  );
}

export default ProgressCourseItem;
