const AllList = (props) => {
    return (<>

        {props.list.map((task, index) => <li key={index}>
            <p>{index + 1}. {task}.</p>
            <i className="material-icons btn" onClick={() => props.Ondelete(index)}>delete</i>
            <i onClick={() => props.Onedit(index)} className='fas fa-edit btn'></i>
        </li>)}
    </>)
}

export default AllList