import { NavLink } from "react-router-dom";

const Links = [
  { id: 1, path: "/", text: "All" },
  { id: 2, path: "/css", text: "CSS" },
  { id: 3, path: "/html", text: "Html" },
  { id: 4, path: "/javascript", text: "JavaScript" }
];

const active = { color: "green" };
const notactive = { color: "black" };

function Navbar() {
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      {Links.map((link) => {
        return (
          <NavLink
            key={link.id}
            to={link.path}
            style={({ isActive }) => {
              return isActive ? active : notactive;
            }}
          >
            {link.text}
          </NavLink>
        );
      })}
    </div>
  );
}
export default Navbar;
