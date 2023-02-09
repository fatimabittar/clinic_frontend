import React from "react";

export const BorderedImage = ({ id, image }) => {
  return (
    <div className="bordered-image" id={`bordered-image-${id}`}>
      <div>
        <div id="border"></div>
        <img id="image" src={image} alt="who-are-we" />
      </div>
    </div>
  );
};
