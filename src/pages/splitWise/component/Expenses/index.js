import React from "react";
import {Button} from "../../../../components";


function Expenses({data, deleteButton}) {
    return (
        <div>
            <div>
                {data.map((expense) => (
                    <p key={expense.id}>
                        <span>{expense.subject.toUpperCase()}</span>
                        {expense.costs.map((person) => (
                            <span key={person.id}>
                                &nbsp;&nbsp; - {person.name}:{person.portion}
                            </span>
                        ))}
                        &nbsp;&nbsp;
                        <Button
                            children={"Delete"}
                            danger={true}
                            onClick={() => deleteButton(expense.id)}
                        />
                    </p>
                ))}
            </div>
        </div>
    );
}

export default Expenses;
