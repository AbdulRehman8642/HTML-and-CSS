import { useEffect, useRef, useState } from "react";
import "./Timer.css";
import Start from "./timer start stop/Start";

export default function Timer() {
  const [hours, setHours] = useState("");
  const [minutes, setMinutes] = useState("");
  const [seconds, setSeconds] = useState("");

  const minFocus = function (e, nextField, prevField) {
    if(e.key == "backspace" && e.target.value == 0 && prevField){
      prevField.focus()
    }

    if(e.target.value == 2 && nextField){
      nextField.focus()
    }
  };

  const digitChecker = function (e) {
    e.target.value = e.target.value.replace(/[^0-9]/g, "");
  };
  };

  const handleInput = (value, lessThanOrEqualTo) => {
    const text = value.trim();
    const passedToNumber = Number(text)
    if (!isNaN(passedToNumber) && passedToNumber <= lessThanOrEqualTo) {

      return setHours(passedToNumber);
    }
  return (
    <>
      <div className="mainParent">
        <div className="timerContainer">
          <div className="timerBody">
            <div className="inputArea">
              <input
                value={hours}
                // onInput={digitChecker}
                // onKeyDown={minFocus}
                // ref={hoursRef}
                onChange={(e) => {minFocus(null, minutes, null); handleInput(e.target.value, 12)}}
                id="hours"
                maxLength={2}
                className="timerInput"
                placeholder="00"
                type="text"
              />

              <div className="colon">:</div>

              <input
                onInput={digitChecker}
                // onKeyDown={minFocus}
                onChange={(e) => {
                  minFocus(e);
                }}
                id="minutes"
                maxLength={2}
                className="timerInput"
                placeholder="00"
                type="text"
              />

              <div className="colon">:</div>

              <input
                onInput={digitChecker}
                onKeyDown={minFocus}
                onChange={(e) => {
                  minFocus(e);
                }}
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
