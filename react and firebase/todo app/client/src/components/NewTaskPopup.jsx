import { React, useState } from "react";
import { setDoc, db, auth, doc } from "../firebase";
import "../App.css";

export default function NewTaskPopup({ triggerNewTaskToggle, taskCardData }) {
  // storing task details by using useState() below
  const [taskSubj, setTaskSubj] = useState("");
  const [taskDesc, setTaskDesc] = useState("");
  const [taskDueDate, settaskDueDate] = useState("");

  // new task creator function below...
  const taskCardCreator = () => {
    if (taskSubj && taskDesc && taskDueDate) {
      console.log("task subject ==>", taskSubj);
      console.log("task description ==>", taskDesc);
      console.log("task due date ==>", taskDueDate);

      // converting date into milliseconds taake tasks to sort kar saken...
      const dateObject = new Date(taskDueDate);
      const dateMills = dateObject.getTime();
      console.log(dateMills);
      const taskCardDataObject = {
        taskSubject: taskSubj,
        taskDescription: taskDesc,
        taskDueDate: taskDueDate,
      };
      taskCardData(taskCardDataObject);
    }
  };

  return (
    <>
      <div className="handleParent">
        <div className="taskFormParent">
          <div className="inpSubjectParent">
            {/* <button onClick={triggerNewTaskToggle}>X</button> */}
            <p>Task Subject </p>
            <input
              className="subjectInp"
              onChange={(e) => setTaskSubj(e.target.value)}
              type="text"
              id="subjectInpId"
              placeholder="Enter Task Subject"
            />
          </div>
          <div className="textareaParent">
            <p>Task Description</p>
            <textarea
              className="descriptionTA"
              onChange={(e) => setTaskDesc(e.target.value)}
              id="descriptionInpId"
              placeholder="Enter Task description"
            ></textarea>
          </div>
          <div className="taskDueDateParent">
            <p>Task Due Date</p>
            <input
              className="taskDueDate"
              onChange={(e) => settaskDueDate(e.target.value)}
              type="date"
              id="taskDueDateId"
            />
          </div>
          <div className="taskStatusParent">
            <div className="taskStatusInputArea">
              <input type="radio" name="taskStatus" id="startedStatusId" />
              <label htmlFor="startedStatusId">Started</label>
              <input type="radio" name="taskStatus" id="notStartedStatusId" />
              <label htmlFor="notStartedStatusId">Not started</label>
            </div>
          </div>
          <button
            onClick={() => {
              taskCardCreator();
              triggerNewTaskToggle();
            }}
            className="createNewTaskBtn"
          >
            Create New Task
          </button>
        </div>
      </div>
    </>
  );
}
