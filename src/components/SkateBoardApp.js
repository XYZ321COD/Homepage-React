import React from "react";
import "../css/Building.css";

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
              <div class="text_title"> The problem </div>
              Since 2012 skateboarding was my passion. I enjoyed hanging out
              with my friends and learning new tricks. But particularly I was
              appreciating finding new places where I could skate and meet new
              people. Three years ago I moved to the Cracow. I had a hard time
              founding places where I could skate. Unfortunately, a gem's
              amongst skate spots are only known by the best local
              skateboarders. So people who just started skating or moved to a
              new location can't enjoy skating to the fullest. The same problem
              applies to skaters from abroad.{" "}
              <div class="text_title"> How to solve this </div>
              <div>
                To solve this problem, I would like to create a mobile
                application that allows skateboarders to mark places on the map
                where they can skate. Every user can add a new skate spot to the
                application. The community will then be able to rate the quality
                of the spot and add a short comment describing the pros and cons
                of the place. Everyone who will have access to the application
                will be able to use the filter values ​​that they set, such as
                quality, distance, popularity to search for a list of potential
                places to ride.
              </div>
            </div>
            <div class="text_title">
              {" "}
              The most important functionalities are
            </div>
            <div>
              <ul>
                <li>
                  {" "}
                  Adding spot to the application
                  <ul>
                    <li> Connectivity to the google map.</li>
                    <li> Photo capture and feed.</li>
                    <li> Comment and rate/like.</li>
                  </ul>
                </li>
                <li>
                  {" "}
                  Rating skate spot{" "}
                  <ul>
                    <li> Photo capture and feed.</li>
                    <li> Comment and rate/like.</li>
                  </ul>
                </li>
                <li>
                  {" "}
                  Searching for the spot
                  <ul>
                    <li>
                      {" "}
                      Applying filters such as quality, distance, popularity to
                      search for a list of potential places to ride.
                    </li>
                  </ul>
                </li>
                <li>
                  {" "}
                  Online Advertisement{" "}
                  <ul>
                    <li>
                      {" "}
                      Using adds from skateboarding companies in exchange for
                      the discount codes for the most active users.
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div class="text_title"> Technology stack</div>
            <div>
              <div>
                <ul>
                  <li>React Native</li>
                  <li> TypeScript</li>
                  <li>GraphQL</li>
                  <li>Apollo server / Apollo graphQL</li>
                  <li>Prisma</li>
                  <li>postgresSQL</li>
                  <li>Jest</li>
                  <li>Sass</li>
                  <li>CircleCI and Docker</li>
                  <li>Netlify and Heroku</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
