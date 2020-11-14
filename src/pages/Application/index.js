import React, {useState, useCallback} from 'react';
import {Button, Dialog} from '../../components';


function App() {
    const [showDialog, setShowDialog] = useState(false);
    const handleClickButton = useCallback(() => {
        setShowDialog(true);
    }, []);

    return(
        <div>
            <Button onClick={handleClickButton}>Click</Button>
            {showDialog && <Dialog
                header={'this is header'}
                description={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti quasi deserunt vitae \
                suscipit assumenda qui nobis corrupti magni culpa. Obcaecati voluptatem exercitati onem consectetur deserunt ullam officia adip isci cumque sequi accusamus.`}
                action={
                    <div>
                        <Button>Confirm</Button>
                        <Button disabled={true} danger={true}>Cancel</Button>
                    </div>
                }/>}
        </div>
    );
};

export default App;
