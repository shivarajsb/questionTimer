import logo from './logo.svg';
import './App.css';
import Container from './Components/Container';
import { useEffect, useState } from 'react';
import Question from './Components/Question';
const _ = require('lodash');


const data = [
  {
    question: 1,
    text: "This is the first question"
  },
  {
    question: 2,
    text: "This is the second question"
  },

  {
    question: 3,
    text: "This is the third question"
  },

  {
    question: 4,
    text: "This is the fourth question"
  },

  {
    question: 5,
    text: "This is the fifth question"
  },

  {
    question: 6,
    text: "This is the sixth question"
  },

  {
    question: 7,
    text: "This is the seventh question"
  },
]

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(data[0]);
  const [currentTime, setCurrentTime] = useState(0);
  const [timedData, setTimedData] = useState([]);


  const setCurrentItem = (question) => {
    const currentData = data.filter(item => item.question == question)[0];
    setCurrentQuestion(currentData);
    /* Get the timing data for the currentQuestion */
    let prevTiming = parseInt(localStorage.getItem('time'));
    let prevQuestion = currentQuestion;
    let prevData = { time: prevTiming, question: prevQuestion.question };
    setTimedData(t => [prevData, ...t]);
    localStorage.setItem('time', 0);
    localStorage.setItem('currentQuestion', question);
    setCurrentTime(0);

  }


  var interval;
  useEffect(() => {
    const savedtime = parseInt(localStorage.getItem('time'));
    const currentQuestion = parseInt(localStorage.getItem('currentQuestion'));
    if (savedtime) {
      setCurrentTime(savedtime);
    }
    interval = setInterval(() => {
      setCurrentTime((t) => {
        let myTime = t + 100;
        localStorage.setItem('time', myTime);
        return myTime;
      });
    }, 100);
    if (currentQuestion) {
      let myQu = data.filter(item => item.question == currentQuestion)[0];
      setCurrentQuestion(myQu);
    }
  }, []);
  let grouped = _.groupBy(timedData, 'question');
  return (
    <div className="App">
      <div style={{ marginTop: 20 }}>
        <div>
          <Container question={currentQuestion || data[0]} />
          <p>{currentTime}</p>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div className="row">
            {data.map((item, index) => (
              <Question key={index} number={item.question} onClick={setCurrentItem} currentQuestion={currentQuestion.question} />
            ))}
          </div>
        </div>
      </div>

      <button onClick={() => {
        localStorage.clear('time');
        setCurrentTime(0);
        setTimedData([]);
      }}>Reset</button>
      <div>
        {Object.keys(grouped).map((item, index) => {
          let totalTime = grouped[item].reduce((a, c) => a + c.time, 0);
          return <div key={index}>
            {item}:{totalTime}
          </div>
        })}
      </div>
    </div>
  );
}

export default App;
