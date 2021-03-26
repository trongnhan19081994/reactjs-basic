import React, { useState, useMemo } from 'react'

function CounterUseMemo() {
    const [counterOne, setCounterOne] = useState(0);
    const [counterTwo, setCounterTwo] = useState(0);
    const incrementOne = () => {
        setCounterOne(counterOne + 1);
    }
    const incrementTwo = () => {
        setCounterTwo(counterTwo + 1);
    }

    const isEven = useMemo(() => {
        let i = 0;
        while(i < 99999999) i++;
        return counterOne % 2 === 0;
    }, [counterOne]);

    return (
        <div>
            <br/>
            {isEven ? 'Even': 'odd'} <br/><br/>
            <button onClick={incrementOne}> Count One: {counterOne} </button>
            <br/><br/>
            <button onClick={incrementTwo}> Count Two: {counterTwo} </button>
        </div>
    )
}

export default CounterUseMemo
