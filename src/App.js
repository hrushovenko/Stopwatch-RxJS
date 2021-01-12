import "./App.css";

import { useState } from "react";
import Stopwatch from "./stopwatch/Stopwatch";
import { onStart, onWait, onReset } from "./functions";

const delay = 1000;

function App() {
  const [timer, setTimer] = useState(0);
  const [diff, setDiff] = useState(0);

  const [subscription, setSubscription] = useState("");
  const [prevent, setPrevent] = useState(true);

  const toOnStart = {
    subscription,
    delay,
    setTimer,
    diff,
    setSubscription,
    setDiff,
  };

  const toOnWait = {
    prevent,
    setPrevent,
    subscription,
    setDiff,
    timer,
    setSubscription,
  };

  const toOnReset = { subscription, delay, setTimer, setSubscription };

  return (
    <div className="App">
      <h1>Stopwatch RxJS</h1>
      <hr />
      <Stopwatch timePassed={timer ? timer : diff} />
      <div>
        <button
          onClick={() => onStart(toOnStart)}
          className="btn btn-success btn-lg"
        >
          Start / Stop
        </button>
        <button
          onClick={() => onWait(toOnWait)}
          className="btn btn-warning btn-lg"
        >
          Wait
        </button>
        <button
          onClick={() => onReset(toOnReset)}
          className="btn btn-danger btn-lg"
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;
