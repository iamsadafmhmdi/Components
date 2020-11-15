import React, { useState, useCallback, useMemo } from 'react';
import { Button, Dialog, TextInput, Checkbox } from '../../components';
import { Expenses } from '../splitWise/components';


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
    const [expenses, setExpenses] = useState([]);
    const [showDialog, setShowDialog] = useState(false);
    const [costInput, setCostInput] = useState('');
    const [subjectInput, setSubjectInput] = useState('');
    const [expensesLastId, setExpensesLastId] = useState(0);
    const [deleted, setDeleted] = useState();
    const [showExpenses, setShowExpenses] = useState(false);
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

    const number = checkboxValue.filter((checkbox) => checkbox.checked).length;
    const checkedPersons = useMemo(() => checkboxValue
            .filter((checkbox) => checkbox.checked)
            .map((person) => {
                return {
                    id: person.name,
                    name: person.name,
                    portion: costInput / number,
                };
            }),[checkboxValue, costInput, number]) ;

    const handleButtonClick = useCallback(() => {
        setShowExpenses(true);
        const updated = [...expenses];
        updated.push({
            id: expensesLastId,
            subject: subjectInput,
            costs: checkedPersons,
        });
        setExpensesLastId(prevState => prevState + 1);
        setCostInput('');
        setSubjectInput('');
        setExpenses(updated);
    },[checkedPersons, expenses, subjectInput,expensesLastId]);

    const handleDeleteButtonClick = useCallback((expense) => {
        setShowDialog(true);
        setDeleted(expense);
    }, []);

    const handleCancelButtonClick = useCallback(() => {
        setShowDialog(false);
    }, []);

    const handleConfirmDeleteClick = useCallback(() => {
        setShowDialog(false);
        setExpenses(expenses.filter((element) => element.id !== deleted));
    }, [expenses, deleted]);

    return (
        <div>
            {showExpenses && (
                <Expenses
                    data={expenses}
                    people={checkboxValue}
                    deleteButton={handleDeleteButtonClick}
            />)}
            <TextInput
                placeholder='SUBJECT'
                onChange={handleSubjectChange}
                value={subjectInput}
            />
            <TextInput
                placeholder='COST'
                onChange={handleCostChange}
                value={costInput}
                type='number'
                min='0'
            />
            {checkboxValue.map((checkbox) =>
                    <Checkbox
                        label={checkbox.name}
                        onChange={handleCheckboxChange}
                        key={checkbox.id}
                        checked={checkbox.checked}
                    />
                )}
            <Button onClick={handleButtonClick}>SUBMIT</Button>
            {showDialog && (
                <Dialog
                    header='DELETE THE EXPENSE'
                    description='Do you want to delete this expense?'
                    action={
                        <div>
                            <Button onClick={handleCancelButtonClick}>No, CANCEL</Button>
                            <Button danger onClick={handleConfirmDeleteClick}>YES, I DO</Button>
                        </div>
                    }/>
            )}
        </div>
    );
};

export default App;
