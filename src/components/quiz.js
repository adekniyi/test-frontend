import React,{ useState,useEffect} from 'react'
import { getQuizQuestions } from "../apis/apiCalls";
import { submitQuiz } from "../apis/apiCalls";
import { useHistory } from "react-router-dom";
import ReactPaginate from 'react-paginate';
import { useParams } from "react-router-dom";



export default function Quiz() {
    const [data, setData] = useState([]);
  const [selectedCandidates, setSelectedCandidates] = useState([]);
  const [selectedCandidate, setSelectedCandidate] = useState({});
  const [pageNumber,setPageNumber] = useState(0);
  const params = useParams(); 
  localStorage.setItem("quizquestionId", JSON.stringify(params.quiz_id));


  const questionPerPage = 1;
  const pageVisited = questionPerPage * pageNumber;
  const pageCount = Math.ceil(data.length / questionPerPage)
  const changePage =({selected})=>{
      setPageNumber(selected);
  }

  const History = useHistory()


    useEffect(() => {
        getQuizQuestions(setData);
      }, []);

      const setMultipleSelection = (option, e) => {
        // e.preventDefault();
        const { checked } = e.target;
          checked
            ? (() => {
                setSelectedCandidate(option)
                const removedOption = selectedCandidates.filter(
                  ({ quizQuestion_id }) => quizQuestion_id !== option.quizQuestion_id
                );
                console.log(removedOption)
                //setSelectedCandidates(selectedCandidates.pop(removedOption));
                setSelectedCandidates([...removedOption, option]);
              })()
            : (() => {
                const removedOption = selectedCandidates.filter(
                  ({ quizQuestionOption_id }) => quizQuestionOption_id !== option.quizQuestionOption_id
                );
                setSelectedCandidates([...removedOption]);
              })();
      };

      const displayQuestions = data
                        ?.slice(pageVisited,pageVisited+questionPerPage)
                        .map((question, index) =>{
                        return (
                            <>
                                 <>
            <h5 key={question.quizQuestion_id}><span className="quiz-zpan-question">{pageNumber+1}.</span> {question.full_question}</h5>
            {
                question.quiz_questionOptions.map((option)=>(
                    <>
                        <input key={index}   
                        //onChange={(e) => setSelectedCandidate(option)}
                        onChange={(e) => setMultipleSelection(option, e)}
                    value={selectedCandidate}
                    type="checkbox"
                    id={option.quizQuestionOption_id} 
                    checked={selectedCandidate?.quizQuestionOption_id === option.quizQuestionOption_id}
                    //     checked={selectedCandidates?.some(
                    //   ({ quizQuestionOption_id }) => quizQuestionOption_id === option.quizQuestionOption_id
                    // )}
                    //name="fav_language"
                    />
                        <label key={option.quizQuestionOption_id} htmlFor={option.quizQuestionOption_id}>{option.option}</label><br/>
                    </>
                ))
            }
            </>
                            </>
                        ) 
                        })
    
  const isLastPage = displayQuestions.length !== questionPerPage || pageVisited+questionPerPage === data.length;
    
    return (
        <div className="quiz-container">
          <div className="quiz-timer">
            <h2>Time</h2><p> :30min</p>
          </div>
        {displayQuestions}
        <ReactPaginate
        previousLabel={"previous"}
        nextLabel={"next"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"paginationBttns"}
        previousLinkClassName={"previousBttn"}
        nextLinkClassName={"nextBttn"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
        />
                {console.log(isLastPage)}

            {isLastPage ?
             <div className="subhome-btn">
                <button
                className="btn"
                onClick={() =>
                   //console.log(selectedCandidates)
                   submitQuiz(selectedCandidates,History)
                 }type='button'>Submit</button>
              </div>
                 : null
            }
        </div>
    )
}
