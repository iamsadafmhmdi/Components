import React from "react";
import {Button} from "../../../../components";


function Expenses({data}) {
    return (
        <div className='expenses-container'>
            <div>
                {data.map((expense) => (
                    <p key={expense.id} className='expenses'>
                        <span className='subject'>{expense.subject.toUpperCase()}</span>
                        {expense.costs.map((person) => (
                            <span key={person.id}>
                                &nbsp;&nbsp; - {person.name}:{person.portion}
                            </span>
                        ))}
                    </p>
                ))}
            </div>
        </div>
    );
}

export default Expenses;
