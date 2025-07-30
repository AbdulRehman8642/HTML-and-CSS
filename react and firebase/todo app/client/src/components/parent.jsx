import { React, useState } from "react";
import "../App.css";
import NewTaskPopup from "./NewTaskPopup";
import Signup from "./Signup.jsx";

export default function Parent() {
  const [isNewTask, setIsNewTask] = useState(false);
  const newTaskToggle = () => {
    setIsNewTask(!isNewTask);
    console.log(isNewTask);
  };

  // const dateString = "01/01/1971";
  // const dateObject = new Date(dateString);
  // const milliseconds = dateObject.getTime();

  // console.log(milliseconds);

  return (
    <>
      <div className="parent">
        <nav className="navbar">
          <div className="navItemsParent">
            <div className="allTaskNav navItem">All Tasks</div>
            <div className="compTaskNav navItem">Completed Tasks</div>
            <div className="remainTaskNav navItem">Remaining Tasks</div>
          </div>
          <div className="newTaskParent">
            <button onClick={newTaskToggle} className="newTaskBtn">
              New
            </button>
          </div>
        </nav>

        <div className="bodyParent">
          <div className="taskCardsParent">
            <div className="taskCard">
              <div className="subjectDiv">
                <h4 className="subject">Task 1</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <button onClick={newTaskToggle} className="test2" id="test2">
        toggle new task
      </button> */}
      {isNewTask && <NewTaskPopup triggerNewTaskToggle={newTaskToggle} />}
      {/* <NewTaskPopup /> */}
      <Signup />
    </>
  );
}
