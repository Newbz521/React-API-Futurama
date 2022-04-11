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
  const [search, setSearch] = useState("Philip");
  const [planet, setPlanet] = useState("Earth");
  const [species, setSpecies] = useState("Human");

  const pickSpecies = (e) => {
    console.log("clicked");
    setSpecies(e.target.innerText);
  };
  const selector = (e) => {
    console.log("clicked");
    setSearch(e.target.innerText);
  };

  return (
    <div>
      <nav>
        <div className="myList">
          <div onClick={pickSpecies}>Human</div>
          <div onClick={pickSpecies}>Mutant</div>
          <div onClick={pickSpecies}>Robot</div>
          <div onClick={pickSpecies}>Martian</div>
          <div onClick={pickSpecies}>Decapodian</div>
          <div onClick={pickSpecies}>Omicronian</div>
        </div>
      </nav>
      <div className="bigContainer">
        <div className="floater">
          <div className="ship"></div>
          <div className="light"></div>
        </div>
        <div className="bioContainer">
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
          <div className="results">
            {allChar.map(
              (allChar) =>
                allChar.name.first.includes(search) && (
                  <Display images={allChar.images.main} />
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
        </div>
        <div className="bgWrap">
          <div className="bg"></div>
        </div>
        <div className="contentContainer">
          <div className="selection">
            {allChar.map(
              (allChar) =>
                allChar.species.includes(species) && (
                  <CharBar callback={selector} firstName={allChar.name.first} />
                )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
