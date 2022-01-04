import React,{ useState,useEffect} from 'react'
import { getQuizQuestions } from "../apis/apiCalls";
import { submitQuiz } from "../apis/apiCalls";
import { useHistory } from "react-router-dom";
import ReactPaginate from 'react-paginate';



export default function Quiz() {
    const [data, setData] = useState([]);
  const [selectedCandidates, setSelectedCandidates] = useState([]);
  const [selectedCandidate, setSelectedCandidate] = useState({});
  const [pageNumber,setPageNumber] = useState(0);

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
                setSelectedCandidates([...selectedCandidates, option]);
              })()
            : (() => {
                const removedOption = selectedCandidates.filter(
                  ({ quizQuestionOption_id }) => quizQuestionOption_id !== option.quizQuestionOption_id
                );
                setSelectedCandidate({})
                setSelectedCandidates([...removedOption]);
              })();
      };

      const displayQuestions = data
                        ?.slice(pageVisited,pageVisited+questionPerPage)
                        .map((question, index) =>{
                        return (
                            <div className="quiz-container">
                                 <>
            <h5 key={question.quizQuestion_id}>{question.full_question}</h5>
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
                            </div>
                        ) 
                        })
    
  const isLastPage = displayQuestions.length !== questionPerPage || pageVisited+questionPerPage === data.length;
    
    return (
        <>
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
                <button
                className="btn"
                onClick={() =>
                   console.log(selectedCandidates)
                   //submitQuiz(selectedCandidates,History)
                 }type='button'>Submit</button>: null
            }
        </>
//         <div className="quiz-container">
//         {
//         data?.map((item,index)=>(
//             <>
//             <h5 key={item.quizQuestion_id}>{item.full_question}</h5>
//             {
//                 item.quiz_questionOptions.map((option)=>(
//                     <>
//                         <input key={index}   onChange={(e) => setSelectedCandidate(option)}
//                     value={selectedCandidate}
//                     type="checkbox"
//                     id={option.quizQuestionOption_id} 
//                     checked={selectedCandidate?.quizQuestionOption_id === option.quizQuestionOption_id}
//                     //name="fav_language"
//                     />
//                         <label key={option.quizQuestionOption_id} htmlFor={option.quizQuestionOption_id}>{option.option}</label><br/>
//                     </>
//                 ))
//             }
//             </>
//         ))
//         }

//         </div>
    )
}
