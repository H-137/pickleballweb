import styles from "@/styles/Home.module.css";
import { useState, useEffect, Component } from "react";

function TimeLeft() {
  const [time, setTime] = useState(() => getInitialTime());

  useEffect(() => {
    setTimeout(() => {
      setTime((time) => time - 1);
    }, 1000);
  });

  return (
    <h1>
      {Math.trunc(time / 86400)}d: {Math.trunc((time % 86400) / 3600)}h:{" "}
      {Math.trunc((time % 3600) / 60)}m: {Math.trunc(time % 60)}s
    </h1>
  );
}

function getInitialTime() {
  const playTime = new Date("2023-04-14T19:00:00");
  return Math.trunc((playTime - new Date()) / 1000);
}

export default function Home() {
  return (
    <main>
      <header>
        <h1 className={styles.header}> Pickleball World Championship </h1>
      </header>
      <div>
        <h1 className={styles.subHeader}>Countdown: {<TimeLeft />}</h1>
      </div>
      <div className={styles.centerDiv}>
      <div className={styles.boxContainer}>
        <iframe
          className={styles.bracket}
          src="https://challonge.com/n7ua65wv/module?scale_to_fit=1"
          frameborder="0"
          allowtransparency="false"
        ></iframe>
      </div>
      </div>
    </main>
  );
}
