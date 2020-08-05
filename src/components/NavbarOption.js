import React from "react";
import "../css/Navbar.css";

export default function Navbaroption(props) {
  const name = props.name;
  const onMouseEnter = props.onMouseEnter;
  const onMouseLeave = props.onMouseLeave;
  const ref_elem = props.ref_elem;
  const href = props.href;
  return (
    <li
      class=" nav-item"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      ref={ref_elem}
    >
      <a class="nav-link navbar-link " href={href}>
        {name}
      </a>
    </li>
  );
}
