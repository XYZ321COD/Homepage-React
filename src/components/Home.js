import React from "react";
import "../css/Home.css";
import Logo from "../resources/XDD.jpg";

function Home() {
  return (
    <div class="container">
      <div class="row home2">
        <div class="col-md-1" />
        <div class="home col-md-12 ">
          <div class="row" />
          <div class=" col nice-text "> m @ z</div>
          <div class=" col under-line "></div>
          <div class="row">
            <div class=" col-md-5 col-cus ">
              I'm <b>Michal.</b>
              <br />
              Am interested in <b>deep learning</b> and <b>computer vision</b>.{" "}
              <br />I studied computer science at <b>Jagiellonian University</b>
              .
              <br />
              Currently am taking part in InfoTech group in project{" "}
              <a class="link" href="http://bionn.matinf.uj.edu.pl/">
                bioNN
              </a>
              .
              <br />I like <b>chess</b> and I also <b>skate</b>.<br /> If you
              want to play chess with me you can add me at{" "}
              <a class="link" href="https://lichess.org/@/XYZ321COD">
                Lichess
              </a>
              .
              <br />
              You can also find me on{" "}
              <a class="link" href="https://github.com/XYZ321COD">
                github
              </a>
              {", "}
              <a
                class="link"
                href="https://www.linkedin.com/in/micha%C5%82-znale%C5%BAniak-b17b81182/"
              >
                linkedIn
              </a>
              .
            </div>
            {/* <div class=" col-md-5 col-cus  ">
              <img alt="" class="img" src={Logo} />
            </div> */}
          </div>
        </div>
        <div class="col-md-1" />
      </div>
    </div>
  );
}

export default Home;
