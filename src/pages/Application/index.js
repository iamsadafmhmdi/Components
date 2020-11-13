import React, { useState, useCallback } from "react";
import { Button, Dialog, TextInput, Checkbox } from "../../components";
import { Expenses } from "../splitWise/components";
import './index.css';

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
    const [showDialog, setShowDialog] = useState(false);
    const [costInput, setCostInput] = useState("");
    const [subjectInput, setSubjectInput] = useState("");
    const [expensesLastId, setExpensesLastId] = useState(0);
    const [deleted, setDeleted] = useState();
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
                return person.name === name ? { ...person, checked: event.target.checked } : person });    
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

    const onDeleteButtonClick = useCallback((expense) => {
        setShowDialog(true);
        setDeleted(expense);
    }, []);

    const onCancelButtonClick = useCallback(() => {
        setShowDialog(false);
    }, []);

    const onConfirmDeleteClick = useCallback(() => {
        setShowDialog(false);
        setExpenses(expenses.filter((element) => element.id !== deleted));
    }, [expenses, deleted]);

    return (
        <div>
            {showExpenses && (
                <Expenses
                    data={expenses}
                    people={checkboxValue}
                    deleteButton={onDeleteButtonClick}
            />)}
            <TextInput
                placeholder={"SUBJECT"}
                onChange={onSubjectChange}
                value={subjectInput}
                className='text-input'
            />
            <TextInput
                placeholder={"COST"}
                onChange={onCostChange}
                value={costInput}
                type="number"
                min="0"
                className='text-input'
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
            <Button onClick={handleButtonClick} label={"Submit"} />
            {showDialog && (
                <Dialog
                    header={"DELETE THE EXPENSE"}
                    description={"Do you want to delete this expense?"}
                    action={
                        <div>
                            <Button
                                label={"NO, CANCEL"}
                                onClick={onCancelButtonClick}
                            />
                            <Button
                                label={"YES, I DO."}
                                danger={true}
                                onClick={onConfirmDeleteClick}
                            />
                        </div>
                    }/>
            )}
        </div>
    );
};

export default App;
