import { useState } from "react";
import styles from "./Technology.module.css";

import technologyData from "./data.json";
import NavBar from "../../../components/FullWebsite/NavBar/NavBar";

import launchVehicalLandscapeImage from "../../../assets/technology/image-launch-vehicle-landscape.jpg";
import spacePortLandscapeImage from "../../../assets/technology/image-spaceport-landscape.jpg";
import spaceCapsuleLandscapeImage from "../../../assets/technology/image-space-capsule-landscape.jpg";

import launchVehicalPotraitImage from "../../../assets/technology/image-launch-vehicle-portrait.jpg";
import spacePortPotraitImage from "../../../assets/technology/image-spaceport-portrait.jpg";
import spaceCapsulePotraitImage from "../../../assets/technology/image-space-capsule-portrait.jpg";

const Technology = () => {
  const [technology, setTechnology] = useState("Launch vehicle");
  const { name, description } = technologyData[technology];

  const getImage = () => {
    if (technology === "Launch vehicle") return launchVehicalLandscapeImage;
    if (technology === "Spaceport") return spacePortLandscapeImage;
    if (technology === "Space capsule") return spaceCapsuleLandscapeImage;
  };

  const getSrcsetImage = () => {
    if (technology === "Launch vehicle") return launchVehicalPotraitImage;
    if (technology === "Spaceport") return spacePortPotraitImage;
    if (technology === "Space capsule") return spaceCapsulePotraitImage;
  };

  return (
    <div className={`${styles.Technology}`}>
      <a className="skip-to-content" href="#main">
        Skip to content
      </a>

      <NavBar CurrentPage="Technology" />

      <main className={`${styles.technologyContainer} flow`} id="main">
        <h1 className={`${styles.technologyTitles} numbered-titles`}>
          <span aria-hidden="true">03</span> Space Launch 101
        </h1>

        <picture className={`${styles.technologyImage}`}>
          <source srcSet={getSrcsetImage()} media="(min-width: 45em)" />
          <img src={getImage()} alt="example" />
        </picture>

        <div className={`${styles.technologyNav} number-indicators flex"`}>
          {Object.keys(technologyData).map((name, i) => (
            <button
              className={name === technology ? "active" : ""}
              onClick={() => setTechnology(name)}
            >
              <span aria-hidden="true">{i + 1}</span>
              <span className="sr-only">The {name}</span>
            </button>
          ))}
        </div>

        <article className={`${styles.technologyInfo} flow`}>
          <header className="flow flow--space-small">
            <p className="text-accent fs-400 ff-serif uppercase">
              The Technology
            </p>
            <h2 className="fs-700 ff-serif uppercase">{name}</h2>
          </header>
          <p className="text-accent fs-400">{description}</p>
        </article>
      </main>
    </div>
  );
};

export default Technology;
