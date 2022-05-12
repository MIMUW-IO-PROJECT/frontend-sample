import React from "react";
import { useLocation } from "react-router-dom";
import { types } from "../../questionTypes";

export const LinkPage = function () {
    const form = useLocation().state.form;
    const formId = form._id;

    // TODO! generowanie linku
    const generateLinkFillPage = () => {
        return `link_do_wypełniania_${formId}`;
    };
    // ---------

    const generateFormStatistics = () => {
        let stats = [];

        stats.push({
            name: "liczba pytań: ",
            value: form.questions.length,
        });

        // inicjujemy licznik zerami
        let typesCount = Object.fromEntries(
            Object.entries(types).map(([key]) => [key, 0])
        );

        // zliczamy pytania według typu
        for (const question of form.questions) {
            typesCount[question["type"]] += 1;
        }

        // dodajemy zawartość licznika do statystyk
        stats.push(
            ...Object.values(types).map((type) => {
                return {
                    name: `liczba pytań typu ${type}: `,
                    value: typesCount[type],
                };
            })
        );

        let wordCount = 0;

        for (const question of form.questions) {
            wordCount += question.question.split(/\s+/gm).length;
        }

        stats.push({
            name: "liczba słów w pytaniach: ",
            value: wordCount,
        });

        return stats;
    };

    const nameValue = form.name;
    const endDate = form.endDate;
    const fillLink = generateLinkFillPage();
    const stats = generateFormStatistics();

    // TODO: usunąć jak nie będzie już potrzebne
    console.log(form);
    console.log(stats);

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
            <div className="field formStats">
                {stats.map((b) => (
                    <div key={b.name}>{`${b.name} ${b.value}`}</div>
                ))}
            </div>
        </div>
    );
};
