import React, { useState, useCallback } from 'react';
import { Button, TextInput, Checkbox } from '../../components';


const Persons = [
    {
        name: 'A',
        id: '1',
        checked: false,
    },
    {
        name: 'B',
        id: '2',
        checked: false,
    },
    {
        name: 'C',
        id: '3',
        checked: false,
    },
];

function App() {
    const [checkboxValue, setCheckboxValue] = useState(Persons);
    const [costInput, setCostInput] = useState('');
    const [subjectInput, setSubjectInput] = useState('');
    const handleCostChange = useCallback((event) => {
        setCostInput(parseInt(event.target.value));
    }, []);

    const handleSubjectChange = useCallback((event) => {
        setSubjectInput(event.target.value);
    }, []);

    const handleCheckboxChange = useCallback((event) => {
            const name = event.target.name;
            const update = checkboxValue.map((person) => person.name === name
                ? { ...person, checked: event.target.checked } 
                : person );    
            setCheckboxValue(update);
        },[checkboxValue]);

    return (
        <div>
            <TextInput
                placeholder='SUBJECT'
                onChange={handleSubjectChange}
                value={subjectInput}
                className='text-input'
            />
            <TextInput
                placeholder='COST'
                onChange={handleCostChange}
                value={costInput}
                type='number'
                min='0'
                className='text-input'
            />
            {checkboxValue.map((checkbox) =>
                    <Checkbox
                        label={checkbox.name}
                        onChange={handleCheckboxChange}
                        key={checkbox.id}
                        checked={checkbox.checked}
                    />
                )}
            <Button>SUBMIT</Button>
        </div>
    );
};

export default App;
