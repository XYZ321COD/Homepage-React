import React from "react";
import "../css/Navbar.css";
export default function Navbarpopup(props) {
  const mainName = props.mainName;
  const extras1 = props.extras1;
  const extras2 = props.extras2;
  const extras1_desc = props.extras1_desc;
  const extras2_desc = props.extras2_desc;
  const onMouseEnter = props.onMouseEnter;
  const onMouseLeave = props.onMouseLeave;
  const divStyle = {
    top: props.top + 20,
    left: props.left,
  };
  const hrefs = {
    resume: props.href[0],
    CV: props.href[1],
  };

  return (
    <div
      class="jumbotron shadow p-3  bg-white absol"
      onMouseOver={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={divStyle}
    >
      <div class="text-popup_main"> {mainName} </div>
      <a class="text-popup_extras" href={hrefs.resume}>
        {extras1}
        <p className="describtion"> {extras1_desc} </p>
      </a>
      <a class="text-popup_extras" href={hrefs.CV}>
        {extras2} <p className="describtion">{extras2_desc}</p>
      </a>
    </div>
  );
}
