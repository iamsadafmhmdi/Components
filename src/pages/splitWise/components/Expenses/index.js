import React, { useCallback } from 'react';
import {Button} from '../../../../components';
import './index.css';


function Expenses({ 
    data, 
    people, 
    deleteButton 
}) {
    const Total = useCallback(() => {
        const total = {};
        Object.values(people).map(
            (person) => (total[person.name] = { id: person.id, cost: 0 })
        );
        const costs = data.map((expense) => expense.costs);
        costs.forEach((element) => {element.map((expense) => total[expense.name].cost += expense.portion);
        });   

        return (
            <div className='total'>
                <h1 className='head'>Total</h1>
                {Object.keys(total).map((name) => (
                    <p key={total[name].id}>
                        {name} : {total[name].cost}
                    </p>
                ))}
            </div>
        );
    },[data, people]) ;

    return (
        <div className='expenses-container'>
                {data.map((expense) => (
                    <p key={expense.id} className='expenses'>
                        <span className='subject'>{expense.subject.toUpperCase()}</span>
                        {expense.costs.map((person) => (
                            <span key={person.id}>
                                &nbsp;&nbsp; - {person.name}:{person.portion}
                            </span>
                        ))}
                        &nbsp;&nbsp;
                        <Button danger onClick={() => deleteButton(expense.id)}>DELETE</Button>
                    </p>
                ))}
            {Total()}
        </div>
    );
}

export default Expenses;
