import React, {useState, useCallback} from 'react';
import {Button, TextInput, Checkbox} from '../../components';


const Persons = [
    {
        name: 'A',
        id: '1',
    },
    {
        name: 'B',
        id: '2',
    },
    {
        name: 'C',
        id: '3',
    },
];

function App() {
    const [checkboxesValue, setCheckboxesValue] = useState(Persons.map(({id}) => ({
        id,
        checked: false,
    })));
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
            const update = checkboxesValue.map((person) => person.name === name
                ? { ...person, checked: event.target.checked } 
                : person );    
            setCheckboxesValue(update);
        },[checkboxesValue]);

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
            {checkboxesValue.map(({checked, id}) =>
                    <Checkbox
                        label={Persons.find(person=> person.id === id).name}
                        onChange={handleCheckboxChange}
                        key={id}
                        checked={checked}
                    />
                )}
            <Button>SUBMIT</Button>
        </div>
    );
};

export default App;
