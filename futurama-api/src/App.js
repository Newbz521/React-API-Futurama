import logo from "./logo.svg";
import { useEffect, useState } from "react";
import "./App.css";

import CharBar from "./CharBar";
import allChar from "./Data";
import Display from "./Display";
import receipt from "./Display";
import Quotes from "./Quotes";
import Bios from "./Description";

function App() {
  const [search, setSearch] = useState("hello");

  const selector = (e) => {
    console.log("clicked");
    setSearch(e.target.innerText);
  };

  return (
    <div>
      <div className="bigContainer">
        <div className="floater">
          <div className="ship"></div>
          <div className="light"></div>
        </div>
        <div className="bio">
          {allChar.map(
            (allChar) =>
              allChar.name.first.includes(search) && (
                <Bios
                  firstName={allChar.name.first}
                  lastName={allChar.name.last}
                  species={allChar.species}
                  homePlanet={allChar.homePlanet}
                  occupation={allChar.occupation}
                />
              )
          )}
        </div>
        <div className="words">
          {allChar.map(
            (allChar) =>
              allChar.name.first.includes(search) && (
                <Quotes
                  sayings={
                    allChar.sayings[
                      Math.floor(Math.random() * allChar.sayings.length)
                    ]
                  }
                />
              )
          )}
        </div>
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
      </div>
    </div>
  );
}

export default App;
