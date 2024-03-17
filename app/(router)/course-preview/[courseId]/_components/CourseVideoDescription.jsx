import React from "react";
import VideoPlayer from "./VideoPlayer";
import Markdown from "react-markdown";

function CourseVideoDescription({ courseInfo }) {
  return (
    <div>
      <h2 className="font-semibold text-2xl ">{courseInfo.name}</h2>
      <h2 className="text-gray-500 text-md ">{courseInfo.autor}</h2>

      <VideoPlayer videoUrl={courseInfo?.chapters[0]?.video?.url} />

      <h2 className="mt-5 text-xl font-semibold ">About This Course</h2>
      <div>
        <Markdown className="text-md font-normal mt-2 leading-6">
          {courseInfo.description}
        </Markdown>
      </div>
    </div>
  );
}

export default CourseVideoDescription;
