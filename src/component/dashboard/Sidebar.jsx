import React, { useContext, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./bar.css";
import { NavLink, useNavigate } from "react-router-dom";
// import { Menu } from "../../context/MenuContext";
// import { WindowSize } from "../../context/WindowContext";
// import { Axios } from "../../Api/Axios";
// import { USER } from "../../Api/Api";
import { Links } from "./Navlinks.jsx";
import { Menu } from "../../contexts/MenuContext";
import { WindowSize } from "../../contexts/WindowContext";
function SideBar() {
  const menu = useContext(Menu);
  const isOpen = menu.isOpen;
  // console.log(menu);

  const WindowContext = useContext(WindowSize);
  const windowSize = WindowContext.windowSize;

  const [user, setUser] = useState({});
  const Navigate = useNavigate();

  //   useEffect(() => {
  //     async function reqAuth() {
  //       try {
  //         const res = await Axios.get(`${USER}`);
  //         setUser(res.data);
  //       } catch (err) {
  //         console.log(err);
  //         Navigate("/login", { replace: true });
  //         // window.location.pathname = "/login";
  //       }
  //     }
  //     reqAuth();
  //   }, []);
  // console.log(Links);
  return (
    <>
      <div
        style={{
          top: "70px",
          height: "100vh",
          position: "fixed",
          backgroundColor: "rgba(0,0,0,0.2)",
          left: "0",
          width: "100%",
          display: windowSize <= "768" && isOpen ? "block" : "none",
        }}
      ></div>
      <div
        className="side-bar pt-2"
        style={{
          left: windowSize < "768" ? (isOpen ? 0 : "-100%") : 0,
          width: isOpen ? "280px" : "fit-content",
          position: windowSize < "768" ? "fixed" : "sticky",
        }}
      >
        {Links.map((link, key) => (
          <NavLink
            key={key}
            to={link.path}
            className="d-flex align-items-center gap-3 side-bar-link"
          >
            <FontAwesomeIcon
              style={{
                padding: isOpen ? "10px 8px 10px 15px" : "10px 13px",
              }}
              icon={link.icon}
            />
            <p className="m-2" style={{ display: isOpen ? "block" : "none" }}>
              {link.name}
            </p>
          </NavLink>
        ))}
      </div>
    </>
  );
}

export default SideBar;
