import React, {useState} from 'react';
import './App.css';
import Counter from "./Counter";
import Set from "./Set";

function App() {
    const [collapsed, unCollapsed] = useState<boolean>(false)
    const [count, setCount] = useState(0)
    const [maxNumb, setMaxNumb] = useState<number>(5)
    const [inputStartNumb, setInputStartNumb] = useState<number>(0)
    return (
        <div className="App">
            <header className="App-header">
                <Counter onClick={unCollapsed}
                         collapsed={collapsed}
                         maxNumb={maxNumb}
                         count={count}
                         setCount={setCount}
                />
                {collapsed && <Set maxNumb={maxNumb}
                                   setMaxNumb={setMaxNumb}
                                   setCount={setCount}
                                   inputStartNumb={inputStartNumb}
                                   setInputStartNumb={setInputStartNumb}
                />}
            </header>
        </div>
    );
}

export default App;