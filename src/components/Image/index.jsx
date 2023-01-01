//! ─── Imports ─────────────────────────────────────────────────────────────────

import React from "react";
import "./style.scss";

//! ─── React Component ─────────────────────────────────────────────────────────

function Image({ image }) {
  return (
    <div className="image ">
      <img src={image.urls.small} alt="search results" />
    </div>
  );
}

export default Image;
