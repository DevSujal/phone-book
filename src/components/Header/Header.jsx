import {
  ArrowUpward,
  DarkMode,
  Home,
  LightMode,
  Search,
  Settings,
  Star,
} from "@mui/icons-material";
import "./header.css";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = (props) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleEvent = () => {
    setIsVisible((prev) => {
      return !prev;
    });

    window.onscroll = () => {
      setIsScrolled(window.scrollY === 0 ? false : true);
      return () => {
        window.onscroll = null;
      };
    };
  };
  return (
    <div className={isScrolled ? "header flex scrolled" : "header flex"}>
      <ArrowUpward
        className={isVisible ? "toglearrow rotatedown" : "toglearrow rotateup"}
        onClick={handleEvent}
        style={props.isdarkthemeEnabled ? props.dark_theme : {}}
      />
        <div
          className={isVisible ? "navbar" : "navbar2"}
          style={props.isdarkthemeEnabled ? props.dark_theme : {}}
        >
          <ul>
            <li>
              <Link to="/" className="links">
                <Home />
                <span>Home</span>
              </Link>
            </li>
            <li>
              <Link to="/Favourites" className="links">
                <Star />
                <span>Favourite</span>
              </Link>
            </li>
            <li>
              <Link to="/Settings" className="links">
                <Settings />
                <span>Settings</span>
              </Link>
            </li>
            <li>
              <span
                className="links"
                onClick={
                  () => {props.setIsDarkThemeEnabled(!props.isdarkthemeEnabled) 
                    setIsVisible(!isVisible)}
                }
              >
               {props.isdarkthemeEnabled ? <><LightMode /> Light Theme</> : <><DarkMode /> Dark Theme</> }
              </span>
            </li>
          </ul>
        </div>
      <div
        className="searchbar flex"
        style={props.isdarkthemeEnabled ? props.dark_theme : {}}
      >
        <Search />
        <input
          type="text"
          placeholder="search"
          style={{ color: "white" }}
          className="search"
        />
      </div>
    </div>
  );
};

export default Header;
