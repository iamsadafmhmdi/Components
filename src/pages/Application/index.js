import React, {useState, useCallback} from 'react';
import {Button, Checkbox, TextInput} from '../../components';


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
    const [costInput, setCostInput] = useState("");
    const [subjectInput, setSubjectInput] = useState("");
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
                return person.name === name ? { ...person, checked: event.target.checked } : person });  
            setCheckboxValue(update);
        },
        [checkboxValue]
    );

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
                        label={checkbox.name}
                        onChange={handleCheckboxChange}
                        key={checkbox.id}
                        checked={checkbox.checked}
                    />
                );
            })}
            <Button label="Submit"/>
        </div>
    );
};

export default App;
