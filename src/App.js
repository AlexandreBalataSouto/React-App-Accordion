import React, { useState, useEffect } from "react";
import "./App.css";
import data from "./data";

function App() {
  function toggleText(e) {
    const question = e.target.closest(".question");
    let questionInfo = question.querySelector(".question_info");

    if (questionInfo.style.maxHeight) {
      questionInfo.style.maxHeight = null;
    } else {
      questionInfo.style.maxHeight = questionInfo.scrollHeight + "px";
    }

    // question.querySelector(".question_info").style.display =
    //   question.querySelector(".question_info").style.display == "block"
    //     ? "none"
    //     : "block";
  }

  return (
    <article className="container">
      <h3 className="text">Questions And Answers About Login</h3>
      <section>
        {data.map((item) => {
          return (
            <div className="question" key={item.id}>
              <div className="question_title">
                <h3>{item.title}</h3>
                <button onClick={toggleText} className="question_button">
                  +
                </button>
              </div>
              <div className="question_info">
                <p>{item.info}</p>
              </div>
            </div>
          );
        })}
      </section>
    </article>
  );
}

export default App;
