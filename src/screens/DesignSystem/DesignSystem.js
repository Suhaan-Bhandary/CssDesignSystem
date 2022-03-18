import styles from "./DesignSystem.module.css";

import Colors from "../../components/DesignSystemComponents/Colors/Colors";
import InteractiveElements from "../../components/DesignSystemComponents/InteractiveElements";
import NumberedTiles from "../../components/DesignSystemComponents/NumberedTiles";
import SpacingSystem from "../../components/DesignSystemComponents/SpacingSystem";
import TypoGraphy from "../../components/DesignSystemComponents/TypoGraphy";
import { Link } from "react-router-dom";

const DesignSystem = () => {
  return (
    <div className={`${styles.DesignSystem} container`}>
      <h1 className="ff-serif">Design System</h1>
      <Link
        to={"/"}
        className="ff-sans-cond uppercase text-white letter-spacing-2 container"
      >
        Back To Home
      </Link>
      
      <Colors />
      <TypoGraphy />
      <NumberedTiles />
      <SpacingSystem />
      <InteractiveElements />
    </div>
  );
};

export default DesignSystem;
