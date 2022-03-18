const TypoGraphy = () => {
  return (
    <div className="colors container bg-dark ">
      <h2 className="numbered-titles" style={{ marginBottom: "1.5rem" }}>
        <span>02</span> typography
      </h2>

      <div className="flex">
        <div
          className="bx flow"
          style={{ flexBasis: "100%", "--flow-space": "3rem" }}
        >
          <div>
            <p className="text-accent">Heading 1 - Bellefair Regular - 150px</p>
            <p className="fs-900 ff-serif uppercase">Earth</p>
          </div>
          <div>
            <p className="text-accent">Heading 2 - Bellefair Regular - 100px</p>
            <p className="fs-800 ff-serif uppercase">Venus</p>
          </div>
          <div>
            <p className="text-accent">Heading 3 - Bellefair Regular - 56px</p>
            <p className="fs-700 ff-serif uppercase">Jupitar & Saturn</p>
          </div>
          <div>
            <p className="text-accent">Heading 4 - Bellefair Regular - 32px</p>
            <p className="fs-600 ff-serif uppercase">
              Uranus, Neptune, & Pluto
            </p>
          </div>
          <div>
            <p className="text-accent">
              Heading 5 - Barlow Condensed Regular - 28px - 4.75 Space
            </p>
            <p className="text-accent fs-500 ff-serif letter-spacing-1 uppercase">
              So, you want ot travel to Space
            </p>
          </div>
        </div>

        <div
          className="bx flow"
          style={{ flexBasis: "100%", "--flow-space": "3rem" }}
        >
          <div>
            <p className="text-accent">
              Subheading 1 - Bellefair Regular - 28px
            </p>
            <p className="fs-500 uppercase">384,400 km</p>
          </div>
          <div>
            <p className="text-accent">
              Subheading 2 - Barlow Condensed Regular - 14px - 2.35 Character
              Space
            </p>
            <p className="fs-200 letter-spacing-3 uppercase">Avg Distance</p>
          </div>
          <div>
            <p className="text-accent">
              Nav Text - Barlow Condensed Regular - 18px - 2.7 Character Space
            </p>
            <p className="fs-300 letter-spacing-2 uppercase">Europe</p>
          </div>
          <div>
            <p className="text-accent">Body Text</p>
            <p className="fs-400">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea
              voluptatibus quasi sed at fugiat minima mollitia laboriosam, quo
              libero tempore, dolor rerum quaerat possimus, sequi excepturi
              veniam eligendi eos! Aperiam. Numquam magnam dicta repellendus
              consequatur illo aut, dolorem, officia veniam earum expedita unde
              necessitatibus esse autem. Nostrum assumenda libero facilis quis
              provident esse quibusdam error. Harum officia ea delectus non.
              Optio incidunt deleniti accusamus rerum numquam quis sint
              perspiciatis, excepturi voluptatem eum! Quam libero, soluta veniam
              enim deserunt non ad amet quasi repudiandae praesentium aliquid
              illum vero consectetur, unde perspiciatis?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TypoGraphy;
