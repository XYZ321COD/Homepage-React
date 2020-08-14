import React from "react";
import "../css/Building.css";
import Logo from "../resources/DataFlowGraphQL.png";
import Logo2 from "../resources/ERDDATABASE.png";
export default function SkateBoardPost() {
  return (
    <div class="container">
      <div class="row home2">
        <div class="col-md-1" />
        <div class="home col-md-12 ">
          <div class="row" />
          <div class=" col nice-text "> m @ z</div>
          <div class=" col under-line "></div>
          <div class="col column-left">
            <div class="text_title"> Skate spots - mobile application </div>
            <div>
              <div class="text_title">
                Creation of the database for my application:
              </div>
              <div>
                In this post, I will tell you more about the structure of the
                database that I will be using in my application.
              </div>
              <div class="text_title"> Data Flow:</div>
              Data flow in my application will look in the following way:
              <div class="centered_img">
                <img alt="" class="img" src={Logo} />
              </div>
              <div>
                <div class="text_title"> ERD Diagram for my database:</div>
                So I decided to start with the <b>Postgres</b> and <b>Prisma</b>{" "}
                part. First I created my database using{" "}
                <b>Entity Relationship Diagram</b>. You can see the results
                below:
              </div>
              <div class="centered_img">
                <img alt="" class="img" src={Logo2} />
              </div>
              <div class="text_title">
                {" "}
                Creating database based on the ERD design:
              </div>
              Having overall structure of the database in my head. I decided to
              move database structure to <b>GraphQL</b>. Since am using{" "}
              <b>GraphQL</b> and <b>Prisma</b> I can write my <b>GraphQL</b>{" "}
              object types and with help of <b>Prisma</b> I can map the created
              types to the Postgress tables. After that I deploy it to the{" "}
              <b>Prisma</b> servers. You can checkout the final work - the docs,
              add new data, check existing data in the
              <a
                href="            https://skatespots-d3a8ad7306.herokuapp.com/BackEndSkateSpots/dev
"
              >
                {" "}
                GraphQL playground
              </a>
              .
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
