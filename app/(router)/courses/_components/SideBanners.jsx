"use client";
import GlobalApi from "@/app/_utils/GlobalApi";
import Image from "next/image";
import React, { useEffect, useState } from "react";

function SideBanners() {
  const [SideBannerList, setSideBannerList] = useState([]);

  useEffect(() => {
    getSideBanners();
  }, []);

  const getSideBanners = () => {
    GlobalApi.getSideBanner().then((resp) => {
      console.log(resp.sideBanners);
      setSideBannerList(resp.sideBanners);
    });
  };

  return (
    <div>
      {SideBannerList.map((item, index) => (
        <div key={index}>
          <Image className="rounded-xl" src={item.banner.url} alt="banner" width={500} height={300} />
        </div>
      ))}
    </div>
  );
}

export default SideBanners;
