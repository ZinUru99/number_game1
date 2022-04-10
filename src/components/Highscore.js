import React from "react";

const Highscore = ({ highscore }) => {
  return (
    <ul>
      {highscore.map((element, index) => {
        return <li className="highscore form-control fs-1 fw-bold" key={index}> {element}</li>;
      })}
    </ul>
  );
};

export default Highscore;
