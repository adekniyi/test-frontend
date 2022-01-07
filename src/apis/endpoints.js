export const base_url = "https://take-test.herokuapp.com/";

const quizId = JSON.parse(localStorage.getItem("quizquestionId"));

export const endpoints = {
  getQuiz: `${base_url}quiz/${quizId}`,
  submitQuiz: `${base_url}quiz/submitquiz`,
  success: `/success/${quizId}`,
};