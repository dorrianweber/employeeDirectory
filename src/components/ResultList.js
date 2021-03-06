import React from "react";

function ResultList(props) {
    return (
        <ul className="list-group">
            {props.results.map(result => (
                <li className="list-group-item" key={result.id}>
                    <p>{result.name.first} {result.name.last}</p>
                </li>
            ))}
        </ul>
    );
}

export default ResultList;