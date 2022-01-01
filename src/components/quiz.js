import React from 'react'

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
    return (
        <div className="quiz-container">
        {
        quiz_question.map((item)=>(
            <>
            <h5>{item.full_question}</h5>
            {
                item.quiz_questionOptions.map((option)=>(
                    <>
                        <input type="radio" id="html" name="fav_language" value="HTML"/>
                        <label for="html">{option.option}</label><br/>
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
                type='button'
                >Next</button>
        </div>
    )
}
