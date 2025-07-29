import { React, useState } from "react";
import "../App.css";
import NewTaskPopup from "./NewTaskPopup";
import Signup from "./Signup.jsx";

export default function Parent() {
  const [taskPopupReq, setTaskPopupReq] = useState(false);
  const isNewTask = true;
  const taskPopupFun = () => {
    // setTaskPopupReq(true)
    if (taskPopupFun === true) {
      console.log("it is true");
    }
  };

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
            <button onClick={taskPopupFun} className="newTaskBtn">
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
      {isNewTask && <NewTaskPopup />}
      <Signup />
    </>
  );
}
