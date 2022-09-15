import React,{useState} from "react";
import Counter from "./counter";

const CountersList = () => {
    const initialState = [
        {id: 0, value: 0, name: "Плинтус"},
        {id: 1, value: 0, name: "Угол внутренний"},
        {id: 2, value: 0, name: "Угол внешний"},
        {id: 3, value: 0, name: "Соединитель"},
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

    const handleUpdeted = () => {
        const updetedState = [
            {id: 0, value: 1, name: "Плинтус"},
            {id: 1, value: 2, name: "Угол внутренний"},
            {id: 2, value: 3, name: "Угол внешний"},
            {id: 3, value: 4, name: "Соединитель"},
            {id: 4, value: 0, name: "Торцевая пара"},
        ];

        setCounters(updetedState)
    }

    return (
        <>
            {counters.map(count => (
                <Counter
                    key={count.id}
                    {...count}
                    onDelete={handleDelete}
                />
            ))}
            <button className="btn btn-primary m-2 btn-sm" onClick={handleReset}>Сброс</button>
            <button className="btn btn-primary m-2 btn-sm" onClick={handleUpdeted}>Обновить состояние</button>
        </>
    )
}

export default CountersList;

