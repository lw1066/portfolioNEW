"use client";

import React, { useEffect } from "react";
import Modal from "../components/Modal";
import { touchgrass } from "../../../public/projectInfo";
import styles from "../page.module.css";

const { title, info1, info2, info3 } = touchgrass;

function ReactAppPage() {
  return (
    <>
      <Modal title={title} info1={info1} info2={info2} info3={info3} />
      <div className="container">
        <div className="text-touchgrass">
          <div id="title">
            <h1>Touch Grass - Explore your world!</h1>
          </div>
          <p>
            Touch Grass was built over 8 days. Shout-out to Rikki, Chilli, Qasim
            and Guy - the Northcoders that I worked with. It was challenging yet
            fun - we learnt a lot.
          </p>
          <p>
            Agile working practices were followed, using Trello for our Kanban
            and Github for version control.
          </p>
          <p>
            Touch Grass is a React Native app developed on Android. It uses a
            custom Expo build to integrate Viro for augmented reality and Google
            maps to drop trophies. The backend is serverless using Firebase
            authentication and realtime database.
          </p>
          <p>
            We use an AR trophy which is collected using the phone camera when
            the user is within 100 meters of it's location. On sign-up the user
            provides a postcode, the Geoapify API then provides places of
            interest within a 5km radius. These are stored within firebase and 3
            locations are randomly chosen for trophies. Google maps displays the
            3 current collectable trophies as grass tufts and the users realtime
            location as a green smiley. The user scores 100 points for each
            trophy collection. After the three trophies have been collected
            three new ones are placed on the map.
          </p>
          <p>
            We plan to move backend functionality into Google cloud functions to
            secure sensitive data (API keys etc). However, we focused on getting
            an MVP on it's feet so we have yet to implement this. Unfortunately,
            this means we can't offer a working demo of the app as that would
            expose sensitive information. But take a look at the video to see it
            in action - please note that for this demo proximity was turned off
            to demonstrate collecting a trophy. In real use the user location
            needs to be within 100 meters to access the camera and collect the
            trophy. Feel free to check out the code on{" "}
            <a href="https://github.com/lw1066/touchgrass">Github</a>.
          </p>
          <p>
            This is a work in progress with a long way to go before completion
            but I enjoyed exploring new technology, working practices and am
            proud we completed our MVP.
          </p>
        </div>

        <div className="video-container">
          <video width="100%" controls>
            <source src="/touchgrass.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <style jsx>{`
          .container {
            display: flex;
            width: 100vw;
            height: 130vh;
            align-items: center;
            background-color: black;
            color: white;
          }

          .text-touchgrass {
            flex: 3;
            padding: 20px;
          }

          #title {
            text-align: center;
            color: green;
          }

          p {
            margin: 1rem;
          }

          a {
            color: green;
            cursor: pointer;
          }

          a:hover {
            color: red;
          }

          .video-container {
            flex: 1;
            margin-right: 20px;
          }

          @media (max-width: 768px) {
            .container {
              flex-direction: column;
              height: 300vh;
            }
            .text-touchgrass,
            .video-container {
              flex: none;
              width: 100%;
            }
          }
        `}</style>
      </div>
    </>
  );
}

export default ReactAppPage;
