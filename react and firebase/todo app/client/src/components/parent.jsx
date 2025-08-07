import { useState, useEffect } from "react";
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
  onAuthStateChanged,
  updateDoc,
  deleteDoc,
} from "../firebase";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icons } from "../fontawesome.jsx";

export default function Parent() {
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("user is signed in and uid is ==>", user.uid);
        getTasksData();
      } else {
        console.log("user is not signed in");
      }
    });
  }, []);
  const [isNewTask, setIsNewTask] = useState(false);
  const newTaskToggle = () => {
    setIsNewTask(!isNewTask);
    console.log(isNewTask);
  };

  const [taskData, setTaskData] = useState("");
  const [taskCards, setTaskCards] = useState([]);

  const receivedTaskData = async (data) => {
    const dueDateObject = new Date(data.taskDueDate);
    const dueDateMills = dueDateObject.getTime();
    const docRef = doc(db, "user", auth.currentUser.uid);
    const newTaskCollectionRef = doc(collection(docRef, "tasks"));
    await setDoc(newTaskCollectionRef, {
      taskID: newTaskCollectionRef.id,
      taskSubject: data.taskSubject,
      taskDescription: data.taskDescription,
      taskDueDate: data.taskDueDate,
      taskDueDateMills: dueDateMills,
    });
    getTasksData();
    console.log("data is sent successfully");
  };

  //
  // SEPARATION
  const getTasksData = async () => {
    const docRef = doc(db, "user", auth.currentUser.uid);
    const tasksCollectionRef = collection(docRef, "tasks");
    const docSnap = await getDoc(docRef);
    const tasksDocSnap = await getDocs(tasksCollectionRef);
    const dataCollectingArray = [];
    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      tasksDocSnap.forEach((doc) => {
        console.log(doc.id, "=>", doc.data());
        console.log(doc);
        dataCollectingArray.push(doc.data());
      });
      setTaskCards(dataCollectingArray);
      console.log("all task", taskCards);
    } else {
      console.log("No such document!");
    }
  };
  // getTasksData();

  //
  // SEPARATION
  const updateFunction = async () => {
    const docRef = doc(db, "user", auth.currentUser.uid);
    const tasksCollectionRef = collection(docRef, "tasks");
    const newTaskCollectionRef = doc(collection(docRef, "tasks"));
    await updateDoc();
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
          <div className="taskCardsParent">
            {taskCards.map((data, index) => {
              return (
                <div className="task" key={index}>
                  <div className="subjectParent">
                    <h3>{data.taskSubject}</h3>
                    <FontAwesomeIcon
                      icon={icons.threeDotsIcon}
                      color="black"
                      className="threeDotsIcon"
                    />
                  </div>
                  <div className="descriptionParent">
                    <p className="taskDesc">{data.taskDescription}</p>
                  </div>
                  <div className="dateParent">
                    <p className="dDDateHeading">Due Date:</p>
                    <p className="dDDate">{data.taskDueDate}</p>
                  </div>
                  <div className="upDelBtnContainer">
                    <button className="upDelBtn updateTask">Edit</button>
                    <br />
                    <button className="upDelBtn deleteTask">Delete</button>
                  </div>
                </div>
              );
            })}
          </div>
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
