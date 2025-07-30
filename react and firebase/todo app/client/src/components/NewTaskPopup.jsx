import { React, useState } from "react";
import { setDoc, db, auth, doc } from "../firebase";
import "../App.css";

export default function NewTaskPopup({ triggerNewTaskToggle }) {
  // storing task details by using useState() below
  const [taskSubj, setTaskSubj] = useState("");
  const [taskDesc, setTaskDesc] = useState("");
  const [taskDDate, setTaskDDate] = useState("");

  // new task creator function below...
  const taskCardCreator = () => {
    if (taskSubj && taskDesc && taskDDate) {
      console.log("task subject ==>", taskSubj);
      console.log("task description ==>", taskDesc);
      console.log("task due date ==>", taskDDate);

      // converting date into milliseconds taake tasks to sort kar saken...
      const dateObject = new Date(taskDDate);
      const dateMills = dateObject.getTime();
      console.log(dateMills);
    }
  };

  return (
    <>
      <div className="taskFormParent">
        <div className="subjectParent">
          <p>Task Subject</p>
          <input
            onChange={(e) => setTaskSubj(e.target.value)}
            type="text"
            id="subjectInpId"
            placeholder="Enter Task Subject"
          />
        </div>
        <div className="textareaParent">
          <p>Task Description</p>
          <textarea
            onChange={(e) => setTaskDesc(e.target.value)}
            id="descriptionInpId"
            placeholder="Enter Task description"
          ></textarea>
        </div>
        <div className="taskDueDateParent">
          <p>Task Due Date</p>
          <input
            onChange={(e) => setTaskDDate(e.target.value)}
            type="date"
            id="taskDDateId"
          />
        </div>
        <div className="taskStatusParent">
          <p>Task Status</p>
          <input type="checkbox" name="started" id="startedStatusId" />
          <label htmlFor="startedStatusId">Started</label>
          <input type="checkbox" name="not-started" id="notStartedStatusId" />
          <label htmlFor="notStartedStatusId">Not started</label>
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
    </>
  );
}
