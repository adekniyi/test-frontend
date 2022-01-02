import React,{ useState,useEffect} from 'react'
import { getQuizQuestions } from "../apis/apiCalls";
import { submitQuiz } from "../apis/apiCalls";
import { useHistory } from "react-router-dom";


var quiz_question = [
    {
        full_question: "who is the president of Nigeria",
        quiz_id: "61d063ea7aa3f76c933481c0",
        quizQuestion_id: "61d063ea7aa3f76c933481c1",
        quiz_questionOptions: [
            {
                option: "Niyi",
                quizQuestion_id: "61d063ea7aa3f76c933481c1",
                quizQuestionOption_id: "61d063eb7aa3f76c933481c2"
            },
            {
                option: "Neyo",
                quizQuestion_id: "61d063ea7aa3f76c933481c1",
                quizQuestionOption_id: "61d063eb7aa3f76c933481c3"
            },
            {
                option: "buhari",
                quizQuestion_id: "61d063ea7aa3f76c933481c1",
                quizQuestionOption_id: "61d063eb7aa3f76c933481c4"
            }
        ]
    },
    {
        full_question: "what is atom",
        quiz_id: "61d063ea7aa3f76c933481c0",
        quizQuestion_id: "61d063eb7aa3f76c933481c5",
        quiz_questionOptions: [
            {
                option: "stone",
                quizQuestion_id: "61d063eb7aa3f76c933481c5",
                quizQuestionOption_id: "61d063ec7aa3f76c933481c6"
            },
            {
                option: "smallest particle",
                quizQuestion_id: "61d063eb7aa3f76c933481c5",
                quizQuestionOption_id: "61d063ec7aa3f76c933481c7"
            },
            {
                option: "nothing",
                quizQuestion_id: "61d063eb7aa3f76c933481c5",
                quizQuestionOption_id: "61d063ec7aa3f76c933481c8"
            }
        ]
    },
    {
        full_question: "the greatest artist in african is",
        quiz_id: "61d063ea7aa3f76c933481c0",
        quizQuestion_id: "61d063ec7aa3f76c933481c9",
        quiz_questionOptions: [
            {
                option: "brymo",
                quizQuestion_id: "61d063ec7aa3f76c933481c9",
                quizQuestionOption_id: "61d063ed7aa3f76c933481ca"
            },
            {
                option: "wizkid",
                quizQuestion_id: "61d063ec7aa3f76c933481c9",
                quizQuestionOption_id: "61d063ed7aa3f76c933481cb"
            },
            {
                option: "davido",
                quizQuestion_id: "61d063ec7aa3f76c933481c9",
                quizQuestionOption_id: "61d063ed7aa3f76c933481cc"
            }
        ]
    },
    {
        full_question: "Nigeria is in",
        quiz_id: "61d063ea7aa3f76c933481c0",
        quizQuestion_id: "61d063ed7aa3f76c933481cd",
        quiz_questionOptions: [
            {
                option: "africa",
                quizQuestion_id: "61d063ed7aa3f76c933481cd",
                quizQuestionOption_id: "61d063ed7aa3f76c933481ce"
            },
            {
                option: "europe",
                quizQuestion_id: "61d063ed7aa3f76c933481cd",
                quizQuestionOption_id: "61d063ee7aa3f76c933481cf"
            },
            {
                option: "north america",
                quizQuestion_id: "61d063ed7aa3f76c933481cd",
                quizQuestionOption_id: "61d063ee7aa3f76c933481d0"
            }
        ]
    },
    {
        full_question: "prayer is",
        quiz_id: "61d063ea7aa3f76c933481c0",
        quizQuestion_id: "61d063ee7aa3f76c933481d1",
        quiz_questionOptions: [
            {
                option: "eat",
                "quizQuestion_id": "61d063ee7aa3f76c933481d1",
                "quizQuestionOption_id": "61d063ee7aa3f76c933481d2"
            },
            {
                option: "drink",
                quizQuestion_id: "61d063ee7aa3f76c933481d1",
                quizQuestionOption_id: "61d063ef7aa3f76c933481d3"
            },
            {
                option: "master key",
                quizQuestion_id: "61d063ee7aa3f76c933481d1",
                quizQuestionOption_id: "61d063ef7aa3f76c933481d4"
            }
        ]
    }
]



export default function Quiz() {
    const [data, setData] = useState([]);
  const [selectedCandidates, setSelectedCandidates] = useState([]);
  const History = useHistory()


    useEffect(() => {
        getQuizQuestions(setData);
      }, []);

      const setMultipleSelection = (option, e) => {
        // e.preventDefault();
        const { checked } = e.target;
          checked
            ? (() => {
                setSelectedCandidates([...selectedCandidates, option]);
              })()
            : (() => {
                const removedOption = selectedCandidates.filter(
                  ({ quizQuestionOption_id }) => quizQuestionOption_id !== option.quizQuestionOption_id
                );
                setSelectedCandidates([...removedOption]);
              })();
      };
    return (
        <div className="quiz-container">
        {
        data?.map((item,index)=>(
            <>
            <h5 key={item.quizQuestion_id}>{item.full_question}</h5>
            {
                item.quiz_questionOptions.map((option)=>(
                    <>
                        <input key={index}   onChange={(e) => setMultipleSelection(option, e)}
                    value={option}
                    type="checkbox"
                    id={option.quizQuestionOption_id} name="fav_language"/>
                        <label key={option.quizQuestionOption_id} for="html">{option.option}</label><br/>
                    </>
                ))
            }
            </>
        ))
        }

{/* <h5>What can you do to improve your posture?</h5>

            <input type="radio" id="html" name="fav_language" value="HTML"/>
  <label for="html">Stand up straight and tall</label><br/>
<input type="radio" id="css" name="fav_language" value="CSS"/>
  <label for="css">Stand up straight and tall</label><br/>
<input type="radio" id="js" name="fav_language" value="JS"/>
  <label for="js">Stand up straight and tall</label><br/> */}
                {/* <li>Stand up straight and tall</li>
                <li>Stand up straight and tall</li>
                <li>Stand up straight and tall</li> */}

<button
 onClick={() =>
    //console.log(selectedCandidates)
    submitQuiz(selectedCandidates,History)
  }
                type='button'
                >Next</button>
        </div>
    )
}
