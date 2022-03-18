import styles from "./Colors.module.css";

const Colors = () => {
  return (
    <div className={`${styles.colors} container bg-dark`}>
      <h2 className="numbered-titles">
        <span>01</span> colors
      </h2>

      <div className={`${styles.colorList} flex text-white`}>
        <div className={`${styles.flexFullGrow}`}>
          <div
            style={{
              padding: "3rem 1rem 1rem",
              border: "1px solid hsl(var(--clr-light) / 0.3)",
            }}
            className={`${styles.colorBox} bg-dark`}
          >
            #0B0D17
          </div>
          <p>
            <span className={`${styles.spanSpace} text-accent`}>RBG</span> 11, 13, 23
          </p>
          <p>
            <span className={`${styles.spanSpace} text-accent`}>HSL</span> 230*, 35%, 7%
          </p>
        </div>
        <div className={`${styles.flexFullGrow}`}>
          <div
            style={{
              padding: "3rem 1rem 1rem",
              border: "1px solid hsl(var(--clr-light))",
            }}
            className={`${styles.colorBox} bg-accent text-dark`}
          >
            #0B0D17
          </div>
          <p>
            <span className={`${styles.spanSpace} text-accent`}>RBG</span> 208, 214, 249
          </p>
          <p>
            <span className={`${styles.spanSpace} text-accent`}>HSL</span> 231*, 77%, 90%
          </p>
        </div>
        <div className={`${styles.flexFullGrow}`}>
          <div
            style={{
              padding: "3rem 1rem 1rem",
              border: "1px solid hsl(var(--clr-white))",
            }}
            className={`${styles.colorBox} bg-white text-dark`}
          >
            #FFFFF
          </div>
          <p>
            <span className={`${styles.spanSpace} text-accent`}>RBG</span> 256, 255, 255
          </p>
          <p>
            <span className={`${styles.spanSpace} text-accent`}>HSL</span> 0*, 0, 100%
          </p>
        </div>
      </div>
    </div>
  );
};

export default Colors;
