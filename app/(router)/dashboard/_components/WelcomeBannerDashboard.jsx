import React from "react";
import Image from "next/image";

function WelcomeBannerDashboard({ user }) {
  return (
    <div className="flex gap-5  items-center bg-white rounded-xl p-5">
      <Image src={"/work.png"} width={200} height={200} />

      <div>
        <h2 className="font-bold text-3xl">
          Welcome Back{" "}
          <span className="text-primary font-bold">{user?.fullName}</span>
        </h2>
        <h2 className="text-gray-500 text-lg">
          Lets Begin, Keep it up and improve your progress
        </h2>
      </div>
    </div>
  );
}

export default WelcomeBannerDashboard;
