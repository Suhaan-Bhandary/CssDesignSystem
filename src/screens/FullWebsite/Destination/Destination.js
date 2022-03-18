import { useState } from "react";
import NavBar from "../../../components/FullWebsite/NavBar/NavBar";
import planetData from "./data.json";
import styles from "./Destination.module.css";

import moonImage from "../../../assets/destination/image-moon.png";
import marsImage from "../../../assets/destination/image-mars.png";
import europaImage from "../../../assets/destination/image-europa.png";
import titanImage from "../../../assets/destination/image-titan.png";

const Destination = () => {
  const [planet, setPlanet] = useState("Moon");
  const { name, description, distance, travel } = planetData[planet];

  const getImage = () => {
    if (planet === "Moon") return moonImage;
    if (planet === "Mars") return marsImage;
    if (planet === "Europa") return europaImage;
    if (planet === "Titan") return titanImage;
  };

  return (
    <div className={`${styles.Destination}`}>
      <a className="skip-to-content" href="#main">
        Skip to content
      </a>

      <NavBar CurrentPage="Destination" />

      <main
        className={`${styles.destinationContainer} flow container`}
        id="main"
      >
        <h1 className={`${styles.destinationTitles} numbered-titles`}>
          <span aria-hidden="true">01</span> Pick your destination
        </h1>

        <img
          className={`${styles.destinationImage}`}
          src={getImage()}
          alt={planet}
        />

        <div
          className={`${styles.destinationTabList} tab-list underline-indicator flex`}
        >
          {Object.keys(planetData).map((name) => (
            <button
              className={`
              ${name === planet ? "active" : ""} 
              uppercase ff-sans-cond text-accent letter-spacing-2`}
              onClick={() => setPlanet(name)}
              key={name}
            >
              {name}
            </button>
          ))}
        </div>

        <article className={`${styles.destinationInfo} flow`}>
          <h2 className="fs-800 uppercase ff-serif">{name}</h2>

          <p>{description}</p>

          <div className={`${styles.destinationMeta} flex`}>
            <div>
              <h3 className="text-accent fs-200 uppercase">Avg. distance</h3>
              <p className="fs-500 ff-serif uppercase">{distance}</p>
            </div>

            <div>
              <h3 className="text-accent fs-200 uppercase">Est. Travel Time</h3>
              <p className="fs-500 ff-serif uppercase">{travel}</p>
            </div>
          </div>
        </article>
      </main>
    </div>
  );
};

export default Destination;
