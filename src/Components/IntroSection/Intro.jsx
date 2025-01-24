import React from "react";
import GradientText from '@/Components/ui/GradientText'

function Intro() {
  return (
    <div className="h-screen text-white mt-7 pt-5 mb-16">
      <div className="h-2/3 flex flex-col items-end justify-center  ">
        <div className=" text-align mt-5 pt-5 ">
          <GradientText
            colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
            animationSpeed={3}
            showBorder={false}
            className="custom-class text-8xl font-bold font-\[Arkhip\]"
          >
            Team Vibhav
          </GradientText>
        </div>
        <div className="text-3xl font-light relative p-2"> Beyond the infinity</div>
      </div>
    </div>
  );
}

export default Intro;



