import { NavLink } from "react-router";

const MyLinks = ({ to, children, className }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `${isActive ? "text-warning" : `${className}`}`
      }
    >
      {children}
    </NavLink>
  );
};

export default MyLinks;
