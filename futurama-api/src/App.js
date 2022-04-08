import logo from "./logo.svg";
import { useEffect, useState } from "react";
import "./App.css";

import CharBar from "./CharBar";
import allChar from "./Data";
import Display from "./Display";
import receipt from "./Display";

function App() {
  const [search, setSearch] = useState("hello");

  const selector = (e) => {
    console.log("clicked");
    setSearch(e.target.innerText);
  };

  return (
    <div className="bigContainer">
      <div className="bgWrap">
        <div className="bg"></div>
      </div>
      <div className="contentContainer">
        <div className="selection" onClick={selector}>
          {allChar.map((allChar) => (
            <CharBar key={allChar.id} firstName={allChar.name.first} />
          ))}
        </div>
      </div>
      <div className="results">
        {allChar.map(
          (allChar) =>
            allChar.name.first.includes(search) && (
              <Display images={allChar.images.main} />
            )
        )}
      </div>
      <div className="ship"></div>
    </div>
  );
}

export default App;
