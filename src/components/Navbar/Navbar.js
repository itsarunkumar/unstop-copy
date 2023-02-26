import styles from "./Navbar.module.css";
import logo from "./assets/logo.png";
import { NavLink, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArchway,
  faArrowCircleRight,
  faArrowPointer,
  faBarChart,
  faBars,
  faBell,
  faBookOpen,
  faBullhorn,
  faBullseye,
  faChartArea,
  faChartBar,
  faLightbulb,
  faMessage,
  faMicrophone,
  faPerson,
  faSearch,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  return (
    <nav
      className={`flex justify-between px-40  items-center h-16  border-b-2 text-unstop `}
    >
      <div
        className={`flex justify-between items-center flex-row 
       `}
      >
        <Link to="/" className="">
          <img src={logo} alt="" className={styles.logo} />
        </Link>

        <div
          className={`flex flex-row-reverse rounded-xl w-fit border-unstop border-1  px-4 bg-slate-200 justify-between items-center`}
        >
          <input
            type="text"
            placeholder="search"
            className="placeholder:bg-slate-200 py-2 px-4 bg-slate-200 outline-none"
          />
          <button>
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>
      </div>
      <div className={``}>
        <ul
          className="flex flex-row justify-between  items-center w-56
         "
        >
          <li>
            <NavLink
              to="/learn"
              activeClassName={styles.active}
              className="flex flex-col"
            >
              <FontAwesomeIcon icon={faBookOpen} />
              learn
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/practice"
              activeClassName={styles.active}
              className="flex flex-col"
            >
              <FontAwesomeIcon icon={faBullseye} />
              practice
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/mentor"
              activeClassName={styles.active}
              className="flex flex-col"
            >
              <FontAwesomeIcon icon={faLightbulb} />
              mentor
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/compete"
              activeClassName={styles.active}
              className="flex flex-col"
            >
              <FontAwesomeIcon icon={faChartBar} />
              compete
            </NavLink>
          </li>
        </ul>
      </div>
      <div
        className={`${styles.profile_container} flex justify-around items-center flex-row  `}
      >
        <ul className="flex justify-between items-center flex-row w-40">
          <li>
            <FontAwesomeIcon icon={faBullhorn} />
          </li>
          <li>
            <FontAwesomeIcon icon={faMessage} />
          </li>
          <li>
            <FontAwesomeIcon icon={faBell} />
          </li>
          <li>
            <FontAwesomeIcon icon={faUser} />
          </li>
          <li>
            <FontAwesomeIcon icon={faBars} />
          </li>
        </ul>
      </div>
    </nav>
  );
}
