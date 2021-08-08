import AllList from './AllList';
import './todolistlocalstorage.css'
import Usetodo from './Usetodo';

const Todolistlocalstorage = () => {

    const [addHandler,
        deleteHandler,
        editHandler,
        updateHandler,
        onEnter,
        entertaskRef,
        showupadte,
        showadd,
        newlist] = Usetodo();

    return (<>
        <h1>To do list</h1>

        <div className="input">
            <input type="text" ref={entertaskRef} onKeyDown={(event) => onEnter(event)} placeholder="Enter the task" />
        </div>

        <div className="buttons">
            {showadd && <button className="submit" onClick={addHandler}>Add</button>}
            {showupadte && <button className="submit" onClick={updateHandler}>Update</button>}
        </div>

        <ul>
            <AllList list={newlist} Ondelete={deleteHandler} Onedit={editHandler} />
        </ul>

    </>)
}

export default Todolistlocalstorage;