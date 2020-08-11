import React from "react";
import "../css/Building.css";

export default function Build() {
  return (
    <div class="container">
      <div class="row home2">
        <div class="col-md-1" />
        <div class="home col-md-12 ">
          <div class="row" />
          <div class=" col nice-text "> m @ z</div>
          <div class=" col under-line "></div>
          <div class="row-fluid">
            <a href="https://compassionate-jepsen-ac13f3.netlify.app/">
              <img
                alt=""
                class="centered_img"
                src={require("../resources/ReactPyTorch.svg")}
              ></img>
            </a>
            <div class=" col under-line "></div>
            <div class="row-fluid">
              <a href="https://happy-jepsen-68be17.netlify.app/">
                <img
                  alt=""
                  class="centered_img"
                  src={require("../resources/TypeScriptRedux.svg")}
                ></img>
              </a>
              <div class=" col under-line "></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
