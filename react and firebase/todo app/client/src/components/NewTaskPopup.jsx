import { React, useState } from "react";
import "../App.css"

export default function NewTaskPopup() {
  return (
    <>
      <div className="taskFormParent">
        <div className="subjectParent">
          <p>Task Subject</p>
          <input
            type="text"
            id="subjectInpId"
            placeholder="Enter Task Subject"
          />
        </div>
        <div className="textareaParent">
          <p>Task Description</p>
          <textarea
            id="descriptionInpId"
            placeholder="Enter Task description"
          ></textarea>
        </div>
        <div className="taskDueDateParent">
          <p>Task Due Date</p>
          <input type="date" id="taskDDateId" />
        </div>
        <div className="taskStatusParent">
          <p>Task Status</p>
          <input type="checkbox" name="started" id="startedStatusId" />
          <label htmlFor="startedStatusId">Started</label>
          <input type="checkbox" name="not-started" id="notStartedStatusId" />
          <label htmlFor="notStartedStatusId">Not started</label>
        </div>
      </div>
    </>
  );
}
