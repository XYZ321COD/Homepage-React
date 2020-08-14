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
          <div class="row justify-content-center ">
            <a class="post" href="/posts/mnist">
              <div class="main_text"> M </div>
              <div class="extra_text">
                Real time digit recognition in the browser
              </div>
            </a>
            <a class="post" href="/posts/skateboardapp">
              <div class="main_text"> SB </div>
              <div class="extra_text">
                Skate spots - Understand The Problem{" "}
              </div>
            </a>
            <a class="post" href="/posts/prismadatabase">
              <div class="main_text"> SB </div>
              <div class="extra_text">Skate spots - Designing database </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
