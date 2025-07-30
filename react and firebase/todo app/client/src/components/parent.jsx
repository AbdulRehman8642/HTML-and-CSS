import { React, useState } from "react";
import "../App.css";
import NewTaskPopup from "./NewTaskPopup.jsx";
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

  const [taskData, setTaskData] = useState("");
  const receivedTaskData = (data) => {
    setTaskData(data);
  };

  const taskDataCheck = () => {
    console.log(taskData.taskSubject);
    console.log(taskData.taskDescription);
    console.log(taskData.taskDueDate);
  };

  const [taskCards, setTaskCards] = useState([]);
  const millisecondsForID = Date.now()
  const taskUICreator = () => {
    setTaskCards((previous) => [
      ...previous,
      <>
        <div key={`task${millisecondsForID}`} className="task">
          <div className="subjectParent">
            <p>{taskData.taskSubject}</p>
          </div>
          <div className="descriptionParent">
            <p>{taskData.taskDescription}</p>
          </div>
          <div className="dateParent">
            <p>{taskData.taskDueDate}</p>
          </div>
        </div>
      </>,
    ]);
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
            <button onClick={newTaskToggle} className="newTaskBtn">
              New
            </button>
          </div>
        </nav>

        <div className="bodyParent">
          <div className="taskCardsParent">{taskCards}</div>
        </div>
      </div>
      <button onClick={taskDataCheck}>task data check</button>
      {/* <button onClick={newTaskToggle} className="test2" id="test2">
        toggle new task
      </button> */}
      {isNewTask && (
        <NewTaskPopup
          triggerNewTaskToggle={newTaskToggle}
          taskCardData={receivedTaskData}
          taskUIMaker={taskUICreator}
        />
      )}
      {/* <Signup /> */}
    </>
  );
}
