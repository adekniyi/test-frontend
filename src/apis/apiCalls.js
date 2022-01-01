import axios from "axios";
import { endpoints } from "./endpoints";
import { handleErrors } from "./sharedUtils";



export const getQuizQuestions = (setData) => {
    axios
      .get(`${endpoints.getQuiz}`)
      .then((data) => {
        setData(data);
        console.log(data);
      })
      .catch((err) => {
        console.log(err.response);
        handleErrors(err);
      });
  };