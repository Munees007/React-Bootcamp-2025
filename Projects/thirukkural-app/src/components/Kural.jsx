import React from 'react'

import "./Kural.css"
export default function Kural({data}) {
  return (
   <div className="kural-card">
    <p className="kural-number">Kural Number: {data.number}</p>
    <h2 className="kural-adhiharam">{data.adhiharam.tamil}</h2>
    <p className="kural-iyal"><strong>Iyal:</strong> {data.iyal.tamil}</p>

    <div className="kural-lines">
        {data.kural.tamil.map((line, idx) => (
            <p key={idx} className="kural-line">"{line}"</p>
        ))}
    </div>

    <p className="kural-pal"><strong>Pal:</strong> {data.pal.tamil}</p>
    <p className="kural-meaning"><strong>Meaning:</strong> {data.meaning.tamil}</p>
</div>


  )
}
