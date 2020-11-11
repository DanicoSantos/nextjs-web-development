import { useState } from 'react';

export default function Home() {
    return (
        <>
            <h2>Home 2</h2>
            <Counter />
        </>
    );

}

function Counter() {
    const [counter, setCounter] = useState(1);

    const addCounter = () => {
        setCounter(counter + 1);
    }

    return (
        <>
            <div>{counter}</div>
            <button onClick={addCounter}>Adicionar</button>
        </>
    )
}