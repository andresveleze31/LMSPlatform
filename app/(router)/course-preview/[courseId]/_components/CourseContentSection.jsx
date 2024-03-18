import { Lock, Play } from "lucide-react";
import React, { useState } from "react";

function CourseContentSection({
  courseInfo,
  isUserEnrolled,
  watchMode = false,
  setActiveChapterIndex,
}) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="p-3 bg-white rounded-sm">
      <h2 className="text-xl font-bold">Contents</h2>
      {courseInfo.chapters.map((item, index) => (
        <div>
          <h2
            className={`p-2 text-md flex justify-between items-center border rounded-sm px-4 cursor-pointer m-2 hover:bg-gray-200 hover:text-gray-500 transition-all ${
              activeIndex == index && "bg-primary text-white"
            } ${isUserEnrolled && "hover:bg-primary hover:text-white"}`}
            onClick={() => {
              watchMode && setActiveChapterIndex(index);
              watchMode && setActiveIndex(index);
            }}
          >
            {index} . {item.name}
            {activeIndex == index || isUserEnrolled ? (
              <Play className="h-4 w-4" />
            ) : (
              <Lock className="h-4 w-4" />
            )}
          </h2>
        </div>
      ))}
    </div>
  );
}

export default CourseContentSection;
