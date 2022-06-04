import React from "react";
import PropTypes from "prop-types";

import "charts.css";
import "../results.css";

export const Multi = (props) => {
    let statsCombined = [];
    for (let i = 0; i < props.answers.length; i++) {
        let answer = props.answers[i];
        let votes = props.votes[i];
        let size = props.sizes[i];
        statsCombined.push({
            answer: answer,
            votes: votes,
            size: size,
        });
    }
    console.log(statsCombined);
    return (
        <div className="multi_results">
            <table className="charts-css column show-labels data-spacing-10 label-spaceing-10">
                <caption>{props.question}</caption>
                <tbody>
                    {statsCombined.map((stat, index) => {
                        return (
                            <tr key={index}>
                                <th scope="row">{stat.answer}</th>
                                <td style={{ "--size": stat.size }}>
                                    <span className="data">{stat.votes}</span>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

Multi.propTypes = {
    question: PropTypes.string,
    answers: PropTypes.array,
    votes: PropTypes.array,
    sizes: PropTypes.array,
};
