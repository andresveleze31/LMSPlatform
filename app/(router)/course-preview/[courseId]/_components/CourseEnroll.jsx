import { Button } from "@/components/ui/button";
import React from "react";

function CourseEnroll() {
  const membership = false;
  return (
    <div className="p-3 text-center rounded-sm bg-primary flex flex-col gap-3">
      <h2 className="text-[20px] font-bold text-white ">
        Enroll to the Course
      </h2>

      {membership ? (
        <div className="flex flex-col gap-3">
          <h2 className="text-white font-light">
            Enroll Now to Start Learning and Building the project
          </h2>
          <Button className="bg-white text-primary hover:bg-white hover:text-primary ">
            Enroll Now
          </Button>
        </div>
      ) : (
        <div className="flex flex-col gap-3">
          <h2 className="text-white font-light">
            Buy Monthly Membership and Get Access to All Courses
          </h2>
          <Button className="bg-white text-primary hover:bg-white hover:text-primary ">
            Buy Membership Just $2.99
          </Button>
        </div>
      )}
    </div>
  );
}

export default CourseEnroll;
