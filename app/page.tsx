"use client";

import React from "react";
import styles from "./page.module.css";

const Home = () => {
  const categories = {
    "Basic chat": "basic-chat",
    "Function calling": "function-calling",
    "File search": "file-search",
    All: "all",
  };

  return (
    <main className={styles.main}>
      <div className={styles.title}>
        Explore AI demos. Click below to go to different demos.
      </div>
      <div className={styles.demoDetails} >
        <h4>Demo 1: Basic AI Chat</h4>
        <p>This demo showcases a basic AI chat functionality where you can interact with an AI model.</p>
        <h4>Demo 2: Ability to Call Other Functions</h4>
        <p>This demo demonstrates the AI's ability to call other functions and perform tasks beyond simple chat.</p>
        <h4>Demo 3: Search Your Local Files</h4>
        <p>In this demo, you can search through your local files using AI-powered search capabilities.</p>
        <h4>Demo 4: All Functionality Demo</h4>
        <p>This demo combines all the functionalities into one comprehensive demo.</p>
        <h5>Instructions:</h5>
        <ul>
          <li>Click on the demo links below to explore each functionality.</li>
          <li>Follow the on-screen instructions for each demo.</li>
          <li>Provide feedback to help us improve the demos.</li>
        </ul>
      </div>
      <div className={styles.container}>
        {Object.entries(categories).map(([name, url]) => (
          <a key={name} className={styles.category} href={`/examples/${url}`}>
            {name}
          </a>
        ))}
      </div>
    </main>
  );
};

export default Home;
