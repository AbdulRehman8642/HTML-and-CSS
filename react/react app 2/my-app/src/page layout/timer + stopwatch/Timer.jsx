import { useRef, useState } from "react";
import "./Timer.css";
import Start from "./timer start stop/Start";

export default function Timer() {
  const [hourFieldState, setHourFieldState] = useState(
    document.getElementById("hours")
  );
  const [minFieldState, setMinFieldState] = useState(
    document.getElementById("minutes")
  );
  const [secFieldState, setSecFieldState] = useState(
    document.getElementById("seconds")
  );

  //   Buzzer Sound

  const buzzer = new Audio("./buzzer-18.mp3");

  const minFocus = function (e) {
    const hourField = document.getElementById("hours");
    const minField = document.getElementById("minutes");
    const secField = document.getElementById("seconds");

    // for full field next field focus
    if (hourField.value.length == 2 && minField.value.length == 0) {
      minField.focus();
    }

    if (minField.value.length == 2 && secField.value.length == 0) {
      secField.focus();
    }

    // for backspace empty focus

    if (secField.value.length == 0 && e.key == "Backspace") {
      minField.focus();
    }

    if (
      minField.value.length == 0 &&
      secField.value.length == 0 &&
      e.key == "Backspace"
    ) {
      hourField.focus();
    }

    //  making seconds and minutes = 59 if more than 59

    if (minField.value > 59) {
      document.getElementById("minutes").value = 59;
    }

    if (secField.value > 59) {
      document.getElementById("seconds").value = 59;
    }

    setHourFieldState(hourField);
    setMinFieldState(minField);
    setSecFieldState(secField);
  };

  const digitChecker = function (e) {
    e.target.value = e.target.value.replace(/[^0-9]/g, "");
    // console.log(hourFieldState)
  };

  let isTimerStart = false;

  const setTimer = function () {
    
    if (hourFieldState.value + minFieldState.value + secFieldState.value > 0) {
      const hoursCalc = hourFieldState.value * 60 * 60 * 1000;
      const minutesCalc = minFieldState.value * 60 * 1000;
      const secondsCalc = secFieldState.value * 1000;

      const totalMS = hoursCalc + minutesCalc + secondsCalc;

      // buzzer.play()

      setTimeout(() => {
        console.log("Time up");
      }, totalMS);

      // for second decrement after timer started
      if (secFieldState.value > 0) {
        const secondDecInterval = setInterval(() => {
          --secFieldState.value;

          // clearing the interval if value is 0
          if (secFieldState.value == 0) {
            clearInterval(secondDecInterval);
            secFieldState.value = ""
          }
        }, 1000);
      }

      // for minute decrement after timer started
      

      isTimerStart = true;
    }
  };

  // document.getElementById("StartTimer").addEventListener("click", setTimer)

  return (
    <>
      <div className="mainParent">
        <div className="timerContainer">
          <div className="timerBody">
            <div className="inputArea">
              <input
                onInput={digitChecker}
                onKeyUp={minFocus}
                id="hours"
                maxLength={2}
                className="timerInput"
                placeholder="00"
                type="text"
              />

              <div className="colon">:</div>

              <input
                onInput={digitChecker}
                onKeyUp={minFocus}
                id="minutes"
                maxLength={2}
                className="timerInput"
                placeholder="00"
                type="text"
              />

              <div className="colon">:</div>

              <input
                onInput={digitChecker}
                onKeyUp={minFocus}
                id="seconds"
                maxLength={2}
                className="timerInput"
                placeholder="00"
                type="text"
              />
            </div>

            <div className="StartBtn">
              <button
                onClick={setTimer}
                className="startTimerBtn"
                id="startTimer"
              >
                Start
              </button>
            </div>
          </div>

          {/* <Start/> */}
        {/* <p className="credit">Credit : Abdul Rehman</p> */}
        </div>
      </div>
    </>
  );
}
