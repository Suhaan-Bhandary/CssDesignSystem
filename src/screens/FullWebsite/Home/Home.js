import { useEffect } from "react";
import styles from "./Home.module.css";
import NavBar from "../../../components/FullWebsite/NavBar/NavBar";
import { Link } from "react-router-dom";

const Home = () => {
  useEffect(() => {
    document.title = "Forntend Mentor | Space Tourism Home";
  }, []);

  return (
    <div className={`${styles.Home}`}>
      <a className="skip-to-content" href="#main">
        Skip to content
      </a>

      <NavBar CurrentPage="Home" />

      <main id="main" className="grid-container grid-container--home">
        <div className={styles.textContainer}>
          <h1 className="text-accent fs-500 ff-sans-cond uppercase letter-spacing-1">
            So, you want to travel to{" "}
            <span className="fs-900 ff-serif text-white d-block">Space</span>
          </h1>
          <p>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <div>
          <Link
            to="/FinalWebsite/Destination"
            className="large-button uppercase ff-serif text-dark fs-600 bg-white"
          >
            Explore
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Home;
