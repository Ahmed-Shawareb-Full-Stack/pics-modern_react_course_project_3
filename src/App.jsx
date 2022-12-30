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

    setImage(results);
  };
  return (
    <div className="App">
      <SearchBar onSubmit={handleSubmit} />
      <ImageList images={images} />
    </div>
  );
}

export default App;
