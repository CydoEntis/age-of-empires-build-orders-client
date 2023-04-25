import React from "react";

type Props = {
  src: string;
};

function TableImage({ src }: Props) {
  return <img style={{ width: "35px", margin: 0, padding: 0 }} src={src} />;
}

export default TableImage;
