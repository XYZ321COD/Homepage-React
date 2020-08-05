import React from "react";
import "../css/Menu.css";
function Menu() {
  return (
    <>
      <a
        class="menu-block"
        style={{ height: String(window.innerHeight / 3) + "px" }}
        href="/home"
      >
        <div class="navbar-link">H o m e</div>
      </a>
      <a
        class="menu-block"
        style={{ height: String(window.innerHeight / 3) + "px" }}
        href="/aboutme"
      >
        <div class="navbar-link"> A b o u t </div>
      </a>
      <a
        class="menu-block"
        style={{ height: String(window.innerHeight / 3) + "px" }}
        href="/posts"
      >
        <div class="navbar-link"> P r o j e c t s </div>
      </a>
    </>
  );
}

export default Menu;
