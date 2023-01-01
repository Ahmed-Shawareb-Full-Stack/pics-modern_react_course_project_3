//! ─── Imports ─────────────────────────────────────────────────────────────────

import React from "react";
import Image from "../Image";
import "./style.scss";

//! ─── React Component ─────────────────────────────────────────────────────────

function ImageList({ images }) {
  const renderedImages = images.map((image) => (
    <Image key={image.id} image={image} />
  ));
  return <div className="image-list ">{renderedImages}</div>;
}

export default ImageList;
