import React from 'react'
import './TodoItem.css'
import Checkbox from '@material-ui/core/Checkbox';
import { useDispatch } from 'react-redux';
import { setCheck } from '../features/todoSlice';

function TodoItem(props) {
    const { name, done, id } = props;
    const dispatch = useDispatch();
    const handleCheck = (e) => {
        dispatch(setCheck(id))
    }

    return (
        <div className="todoItem">
            <Checkbox
                checked={done}
                color='primary'
                onChange={handleCheck}
                inputProps={{ 'aria-label': 'secondaty checkbox' }}
            />
            <p className={done && 'todoItem--done'}> {name} </p>
        </div>
    )
}

export default TodoItem
