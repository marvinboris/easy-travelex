import React from "react";
import { NavLink } from "react-router-dom";

export default function NavItem({
  to,
  svg,
  children,
}: {
  to: string;
  svg: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <NavLink to={`/admin${to}`} className="menu_item">
      <div className="menu_item__struct">
        <div className="text">{children}</div>
        {svg}
      </div>
    </NavLink>
  );
}
