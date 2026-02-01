// import React from "react";
// import HomeSkeleton from "../skeleton/HomeSkeleton";
// import { useCrudStore } from "../stores/crud.store";

// const Home = () => {

//   const {totalPeople,facultyWise} = useCrudStore()
//   return (
//     <div>
//       <div className="grid grid-cols-3  gap-y-10">
//         <HomeSkeleton
//           title="Total Employee"
//           count={totalPeople}
//           className="bg-red-500 text-white font-bold"
//         />
//         <HomeSkeleton title="IT security" count="0" className="bg-gray-200 font-bold text-black" />
//         <HomeSkeleton title="Sales member" count="0" className="bg-yellow-400 font-bold text-white" />
//         <HomeSkeleton
//           title="Management Team"
//           count="0"
//           className="bg-green-400 text-white font-bold"
//         />
//         <HomeSkeleton
//           title="Web Developer"
//           count="0"
//           className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-bold"
//         />
//         <HomeSkeleton title="App Developer" count="0"  className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white font-bold" />
//       </div>
//     </div>
//   );
// };

// export default Home;





import React, { useEffect } from "react";
import HomeSkeleton from "../skeleton/HomeSkeleton";
import { useCrudStore } from "../stores/crud.store";

const Home = () => {
  const { totalPeople, facultyWise, countFacultyWise, loading } = useCrudStore();

  useEffect(() => {
    countFacultyWise(); // fetch counts from backend
  }, []);

  const colors = [
    "bg-red-500 text-white font-bold",
    "bg-green-500 text-white font-bold",
    "bg-yellow-400 text-black font-bold",
    "bg-blue-500 text-white font-bold",
    "bg-purple-500 text-white font-bold",
    "bg-pink-500 text-white font-bold"
  ];

  if (loading) return <p>Loading...</p>;

  return (
    <div className="p-5">
      <div className="grid grid-cols-3 gap-6">
        {/* Total Employees */}
        <HomeSkeleton
          title="Total Employees"
          count={totalPeople}
          className="bg-red-500 text-white font-bold"
        />

        {/* Faculty-wise counts */}
        {facultyWise.map((faculty, index) => (
          <HomeSkeleton
            key={faculty.faculty}
            title={faculty.faculty}
            count={faculty.count}
            className={colors[index % colors.length]}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
