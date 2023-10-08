import React, { useState, useEffect } from 'react'
import { store } from "../Store/store"
import { increment, decrement } from "../Store/action/CounterAction"
function CounterFunction() {
    const [counter, setCounter] = useState(0)


    useEffect(() => {
        updateState()
        store.subscribe(updateState)
    }, [])

    function updateState() {
        const state = store.getState(); // current state
        console.log(state)
        setCounter(state.counter)
    }

    const onIncrement = () => {//dispatch an action
        store.dispatch(increment())
    }

    const onDecrement = () => {

        store.dispatch(decrement())
    }
    return (
        <div>
            <h1>CounterFunction</h1>
            <h2>{counter}</h2>
            <div>
                <button onClick={onIncrement}>Increment</button>
                <button onClick={onDecrement}>Decrement</button>
            </div>
        </div>
    )
}

export default CounterFunction