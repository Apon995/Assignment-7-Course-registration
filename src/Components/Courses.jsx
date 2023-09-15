import React from "react";
import PropTypes from "prop-types";
import Card from "./Card";

function Courses({ data, handleSetName }) {
  return (
    <>
      <div className="grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-3 grid-cols-1 lg:gap-5 md:gap-3 gap-6">
        {data.map((Course, index) => (
          <Card key={index} Course={Course} handleSetName={handleSetName} />
        ))}
      </div>
    </>
  );
}

Courses.propTypes = {
  data: PropTypes.array.isRequired,
  handleSetName: PropTypes.func.isRequired,
};
export default Courses;
