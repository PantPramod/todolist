import { useRef, useState, useEffect } from 'react';

const Usetodo = () => {
    const entertaskRef = useRef("");
    const [newlist, setnewList] = useState([]);
    const [index, setIndex] = useState(-1);

    useEffect(() => {
        show();
    }, [])



    const [showadd, setShowadd] = useState(true);
    const [showupadte, setShowupdate] = useState(false);


    const addHandler = () => {

        const prevList = localStorage.getItem('list');
        const enteredTask = entertaskRef.current.value;
        if (enteredTask === "")
            return;
        if (prevList !== null) {
            localStorage.setItem('list', `${prevList}, ${enteredTask}`)
        } else {
            localStorage.setItem('list', `${enteredTask}`)
        }

        entertaskRef.current.value = "";
        show();
    }

    const show = () => {

        if (localStorage.getItem('list') !== null) {
            let displaylist = localStorage.getItem('list').split(',')
            setnewList([...displaylist]);
        }
        if (localStorage.getItem('list') === '') {
            setnewList([]);
            localStorage.removeItem('list');
        }
        entertaskRef.current.focus();
    }

    const deleteHandler = (index) => {

        const coppiedlist = newlist
        coppiedlist.splice(index, 1);
        localStorage.setItem('list', `${coppiedlist}`)
        show();
    }

    const editHandler = (index) => {

        entertaskRef.current.value = newlist[index]
        setIndex(index);
        setShowupdate(true);
        setShowadd(false);
        entertaskRef.current.focus();
    }

    const updateHandler = () => {

        const coppiedlist = newlist;
        coppiedlist[index] = entertaskRef.current.value;
        localStorage.setItem('list', `${coppiedlist}`)
        entertaskRef.current.value = "";

        setShowadd(true);
        setShowupdate(false);
        show();
    }

    const onEnter = (event) => {
        if (event.keyCode === 13 && showupadte) {
            updateHandler();
        }
        if (event.keyCode === 13 && showadd) {
            addHandler();
        }

    }
    return [addHandler, deleteHandler, editHandler, updateHandler, onEnter, entertaskRef, showupadte, showadd, newlist]
}


export default Usetodo;