import { Button } from "../../../../../components/ui/button";
import React, { useEffect } from "react";
import { useUser } from "@clerk/nextjs";
import Link from "next/link";
import GlobalApi from "../../../../_utils/GlobalApi";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

function CourseEnroll({ courseInfo, isUserEnrolled }) {
  const membership = false;
  const { user } = useUser();

  const router = useRouter();

  useEffect(() => {
    console.log(isUserEnrolled, "IsUser Enrolled");
  }, []);

  const onEnrollCourse = () => {
    console.log("Clicked");
    GlobalApi.enrollToCourse(
      courseInfo?.slug,
      user?.primaryEmailAddress?.emailAddress
    ).then((resp) => {
      //redirect ro watch course
      console.log(resp);
      if (resp) {
        //Show toast on success

        toast("User Enrolled Successfull", {
          description: "User Enrolled to this Course",
          action: {
            label: "Undo",
            onClick: () => console.log("Undo"),
          },
        });

        router.push("/watch-course/" + resp.createUserEnrollCourse.id);
      }
    });
  };

  return (
    <div className="p-3 text-center rounded-sm bg-primary flex flex-col gap-3">
      <h2 className="text-[20px] font-bold text-white ">
        Enroll to the Course
      </h2>

      {user && (membership || courseInfo.free) && !isUserEnrolled ? (
        <div className="flex flex-col gap-3">
          <h2 className="text-white font-light">
            Enroll Now to Start Learning and Building the project
          </h2>
          <Button
            className="bg-white text-primary hover:bg-white hover:text-primary "
            onClick={() => onEnrollCourse()}
          >
            Enroll Now
          </Button>
        </div>
      ) : !user ? (
        <div className="flex flex-col gap-3">
          <h2 className="text-white font-light">
            Enroll Now to Start Learning and Building the project
          </h2>

          <Link href={"/sign-in"}>
            <Button className="bg-white text-primary hover:bg-white hover:text-primary ">
              Enroll Now
            </Button>
          </Link>
        </div>
      ) : (
        !isUserEnrolled && (
          <div className="flex flex-col gap-3">
            <h2 className="text-white font-light">
              Buy Monthly Membership and Get Access to All Courses
            </h2>
            <Button className="bg-white text-primary hover:bg-white hover:text-primary ">
              Buy Membership Just $2.99
            </Button>
          </div>
        )
      )}

      {isUserEnrolled && (
        <div className="flex flex-col gap-3">
          <h2 className="text-white font-light">
            Continue to Learn Your Project
          </h2>

          <Link href={"/watch-course/" + isUserEnrolled}>
            <Button className="bg-white text-primary hover:bg-white hover:text-primary ">
              Continue
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default CourseEnroll;
