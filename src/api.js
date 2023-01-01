//! ─── Imports ─────────────────────────────────────────────────────────────────
import axios from "axios";

//! ─── Axios Api ───────────────────────────────────────────────────────────────

const searchImage = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID outaRhP9u-haSAydnCBKMaJwC_7Zj1WJF11KAgjSYso",
    },
    params: {
      query: term,
    },
  });

  return response.data.results;
};

export default searchImage;
