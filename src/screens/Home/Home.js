import { Link } from "react-router-dom";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={`${styles.Home} flex`}>
      <h1 className="fs-800 ff-sans uppercase">Home Page</h1>
      <div className="flex">
        <Link
          to="/DesignSystem"
          className={`${styles.btn} uppercase fs-600 ff-sans text-white`}
        >
          Design System
        </Link>
        <Link
          to="/FinalWebsite"
          className={`${styles.btn} uppercase fs-600 ff-sans text-white`}
        >
          Full Website
        </Link>
      </div>
    </div>
  );
};

export default Home;
