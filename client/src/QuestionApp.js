import React, { useEffect, useState } from 'react';
//const API_URL = process.env.REACT_APP_API; // || 'localhost:4000';
//const API_URL = process.env.development.REACT_APP_API;
//const API_URL = 'localhost:4000';
//var proxyUrl = 'https://cors-anywhere.herokuapp.com/';

function QuestionApp() {
    const [data, setData] = useState([]);

    useEffect(() => {
        async function getData() {
            //const url = `${API_URL}/question`;
            //const url = '/question';
            const response = await fetch('http://localhost:4000/api/question');
            const data = await response.json();
            //const response = fetch(proxyUrl + url)
            //    .then(response => response.json())
            //    .then(data => console.log(data));
            //const data = await response.json();
            setData(data);
        }
        getData();
    }, []);

    return (
        <>
            <h1>Questions</h1>
            {data.map(question => {
        //return <p key={question._id}><h4>{question.title}</h4> {question.text}</p>;
            return <div key={question._id}><h4>{question.title}</h4><p>{question.text}</p></div>
            

      })}
            
        </>
    );
}

export default QuestionApp;