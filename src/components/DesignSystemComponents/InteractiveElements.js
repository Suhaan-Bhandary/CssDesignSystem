const InteractiveElements = () => {
  return (
    <div
      className="colors container bg-dark flow"
      style={{ "--flow-space": "2rem"}}
    >
      <h2 className="numbered-titles" style={{ marginBottom: "1.5rem" }}>
        <span>05</span> Interactive Element
      </h2>

      {/* Navigation */}
      <div>
        <nav style={{display: "grid", placeItems: "center"}}>
          <ul className="primary-navigation underline-indicator flex">
            <li className="active">
              <a className="uppercase text-white letter-spacing-2" href="/">
                <span>01</span>Active
              </a>
            </li>
            <li>
              <a className="uppercase text-white letter-spacing-2" href="/">
                <span>02</span>Hovered
              </a>
            </li>
            <li>
              <a className="uppercase text-white letter-spacing-2" href="/">
                <span>03</span>Idle
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="flex">
        <div style={{ marginTop: "5rem", flexBasis: "100%" }}>
          {/* Explore Button */}
          {/* 
            Here we use utility clases as if we need to make some changes in it, 
            it will be easy to do it with utility clases

            Syntax:
            className = mainClass "All utility clases"
          */}
          <a
            href="/"
            className="large-button uppercase ff-serif text-dark fs-600 bg-white"
          >
            Explore
          </a>
        </div>

        <div
          className="flow"
          style={{
            flexBasis: "100%",
            display: "grid",
            placeItems: "center",
          }}
        >
          {/* Tabs */}
          <div className="tab-list underline-indicator flex">
            {/* aria: Accessible rich internet applications */}
            <p
              aria-selected="true"
              className="uppercase ff-sans-cond text-accent letter-spacing-2 bg-dark"
            >
              Moon
            </p>
            <p
              aria-selected="false"
              className="uppercase ff-sans-cond text-accent letter-spacing-2 bg-dark"
            >
              Mars
            </p>
            <p
              aria-selected="false"
              className="uppercase ff-sans-cond text-accent letter-spacing-2 bg-dark"
            >
              Europa
            </p>
          </div>

          {/* Dots */}
          <div className="dot-indicators flex">
            <button aria-selected="true">
              <span className="sr-only">Slide title</span>
            </button>
            <button aria-selected="false">
              <span className="sr-only">Slide title</span>
            </button>
            <button aria-selected="false">
              <span className="sr-only">Slide title</span>
            </button>
          </div>

          {/* Numbers */}
          <div className="number-indicators flex">
            <button aria-selected="true">1</button>
            <button aria-selected="false">2</button>
            <button aria-selected="false">3</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveElements;
