import React from "react";

type Props = {
    className?: string;
    text: string;
    onClick: () => void;
};

function Button({className, text, onClick}: Props) {
  return (
    <div className="control">
      <button className={`button is-capitalized ${className}`} onClick={onClick}>{text}</button>
    </div>
  );
}

export default Button;
