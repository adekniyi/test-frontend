import axios from "axios";
import { endpoints } from "./endpoints";
import { handleErrors } from "./sharedUtils";



export const getQuizQuestions = (setData) => {
    axios
      .get(`${endpoints.getQuiz}`)
      .then((data) => {
        setData(data.data.quiz_question);
        console.log(data.data);
      })
      .catch((err) => {
        console.log(err.response);
        handleErrors(err);
      });
  };

  export const submitQuiz = (payload = [{}],History) => {
    let answerList = [];
    payload.forEach(({ quizQuestionOption_id, quizQuestion_id }) => {
        answerList.push({
        quizQuestion_id : quizQuestion_id,
        answer:quizQuestionOption_id,
      });
    });
    axios
      .post(`${endpoints.submitQuiz}`, answerList)
      .then((data) => {
        console.log(data);
        localStorage.setItem("score", JSON.stringify(data.data));
        History.push(endpoints.success)
      })
      .catch((err) => {
        handleErrors(err);
      });
  };