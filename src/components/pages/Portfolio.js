import React from 'react';
import {} from './Portfolio.css'
import TechBlog from "../../images/techblog.png"
import Project3 from "../../images/thefoodindex.png"
import Project1 from "../../images/dine-n-chug.png"

export default function Portfolio() {
  return (
    <section id="featuredProjects" class="featuredProjects">
      <div class="container">
        <div class=" section-title">
          <h2 class="featuredProjectsHeader">Featured Projects</h2>
        </div>
        <div class="row">
          {/* <!-- first block on the left --> */}

          <div
            class="card projectSpacing"
            style={{ width: "18rem", backgroundColor: "#edc7b7" }}
          >
            <img class="card-img-top" 
            src={TechBlog}
             alt="tech blog img" />
            <div class="card-body">
              <h5 class="card-title">Tech Blog</h5>
              <p class="card-text">
                A tech blog built using Express.js, Node.js, and MySQL.
              </p>
              <a
                href="https://github.com/nathanknguyen/TechBlog"
                class="btn btn-primary"
              >
                Github Repo
              </a>
              <a
                href="https://tech-bloguw.herokuapp.com/"
                class="btn btn-primary"
              >
                Live App
              </a>
            </div>
          </div>

          {/* <!-- block in the middle --> */}

          <div
            class="card projectSpacing"
            style={{ width: "18rem", backgroundColor: "#edc7b7" }}
          >
            <img
              class="card-img-top"
              src={Project3}
              alt="Project 3 app img"
            />
            <div class="card-body">
              <h5 class="card-title">The Food Index</h5>
              <p class="card-text">
                The Food Index allows the user to search for food nearby and find new cuisines. The user may also order the food they want by creating an account and signing in.
              </p>
              <a
                href="https://github.com/raws-boop/the-food-index"
                class="btn btn-primary"
              >
                GitHub Repo
              </a>
              <a
                href="https://the-food-index.herokuapp.com/"
                class="btn btn-primary"
              >
                Live App
              </a>
            </div>
          </div>

          {/* <!-- rightmost block --> */}

          <div
            class="card projectSpacing"
            style={{ width: "18rem", backgroundColor: "#edc7b7" }}
          >
            <img
              class="card-img-top"
              src={Project1}
              alt="Project 1 img"
            />
            <div class="card-body">
              <h5 class="card-title">Dine N' Chug</h5>
              <p class="card-text">
                An application for people who want to find restaurants in breweries nearby using HTML and CSS to display text and style the page and using APIs to get the locations of the restaurants and breweries and using JavaScript for the backend.
              </p>
              <a
                href="https://github.com/nathanknguyen/Project1"
                class="btn btn-primary"
              >
                GitHub Repo
              </a>
              <a
                href="https://nathanknguyen.github.io/Project1/"
                class="btn btn-primary"
              >
                Live App
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}