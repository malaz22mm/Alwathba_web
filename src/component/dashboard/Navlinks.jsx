import { faAdversal } from "@fortawesome/free-brands-svg-icons";
import {
  faCartArrowDown,
  faCat,
  faDashboard,
  faDirections,
  faMessage,
  faPeopleCarryBox,
  faPooStorm,
  faRepeat,
  faUsers,
  faWarehouse,
  faWaveSquare,
} from "@fortawesome/free-solid-svg-icons";

export const Links = [
  {
    name: "البيانات",
    path: "/data",
    icon: faDashboard,
    // role: "1995",
  },

  {
    name: "المنشورات",
    path: "/posts",
    icon: faPooStorm,
    // role: "1995",
  },
  {
    name: "المستخدمون",
    path: "/users",
    icon: faUsers,
    // role: ["1999", "1995"],
  },

 
  {
    name: "اشعارت",
    path: "/notification",
    icon: faMessage,
    role: ["1995", "1996"],
  },
  
  {
    name: "متجر",
    path: "/store",
    icon: faCartArrowDown,
    role: ["1995", "1996"],
  },
  {
    name: "Settings",
    path: "/settings",
    icon: faCat,
    role: ["1995", "1996"],
  },
];
