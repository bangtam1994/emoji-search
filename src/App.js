import React, { useState } from "react";
import "./App.css";
import Footer from "./components/Footer";

import Search from "./components/Search";

function App() {
  const [search, setSearch] = useState("");
  //L'état de ce que je rentre dans ma barre search

  //handleSearch va changer l'état de search dès que je modifie ma saisie
  const handleSearch = event => {
    setSearch(event.target.value);
  };

  return (
    <div>
      <Search search={search} handleSearch={handleSearch} />

      <Footer />
    </div>
  );
}

export default App;
