import { React, useState } from "react";
import "../App.css";
import NewTaskPopup from "./NewTaskPopup.jsx";
import Signup from "./Signup.jsx";
import {
  setDoc,
  db,
  auth,
  doc,
  getDoc,
  getDocs,
  collection,
} from "../firebase";

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
  const [taskCards, setTaskCards] = useState([]);

  const receivedTaskData = async (data) => {
    setTaskData(data);
    setTaskCards((previous) => [
      ...previous,
      <>
        <div className="task">
          <div className="subjectParent">
            <p>{data.taskSubject}</p>
          </div>
          <div className="descriptionParent">
            <p>{data.taskDescription}</p>
          </div>
          <div className="dateParent">
            <p>{data.taskDueDate}</p>
          </div>
        </div>
      </>,
    ]);
    const dueDateObject = new Date(data.taskDueDate);
    const dueDateMills = dueDateObject.getTime();
    const docRef = doc(db, "user", auth.currentUser.uid);
    const newTaskCollectionRef = doc(
      collection(docRef, "tasks"),
      `task${taskCards.length + 1}`
    );
    await setDoc(newTaskCollectionRef, {
      taskSubject: data.taskSubject,
      taskDescription: data.taskDescription,
      taskDueDate: data.taskDueDate,
      taskDueDateMills: dueDateMills,
    });
  };
  const getTasksData = async () => {
    const docRef = doc(db, "user", auth.currentUser.uid);
    const tasksCollectionRef = collection(
      db,
      "user",
      auth.currentUser.uid,
      "tasks"
    );
    const docSnap = await getDoc(docRef);
    const tasksDocSnap = await getDocs(tasksCollectionRef);

    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      console.log("Document data:", tasksDocSnap.data());
    } else {
      console.log("No such document!");
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
            <button onClick={newTaskToggle} className="newTaskBtn">
              New
            </button>
          </div>
        </nav>

        <div className="bodyParent">
          <div className="taskCardsParent">{taskCards}</div>
        </div>
      </div>
      <button onClick={getTasksData}>task data check</button>
      {/* <button onClick={newTaskToggle} className="test2" id="test2">
        toggle new task
      </button> */}
      {isNewTask && (
        <NewTaskPopup
          triggerNewTaskToggle={newTaskToggle}
          taskCardData={receivedTaskData}
        />
      )}
      <Signup />
    </>
  );
}
