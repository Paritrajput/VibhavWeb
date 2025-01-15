import React from "react";
import ProfileCard from "../../../Components/Card/page";

function page() {
  return (
    <div className="backdrop-brightness-50 flex flex-col items-center pt-10">
      <div className="">
      <h1 className="text-4xl space-x-10 font-extrabold">Alumni</h1>
      </div>
      
      
      <ProfileCard />
    </div>
  );
}

export default page;
