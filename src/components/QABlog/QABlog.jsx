import React, { useEffect, useState } from 'react';
import './QABlog.css'

const QABlog = () => {
    const [qnas, setQna] = useState([]);
    useEffect( () => {
        const loadQna = async () =>{
            const resp = await fetch('qna.json')
            const data = await resp.json()
            setQna(data.qna)
        }
        loadQna()
        }, [])

    return (
        <div>
            <div className='qa-div'>
            <h1>Q & A related React JS</h1>
                <div>
                    {qnas.map(qna => <Qna qna= {qna} key={qna.index}></Qna>)}
                </div>
            </div>
        </div>
    );
};

const Qna = ({qna}) =>{
    return (
        <div className="question">
            <h3>{qna.index}. {qna.question}</h3>
            <p>{qna.answer}</p>
        </div>
    );
}

export default QABlog;