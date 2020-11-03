import React, { useEffect, useState } from 'react';
//const API_URL = process.env.REACT_APP_API || 'localhost:4000/question';

function QuestionApp() {
    const [data, setData] = useState([]);

    useEffect(() => {
        async function getData() {
            //const url = `${API_URL}/question`;
            const url = '/question';
            const response = await fetch(url);
            const data = await response.json();
            setData(data);
        }
        getData();
    }, []);

    return (
        <>
            <h1>Questions</h1>
            
            
        </>
    );
}

export default QuestionApp;