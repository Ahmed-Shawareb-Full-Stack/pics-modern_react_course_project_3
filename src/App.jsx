//! ─── Imports ─────────────────────────────────────────────────────────────────

import { useState } from "react";

import "./App.scss";
import SearchBar from "./components/SearchBar";
import searchImage from "./api";
import ImageList from "./components/ImageList/index";

//! ─── React App ───────────────────────────────────────────────────────────────

function App() {
  const [images, setImages] = useState([]);

  const handleSubmit = async (term) => {
    const results = await searchImage(term);

    setImages(results);
  };
  return (
    <div className="App container-fluid">
      <div className="row">
        <div className="col">
          <SearchBar onSubmit={handleSubmit} />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <ImageList images={images} />
        </div>
      </div>
    </div>
  );
}

export default App;
