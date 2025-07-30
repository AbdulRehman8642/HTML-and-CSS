import { useState } from "react";
import "./Chatbot.css";
import { FAQs, FAQsAnswers } from "./chatbotData";

export default function Chatbot() {
  const [answerDiv, setAnswerDiv] = useState([]);

  function messageReply(inputValue) {
    Object.keys(FAQs).forEach((key) => {
      if (inputValue === FAQs[key]) {
        // {setTimeout(() => {
            
            setAnswerDiv((previousAnswer) => [
              ...previousAnswer,
              <>
                <div className="chatQuestionParent">
                  <div className="chatQuestion" key={"question" + answerDiv.length}>
                    {FAQs[key]}
                  </div>
                </div>

                <div className="chatAnswerParent">
                  <div className="chatAnswer" key={"reply" + answerDiv.length}>
                    {FAQsAnswers[key]}
                  </div>
                </div>
              </>,
            ]);
        // }, 1000);}
      }
      else if (inputValue !== FAQs[key]){
        console.log("empty")
      }
    });
  }

  function messageSend(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      const input = document.getElementById("input").value;
        
      if(input !== ""){
        messageReply(input);
        document.getElementById("input").value = "";
      }
    }
  }

  return (
    <>
      <div className="mainContainer">
        <div className="textContainer">
          <textarea
            placeholder="Ask Anything"
            onKeyDown={messageSend}
            className="inputField"
            id="input"
          ></textarea>
        </div>
        <div className="chatContainer">{answerDiv}</div>
      </div>
    </>
  );
}
