import React, { useState } from "react";
import useSearch from "./useSearch";

function App() {
  const [query, setQuery] = useState("");
  const [pageNumber, setPageNumber] = useState(1);

  function handleChange(e) {
    setQuery(e.target.value);
    setPageNumber(1);
  }
  // 9:03-----------------
  useSearch(query, pageNumber);
  return (
    <div className='App'>
      <input type='text' onChange={handleChange} />
      <div>Title</div>
      <div>Title</div>
      <div>Title</div>
      <div>Loading...</div>
      <div>Error</div>
    </div>
  );
}

export default App;
