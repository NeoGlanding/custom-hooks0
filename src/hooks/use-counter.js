import React from 'react'
import { useState } from 'react';

const useCounter = (forward = true ,startValue = 0) => {
    let [counter, setCounter] = useState(startValue);

    let onClick = () => {
        if (forward) {
            setCounter(state => state + 1)
        } else {
            setCounter(state => state - 1)
        }
    }

    return {
        onClick, counter
    };
}

export default useCounter

