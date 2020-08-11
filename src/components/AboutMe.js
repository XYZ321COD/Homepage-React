import "../css/Home.css";
import React from "react";
import "../css/AboutMe.css";
function AboutMe() {
  return (
    <div class="container">
      <div class="row home2">
        <div class="col-md-1" />
        <div class="home col-md-12 ">
          <div class="row" />
          <div class=" col nice-text "> m @ z</div>
          <div class=" col under-line "></div>
          <div class="row">
            <div class=" col-md-9 col-cus ">
              My name is Michał and I'm a computer science student at the
              bachelor level. During my studies, I had worked with FPGA team of
              Jagiellonian University and I had the opportunity to participate
              in a research project. I have also worked as a commercial C++
              software engineer. At this moment I am mainly interested in
              studying optimization methods for deep learning models such as
              pruning and quantization.<br></br>
              <b>Programming languages I worked with:</b>
              <br />
              <ul>
                <li> C </li>
                <li>C++ (C++11 - C++17)</li>
                <li> Python</li>
                <li>JavaScript (ReactJS, NodeJS, TypeScriptJS, Redux)</li>
                <li>Mathematica</li>
                <li> BASH, AWK</li>
                <li> HTML, CSS, SCSS - Sass</li>
              </ul>
              <b> Technologies I have worked on</b>
              <br />
              <ul>
                <li> Package, dependency and environment management tools: </li>
                <ul>
                  <li>
                    {" "}
                    Web application's front-end management - <b>Npm</b>
                  </li>
                  <li>
                    {" "}
                    Package management and environment management in data
                    science projects - <b>Conda</b>
                  </li>
                  <li>
                    {" "}
                    Creation, deployment of applications and accelerating them
                    by GPU - <b>Docker</b>
                  </li>
                </ul>
                <li>
                  Deep Learning
                  <ul>
                    <b>
                      <li>PyTorch </li> <li>Keras </li> <li>TensorFlow </li>{" "}
                    </b>
                  </ul>
                </li>
                <li> Databases</li>
                <ul>
                  <li>
                    <b> MySQL</b>
                  </li>
                  <li>
                    {" "}
                    <b>PostgreSQL</b>
                  </li>
                  <li>
                    {" "}
                    Request and deliver data to web applications -{" "}
                    <b>Apollo GraphQL</b>
                  </li>
                  <li>
                    {" "}
                    Data access, migrations and visual data management -{" "}
                    <b>Prisma</b>
                  </li>
                </ul>
                <li>
                  {" "}
                  Continous integration tools
                  <ul>
                    <b>
                      <li> Jenkins</li> <li> CircleCI</li>{" "}
                    </b>
                  </ul>{" "}
                </li>
              </ul>
            </div>
            <div class=" col col-cus  ">
              <img
                alt=""
                className="img_over"
                src={require("../resources/svgsForAboutMe/dl.svg")}
                onMouseOver={(e) => {
                  e.currentTarget.src = require("../resources/svgsForAboutMe/dlhover.svg");
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.src = require("../resources/svgsForAboutMe/dl.svg");
                }}
              />
              <img
                alt=""
                className="img_over"
                src={require("../resources/svgsForAboutMe/mv.svg")}
                onMouseOver={(e) => {
                  e.currentTarget.src = require("../resources/svgsForAboutMe/mvhover.svg");
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.src = require("../resources/svgsForAboutMe/mv.svg");
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
