import React, { useContext, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
// import { Menu } from "../../context/MenuContext";
// import Logout from "../../pages/Auth/Logout";
// import { Axios } from "../../Api/Axios";
// import { LOGOUT, USER } from "../../Api/Api";
import { useNavigate } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import "./bar.css";

import DropdownButton from "react-bootstrap/DropdownButton";
import { Menu } from "../../contexts/MenuContext";
// import Cookie from "cookie-universal";
// import { Dropdown } from "bootstrap";

function Topbar() {
  const menu = useContext(Menu);
  const setIsOpen = menu.setIsOpen;
  const [user, setUser] = useState("");
  const Navigate = useNavigate();
  //   const cookie = Cookie();

  //   useEffect(() => {
  //     async function reqAuth() {
  //       try {
  //         const res = await Axios.get(`${USER}`);
  //         setUser(res.data);
  //       } catch (err) {
  //         console.log(err);
  //         Navigate("/login", { replace: true });
  //       }
  //     }
  //     reqAuth();
  //   }, []);
  //   async function handleLogout() {
  //     try {
  //       const res = await Axios.get(`/${LOGOUT}`);
  //       cookie.remove("E-commerce");
  //       window.location.pathname = "/login";
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   }
  return (
    <div className="top-bar ">
      <div className="d-flex justify-content-between align-items-center h-100">
        <div className="d-flex align-items-center gap-4">
          <h3>AL-Wathba</h3>
          <FontAwesomeIcon
            onClick={() => setIsOpen((prev) => !prev)}
            cursor={"pointer"}
            icon={faBars}
          />
        </div>
        <div>
          <DropdownButton id="dropdown-basic-button" title={"Admin"}>
            <Dropdown.Item>Logout</Dropdown.Item>
          </DropdownButton>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
