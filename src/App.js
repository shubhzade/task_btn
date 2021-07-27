import React, { useState } from "react";
// import "./styles.css";
import "./App.css";
// dsscczdsa
//☀︎ ☽
export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [darkModa, setDarkModa] = useState(false);
  const [darkModb, setDarkModb] = useState(false);
  const [darkModee, setDarkModee] = useState(false);
  return (
    <>
      <div className={darkMode ? "dark-mode" : "light-mode"}>
        <div className="switch-checkbox">
          <label className="switch">
            <input type="checkbox" onChange={() => setDarkMode(!darkMode)} />
            <span className="slider round"> </span>
          </label>
          <div>
            <h1> Itsgggggg ii{darkMode ? "Dark" : "Black"} Mode </h1>
          </div>
        </div>

        <div className={darkModee ? "dark-modee" : "light-modee"}>
          <div className="switch-checkbox">
            <label className="switch">
              <input
                type="checkbox"
                onChange={() => setDarkModee(!darkModee)}
              />
              <span className="slider round"> </span>
            </label>
          </div>
          <h1> Its {darkModee ? "Light" : "Dark"} Mode </h1>
          <div className={darkModa ? "dark-moda" : "light-moda"}>
            {/* ------------------------------- */}

            <div className="switch-checkbox">
              <label className="switch">
                <input
                  type="checkbox"
                  onChange={() => setDarkModa(!darkModa)}
                />
                <span className="slider round"> </span>
              </label>
              <div>
                <h1>Its {darkModa ? "Dark" : "Light"} Mode </h1>
              </div>
              <div className={darkModb ? "dark-modb" : "light-modb"}>
                <div className="switch-checkbox">
                  <label className="switch">
                    <input
                      type="checkbox"
                      onChange={() => setDarkModb(!darkModb)}
                    />
                    <span className="slider round"> </span>
                  </label>
                </div>
                <h1>Its {darkModb ? "Dark" : "Light"} Mode </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
