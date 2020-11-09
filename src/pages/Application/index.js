import React, {useState, useCallback} from 'react';
import {Button, Dialog, Checkbox, TextInput} from '../../components/index';
import {Expenses} from '../splitWise/component';


const Persons = [
    {
        name: "A",
        id: "1",
        checked: false,
    },
    {
        name: "B",
        id: "2",
        checked: false,
    },
    {
        name: "C",
        id: "3",
        checked: false,
    },
];

function App() {
    const [checkboxValue, setCheckboxValue] = useState(Persons);
    const [expenses, setExpenses] = useState([]);
    const [costInput, setCostInput] = useState("");
    const [subjectInput, setSubjectInput] = useState("");
    const [expensesLastId, setExpensesLastId] = useState(0);
    const [showExpenses, setShowExpenses] = useState(false);
    const onCostChange = useCallback((event) => {
        setCostInput(parseInt(event.target.value));
    }, []);

    const onSubjectChange = useCallback((event) => {
        setSubjectInput(event.target.value);
    }, []);

    const handleCheckboxChange = useCallback(
        (event) => {
            const name = event.target.name;
            const update = checkboxValue.map((person) => {
                return person.name === name
                    ? { ...person, checked: event.target.checked } : person });
            setCheckboxValue(update);
        },
        [checkboxValue]
    );

    const number = checkboxValue.filter((checkbox) => checkbox.checked).length;
    const checkedPersons = () => {
        return checkboxValue
            .filter((checkbox) => checkbox.checked)
            .map((person) => {
                return {
                    id: person.name,
                    name: person.name,
                    portion: costInput / number,
                };
            });
    };

    const handleButtonClick = () => {
        setShowExpenses(true);
        const updated = [...expenses];
        updated.push({
            id: expensesLastId,
            subject: subjectInput,
            costs: checkedPersons(),
        });
        setExpensesLastId(expensesLastId + 1);
        setCostInput("");
        setSubjectInput("");
        setExpenses(updated);
    };

    return(
        <div>
            <TextInput
                placeholder={"SUBJECT"}
                onChange={onSubjectChange}
                value={subjectInput}
            />
            <TextInput
                placeholder={"COST"}
                onChange={onCostChange}
                value={costInput}
                type="number"
                min="0"
            />
            {checkboxValue.map((checkbox) => {
                return (
                    <Checkbox
                        children={checkbox.name}
                        onChange={handleCheckboxChange}
                        key={checkbox.id}
                        checked={checkbox.checked}
                    />
                );
            })}
            <Button onClick={handleButtonClick} children={"Submit"} />
        </div>
    )
}
    

export default App;
