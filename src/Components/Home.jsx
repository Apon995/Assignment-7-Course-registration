import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Courses from "./Courses";
import Purches from "./Purches";

function Home() {
  const [data, setData] = useState([]);
  const [name, setName] = useState([]);
  const [hour, setHour] = useState(0);
  const [remaining, setRemaining] = useState(20);
  const [total, setTotal] = useState(0);

const handleSetName = (course_name, credit_hour, course_price) => {
    let newName = [...name, course_name];
    let singleName = [];

    newName.forEach((nam) => {
      if (!singleName.includes(nam)) {
        singleName.push(nam);
      } else {
        toast.warning("already exist this course!", {
          position: "top-center",
          hideProgressBar: true,
          autoClose: 2000,
        });
      }
    });

    if (hour >= 0 && hour <= 20 && hour + credit_hour < 21) {
      singleName.forEach((a) => {
        if (!name.includes(a)) {
          setHour(hour + credit_hour);
          setName(singleName);
          setRemaining(remaining - credit_hour);
          setTotal(total + course_price);
        }
      });
    } else {
      toast.warning("you can select highest 20 hrs !", {
        position: "top-right",
        hideProgressBar: true,
        autoClose : 2000,
      });
    }
  };

  useEffect(() => {
    fetch("Courses.json")
      .then((response) => response.json())
      .then((course) => setData(course))
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <div className="md:px-[2%]  px-[2%] flex lg:flex-row flex-col-reverse gap-4">
        <div className="xl:w-[74%] lg:w-[70%]  w-full">
          <Courses data={data} handleSetName={handleSetName} />
          <ToastContainer />
        </div>
        <div className="xl:w-[26%] lg:w-[30%]  w-full md:w-[450px] mx-auto">
          <Purches
            name={name}
            hour={hour}
            remaining={remaining}
            total={total}
          />
        </div>
      </div>
    </>
  );
}

export default Home;
