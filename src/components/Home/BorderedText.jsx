import React from "react";

export const BorderedText = ({ id, title, children }) => {
  return (
    <div className="bordered-text" id={`bordered-text-${id}`}>
      <h1 id="#title">{title}</h1>
      <p id="#text">{children}</p>
    </div>
  );
};
