import React from "react";
import PropTypes from "prop-types";

function Card({ Course, handleSetName }) {
  const {
    course_name,
    course_img,
    course_details,
    course_price,
    course_credit,
  } = Course || "";

  return (
    <>
      <div className="bg-[#FFF] shadow-md rounded-lg lg:px-4 px-2 py-3  border-[1px] border-[#adadad]">
        <img
          src={
            course_img || "https://i.ibb.co/PmPr53Z/Python-Featured-Image.png"
          }
          alt={course_name || ""}
          className=" w-full h-[200px] rounded-md"
        />

        <div className="space-y-2 py-3 xl:h-[210px] md:h-[260px] lg:h-[220px]">
          <h1 className="text-[#1C1B1B] text-[18px] leading-normal  font-medium">
            {course_name || "finding course name !"}
          </h1>
          <p className="text-[#1c1b1b99] font-medium text-sm">
            {course_details || ""}
          </p>

          <div className="flex text-[#1c1b1b99] font-medium text-base items-center gap-7">
            <p className="md:text-sm lg:text-base">
              {" "}
              $ price : {course_price}{" "}
            </p>
            <p className="md:text-sm lg:text-base">
              <i className="fa-solid fa-book-open"></i> credit : {course_credit}
              hr
            </p>
          </div>
        </div>

        <button
          onClick={() =>
            handleSetName(course_name, course_credit, course_price)
          }
          className="py-2 w-full text-[#FFF] font-semibold text-base bg-[#2F80ED]  rounded-md"
        >
          Select
        </button>
      </div>
    </>
  );
}

Card.propTypes = {
  Course: PropTypes.object.isRequired,
  handleSetName: PropTypes.func.isRequired,
};

export default Card;
