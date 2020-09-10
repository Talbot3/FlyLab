import React from "react";
export const Numbers = ({ persons }) => {
    return (
        <div>
            <hl>Numbers</hl>
            {persons.map((person, i) => (
                <div key={i}>
                    <li>
                        {person.name} &nbsp;
            <span>{person.number}</span>
                    </li>
                </div>
            ))}
        </div>
    );
};