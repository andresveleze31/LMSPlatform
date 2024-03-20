"use client";
import { useUser } from "@clerk/nextjs";
import React, { useEffect, useState } from "react";
import SideBanners from "../courses/_components/SideBanners";
import WelcomeBannerDashboard from "./_components/WelcomeBannerDashboard";
import InProgressCourseList from "./_components/InProgressCourseList";
import GlobalApi from "../../_utils/GlobalApi";
function Dashboard() {
  const { user } = useUser();

  const [userEnrollCourses, setUserEnrollCourses] = useState([]);

  useEffect(() => {
    user && getAllUserEnrolledCourses();
  }, [user]);

  const getAllUserEnrolledCourses = () => {
    GlobalApi.getUserAllEnrolledCourseList(
      user.primaryEmailAddress.emailAddress
    ).then((resp) => {
      setUserEnrollCourses(resp.userEnrollCourses);
    });
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 p-5 gap-5">
      <div className="col-span-3">
        <WelcomeBannerDashboard user={user} />
        <InProgressCourseList userEnrollCourses={userEnrollCourses} />
      </div>

      <div className="p-5 bg-white rounded-xl">
        <SideBanners />
      </div>
    </div>
  );
}

export default Dashboard;
