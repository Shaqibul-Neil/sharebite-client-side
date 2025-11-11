import { NavLink } from "react-router";

const MyLinks = ({ to, children, className }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex items-center justify-center  ${
          isActive ? "text-warning justify-center" : `${className}`
        }`
      }
    >
      {children}
    </NavLink>
  );
};

export default MyLinks;
