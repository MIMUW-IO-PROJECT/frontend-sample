import React from "react";
import { useLocation } from "react-router-dom";

import { useSelector } from "react-redux";
import { useState } from "react";

export const LinkPage = function () {
    const { formId } = useLocation();

    // TODO! pobieranie z backendu i ustawianie 'form'
    // to na razie działa i symuluje czekanie
    const form = useSelector((state) => state);
    const [formStats, setFormStats] = useState([]);
    const getForm = async () => {
        await new Promise((r) => setTimeout(r, 1000));
    };
    getForm();

    // TODO! generowanie linku
    const generateLinkFillPage = () => {
        return `link_do_wypełniania_${formId}`;
    };
    // ---------

    const generateFormStatistics = () => {
        let stats = [];
        stats = [
            ...stats,
            {
                stat_id: stats.length + 1,
                "liczba pytań: ": form.questions.length,
            },
        ];

        let typesCount = { OPEN: 0, SINGLE: 0, MULTI: 0 };
        for (let i in form.questions) {
            let question = form.questions[i];
            typesCount[question["type"]] += 1;
        }

        stats = [
            ...stats,
            { stat_id: stats.length + 1, "liczba pytań: ": typesCount },
        ];

        let wordCount = 0;
        for (let i in form.questions) {
            let question = form.questions[i];
            wordCount += question.question.length;
        }

        stats = [
            ...stats,
            { stat_id: stats.length + 1, "liczba słów: ": wordCount },
        ];

        return stats;
    };

    const nameValue = form.name;
    const endDate = form.endDate;
    // const endDate = form.endDate;
    const fillLink = generateLinkFillPage();
    const stats = generateFormStatistics();
    setFormStats(stats);
    console.log(form);
    console.log(formStats);
    return (
        <div className="survey">
            <div className="title field">Pomyślnie utworzono nową ankietę!</div>
            <div className="field nameField">
                <span autoFocus id="nameDisplay" type="text">
                    {nameValue}
                </span>
            </div>

            <div className="title field">link do wypełniania</div>
            <div className="field linkField">
                <span autoFocus id="linkDisplay" type="text">
                    {fillLink}
                </span>
                <button
                    id="linkCopyButton"
                    onClick={() => navigator.clipboard.writeText(fillLink)}
                >
                    kopiuj
                </button>
            </div>

            <div className="title field">
                Data końca ankiety w formacie RRRR-MM-DD.
            </div>
            <div className="field endDateField">
                <span autoFocus id="endDateInput" type="text">
                    {endDate}
                </span>
            </div>
        </div>
    );
};
