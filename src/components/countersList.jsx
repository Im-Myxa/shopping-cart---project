import React,{useState} from "react";
import Counter from "./counter";

const CountersList = () => {
    const initialState = [
        {id: 0, value: 1, name: "Плинтус"},
        {id: 1, value: 2, name: "Угол внутренний"},
        {id: 2, value: 3, name: "Угол внешний"},
        {id: 3, value: 4, name: "Соединитель"},
        {id: 4, value: 0, name: "Торцевая пара"},
    ];

    const [counters, setCounters] = useState(initialState);

    const handleDelete = (id) => {
        const newCounter = counters.filter(count => count.id !== id);
        setCounters(newCounter);
    };

    const handleReset = () => {
        setCounters(initialState);
    };

    const handleIncrement = (id) => {
        setCounters(counters.map(count => {
            if (count.id === id) {
                count.value += 1
            }
            return count
        }));
    };

    const handleDecrement = (id) => {
        setCounters(counters.map(count => {
            if (count.id === id) {
                count.value -= 1
            }
            return count
        }));    
    };

    return (
        <>
            {counters.map(count => (
                <Counter
                    key={count.id}
                    {...count}
                    onDelete={handleDelete}
                    onIncrement={handleIncrement}
                    onDecrement={handleDecrement}
                />
            ))}
            <button className="btn btn-primary m-2 btn-sm" onClick={handleReset}>Сброс</button>
        </>
    )
}

export default CountersList;

