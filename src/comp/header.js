import React from "react";
import { Link, NavLink } from "react-router-dom";
import './Header.css';
import logo from '../image/logo.png';


const Header = () => {
  return (
    <div>
      <header className="hide-when-mobile ali">
        <h1>
          <Link to="/">
          <img src={logo} alt="logo" />
          </Link>
        </h1>
        
        <ul className="flex">
        <li className="main-list">
            <NavLink className="main-link" to="/">
             ACCEUIL
            </NavLink>
            {/* <ul className="sub-ul">
              <li>
                <a href="">Full Course</a>
              </li>
              <li>
                <a href="">Crash Course</a>
              </li>
              <li>
                <a href="">learn in 1h</a>
              </li>
            </ul> */}
          </li>
          <li className="main-list">
            <NavLink className="main-link" to="/telecharger">
              TELECHARGER NOTRE APPLICATION
            </NavLink>
            {/* <ul className="sub-ul">
              <li>
                <a href="">Full Course</a>
              </li>
              <li>
                <a href="">Crash Course</a>
              </li>
              <li>
                <a href="">learn in 1h</a>
              </li>
            </ul> */}
          </li>
          <li className="main-list">
            <NavLink className="main-link" to="/quiSommesNous">
              QUI SOMMES NOUS?
            </NavLink>
            {/* <ul className="sub-ul">
              <li>
                <a href="">Full Course</a>
              </li>
              <li>
                <a href="">CSS Examples</a>
              </li>
              <li className="mini-projects">
                <a href="">mini projects&nbsp; + </a>
                <ul className="sub-sub-ul">
                  <li>
                    <a href="">project 1</a>
                  </li>
                  <li>
                    <a href="">project 2</a>
                  </li>
                  <li>
                    <a href="">project 3</a>
                  </li>
                </ul>
              </li>
            </ul> */}
          </li>
          <li className="main-list">
            <NavLink className="main-link" to="/Contact">
              CONTACT
            </NavLink>
            {/* <ul className="sub-ul sub-of-js">
              <li>
                <a href="">coming soon🔥</a>
              </li>
            </ul> */}
          </li>
        </ul>
      </header>

       <header style={{ backgroundColor: "black" }} className="show-when-mobile">
        <h1>
        <Link to="/">
          <img src={logo} alt="logo" />
          </Link>
        </h1>
        <label className="absolute" htmlFor="burger">
          <i className="fas fa-bars" />
        </label>
        <input id="burger" type="checkbox" />
        <div className="show-on-click">


          <div className="main-div">
            <label htmlFor="html">
            <NavLink className="main-link" to="/">
             ACCEUIL
            </NavLink>
            {/* <i className="fas fa-plus" /> */}

            </label>
            <input id="html" type="checkbox" />
            <ul className="sub-div">
              {/* <li>
                <a href="">Full Course</a>
              </li>
              <li>
                <a href="">Crash Course</a>
              </li>
              <li>
                <a href="">learn in 1h</a>
              </li> */}
            </ul>
          </div>


          <div className="main-div">
            <label htmlFor="css">
            <NavLink className="main-link" to="/telecharger">
              TELECHARGER NOTRE APPLICATION
            </NavLink>
            {/* <i className="fas fa-plus" /> */}
            </label>
            <input id="css" type="checkbox" />
            <ul className="sub-div">
              {/* <li>
                <a href="">Full Course</a>
              </li>
              <li>
                <a href="">CSS Examples</a>
              </li> */}
              {/* <li> */}
                {/* <label className="mini-projects" htmlFor="mini">
                  mini projects <i className="fas fa-plus" />
                </label> */}
                {/* <input id="mini" type="checkbox" /> */}
                {/* <ul className="sub-sub-div"> */}
                  {/* <li>
                    <a href="">project 1</a>
                  </li>
                  <li>
                    <a href="">project 2</a>
                  </li>
                  <li>
                    <a href="">project 3</a>
                  </li> */}
                {/* </ul> */}
              {/* </li> */}
            </ul>
          </div>



          <div className="main-div">
            <label htmlFor="js">
            <NavLink className="main-link" to="/quiSommesNous">
              QUI SOMMES NOUS?
            </NavLink> 
              {/* <i className="fas fa-plus" />      hedi el + */}
            </label>
            {/* <input id="js" type="checkbox" />
            <ul className="sub-div">
              <li>
                <a href="">coming soon🔥</a>
              </li>
            </ul> */}
          </div>

          <div className="main-div">
            <label htmlFor="js">
            <NavLink className="main-link" to="/Contact">
              CONTACT
            </NavLink>
              {/* <i className="fas fa-plus" />      hedi el + */}
            </label>
            {/* <input id="js" type="checkbox" />
            <ul className="sub-div">
              <li>
                <a href="">coming soon🔥</a>
              </li>
            </ul> */}
          </div>



        </div>
      </header> 
    </div>
  );
};

export default Header;
