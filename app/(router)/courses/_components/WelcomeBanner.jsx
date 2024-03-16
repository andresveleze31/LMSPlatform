import Image from "next/image";
import React from "react";

function WelcomeBanner() {
  return (
    <div className="flex gap-5 items-center bg-white rounded-xl p-5">
      <Image src={"/work.png"} width={200} height={200} />

      <div>
        <h2 className="font-bold text-3xl">
          Welcome to <span className="text-primary">DreamsLMS</span> Academy
        </h2>
        <h2 className="text-gray-500 text-lg">
          Explore, Learn and Build All Real Life Projects
        </h2>
      </div>
    </div>
  );
}

export default WelcomeBanner;
