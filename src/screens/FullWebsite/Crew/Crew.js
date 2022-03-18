import { useState } from "react";
import NavBar from "../../../components/FullWebsite/NavBar/NavBar";
import styles from "./Crew.module.css";
import crewData from "./data.json";

import douglasImage from "../../../assets/crew/image-douglas-hurley.png";
import markImage from "../../../assets/crew/image-mark-shuttleworth.png";
import victorImage from "../../../assets/crew/image-victor-glover.png";
import anoushehImage from "../../../assets/crew/image-anousheh-ansari.png";

const Crew = () => {
  const getImage = () => {
    if (person === "Douglas Hurley") return douglasImage;
    if (person === "Mark Shuttleworth") return markImage;
    if (person === "Victor Glover") return victorImage;
    if (person === "Anousheh Ansari") return anoushehImage;
  };

  const [person, setPerson] = useState("Douglas Hurley");
  const { name, role, bio } = crewData[person];

  return (
    <div className={`${styles.Crew}`}>
      <a className="skip-to-content" href="#main">
        Skip to content
      </a>

      <NavBar CurrentPage="Crew" />

      <main className={`${styles.crewContainer} flow container`} id="main">
        <h1 className={`${styles.crewTitle} numbered-titles`}>
          <span aria-hidden="true">02</span> Meet your crew
        </h1>

        <div className={`${styles.crewNavigation} dot-indicators flex`}>
          {Object.keys(crewData).map((name) => (
            <button
              className={name === person ? "active" : ""}
              onClick={() => setPerson(name)}
              key={name}
            >
              <span className="sr-only">The {role}</span>
            </button>
          ))}
        </div>

        <article className={`${styles.crewInfo} flow`}>
          <header className="flow flow--space-small">
            <h2 className="fs-600 ff-serif uppercase">{role}</h2>
            <p className="fs-700 uppercase ff-serif">{name}</p>
          </header>
          <p>{bio}</p>
        </article>

        <img className={`${styles.crewImage}`} src={getImage()} alt={person} />
      </main>
    </div>
  );
};

export default Crew;
