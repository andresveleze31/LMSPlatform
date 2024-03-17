import Image from "next/image";
import React from "react";

function CourseItem({ course }) {
  return (
    <div className="border rounded-xl hover:shadow-md cursor-pointer hover:shadow-purple-700 transition-all">
      <Image
        src={course?.banner?.url}
        width={500}
        height={150}
        alt="Banner"
        className="rounded-t-xl"
      />
      <div className="flex flex-col gap-1 p-2">
        <h2 className="text-md font-semibold">{course.name}</h2>
        <h2 className="text-sm text-gray-400">{course.autor}</h2>
        {course?.chapters?.length == 0 ? (
          <div className="flex gap-2">
            <Image src={"/youtube.png"} alt="youtube" width={20} height={20} />
            <h2 className="text-md text-gray-400">Watch On Youtube</h2>
          </div>
        ) : (
          <div className="flex gap-2">
            <Image src={"/chapter.png"} alt="chapter" width={25} height={20} />
            <h2 className="text-md text-gray-400">Chapters</h2>
          </div>
        )}
        <h2 className="text-md font-semibold">
          {course?.free ? "Free" : "Paid"}{" "}
        </h2>
      </div>
    </div>
  );
}

export default CourseItem;
