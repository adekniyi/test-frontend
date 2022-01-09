import React,{ useState,useEffect} from 'react'
import { getQuizQuestions } from "../apis/apiCalls";
import { submitQuiz } from "../apis/apiCalls";
import { useHistory } from "react-router-dom";
import ReactPaginate from 'react-paginate';
import { useParams } from "react-router-dom";




export default function Quiz() {
    const [data, setData] = useState([]);
    const [newData, setNewData] = useState([]);
  const [selectedCandidates, setSelectedCandidates] = useState([]);
  const [selectedCandidate, setSelectedCandidate] = useState({});
  const [pageNumber,setPageNumber] = useState(0);
  const params = useParams(); 
  const [counter, setCounter] = useState(5)

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
        // let shuffled = data
        // ?.map((value) => ({ value, sort: Math.random() }))
        // .sort((a, b) => a.sort - b.sort)
        // .map(({ value }) => value)
        // setData(shuffled)  
      }, []);

      useEffect(() => {
        let shuffled = data
        ?.map((value) => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value)

        setNewData(shuffled)  
      }, [data]);

      useEffect(() => {
        let interval = null;
        if(!(counter <=0))
        {
          interval  = setTimeout(() => {
            setCounter(counter-1)
          }, 100000);
        } else {
          clearInterval(interval);
          localStorage.setItem("score", JSON.stringify("0"));
          History.push("/success/"+params.quiz_id)
        }
        return () => {
          clearInterval(interval);
        };
      }, [counter,History,params.quiz_id]);


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

      const displayQuestions = newData
                        ?.slice(pageVisited,pageVisited+questionPerPage)
                        .map((question, index) =>{
                        return (
                            <>
                                 <>
            <h5 key={question.quizQuestion_id}><span className="quiz-zpan-question">{pageNumber+1}.</span> {question.full_question}</h5>
            {
                question.quiz_questionOptions.map((option)=>(
                    <div>
                        <input key={index}   
                        //onChange={(e) => setSelectedCandidate(option)}
                        onChange={(e) => setMultipleSelection(option, e)}
                        className="quiz-option-container"
                    value={selectedCandidate}
                    type="checkbox"
                    id={option.quizQuestionOption_id} 
                    checked={selectedCandidate?.quizQuestionOption_id === option.quizQuestionOption_id}
                    //     checked={selectedCandidates?.some(
                    //   ({ quizQuestionOption_id }) => quizQuestionOption_id === option.quizQuestionOption_id
                    // )}
                    //name="fav_language"
                    />
                        <label className="quiz-option-container" key={option.quizQuestionOption_id} htmlFor={option.quizQuestionOption_id}>{option.option}</label><br/>
                    </div>
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
            <h2>Time</h2><p> :{counter}min</p>
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

            {isLastPage && (counter>0) ?
             <div className="subhome-btn">
                <button
                className="btn"
                onClick={() =>
                   //console.log(selectedCandidates)
                   submitQuiz(selectedCandidates,History)
                 }type='button'>Submit</button>
              </div>
                 :null
            }
        </div>
    )
}
