import React from "react";
import VideoPlayer from "./VideoPlayer";
import Markdown from "react-markdown";
import { Button } from "../../../../../components/ui/button";

function CourseVideoDescription({
  courseInfo,
  activeChapterIndex,
  watchMode = false,
  setChapterCompleted,
}) {
  return (
    <div>
      <h2 className="font-semibold text-2xl ">{courseInfo.name}</h2>
      <h2 className="text-gray-500 text-md ">{courseInfo.autor}</h2>

      <VideoPlayer
        videoUrl={courseInfo?.chapters[activeChapterIndex]?.video?.url}
        poster={courseInfo?.banner?.url}
      />

      <h2 className="mt-5 text-xl font-semibold ">
        {watchMode ? (
          <span className="flex justify-between items-center">
            {courseInfo?.chapters[activeChapterIndex]?.name}
            <Button
              onClick={() =>
                setChapterCompleted(
                  courseInfo?.chapters[activeChapterIndex]?.id
                )
              }
            >
              Mark Completed
            </Button>
          </span>
        ) : (
          <span>About This Course</span>
        )}
      </h2>

      {watchMode ? (
        <div>
          <Markdown className="text-md font-normal mt-2 leading-6">
            {courseInfo?.chapters[activeChapterIndex]?.shortDesc}
          </Markdown>
        </div>
      ) : (
        <div>
          <Markdown className="text-md font-normal mt-2 leading-6">
            {courseInfo.description}
          </Markdown>
        </div>
      )}
    </div>
  );
}

export default CourseVideoDescription;
