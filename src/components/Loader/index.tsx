import React from "react";
import Lottie from "lottie-react";
import LoaderAnimation from "./loaderAnimation.json";
import Typed from "react-typed";

const Loader = () => {
  const tips: string[] = [
    "Just a moment, I'm booting up and loading my AI:)",
    "Don't worry I will be smarter than you in no time;)",
  ];

  return (
    <div className="w-full h-[80vh] flex items-center justify-center flex-col">
      <Lottie
        className="min-w-[150px] min-h-[150px] w-1/4 h-1/4"
        animationData={LoaderAnimation}
        loop={true}
      />
      <Typed
        strings={tips}
        typeSpeed={40}
        backSpeed={10}
        loop
        className="text-black text-sm"
        showCursor={false}
      />
    </div>
  );
};

export default Loader;
