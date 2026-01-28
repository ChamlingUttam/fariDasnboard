import React from "react";
import HomeSkeleton from "../skeleton/HomeSkeleton";

const Home = () => {
  return (
    <div>
      <div className="grid grid-cols-3  gap-y-10">
        <HomeSkeleton
          title="Total Employee"
          count="0"
          className="bg-red-500 text-white font-bold"
        />
        <HomeSkeleton title="IT security" count="0" className="bg-gray-200 font-bold text-black" />
        <HomeSkeleton title="Sales member" count="0" className="bg-yellow-400 font-bold text-white" />
        <HomeSkeleton
          title="Management Team"
          count="0"
          className="bg-green-400 text-white font-bold"
        />
        <HomeSkeleton
          title="Web Developer"
          count="0"
          className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-bold"
        />
        <HomeSkeleton title="App Developer" count="0"  className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white font-bold" />
      </div>
    </div>
  );
};

export default Home;
