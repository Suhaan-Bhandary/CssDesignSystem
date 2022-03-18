import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/shared/logo.svg";

const navItems = [
  { number: "00", name: "Home", link: "/FinalWebsite/Home" },
  { number: "01", name: "Destination", link: "/FinalWebsite/Destination" },
  { number: "02", name: "Crew", link: "/FinalWebsite/Crew" },
  { number: "03", name: "Technology", link: "/FinalWebsite/Technology" },
];

const NavBar = ({ CurrentPage }) => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className={`primary-header flex`}>
      {/* We are using the div and then the image to avoid the bugs which come becaue of the flex item*/}
      <div>
        <Link to={"/"}>
          <img src={logo} alt="space tourism logo" className="logo" />
        </Link>
      </div>

      <button
        className={`${showMenu ? "close" : ""} mobile-nav-toggle`}
        aria-controls="primary-navigation"
        aria-expanded="false"
        onClick={() => setShowMenu(!showMenu)}
      >
        <span className="sr-only">Menu</span>
      </button>

      <nav style={{ display: "grid", placeItems: "center" }}>
        <ul
          id="primary-navigation"
          className={`${
            showMenu ? "active" : ""
          } primary-navigation underline-indicator flex`}
        >
          {navItems.map(({ name, number, link }) => {
            return (
              <li className={name === CurrentPage ? "active" : ""} key={name}>
                <Link
                  className="ff-sans-cond uppercase text-white letter-spacing-2"
                  to={link}
                >
                  <span aria-hidden="true">{number}</span>
                  {name}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
