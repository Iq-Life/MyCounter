import React, {useState} from 'react';
import './App.css';
import Counter from "./Counter";
import Set from "./Set";

function App() {
    let startCount = 0

    const [count, setCount] = useState(startCount)
    const [maxNumb, setMaxNumb] = useState<number>(5)
    const [collapsed, unCollapsed] = useState<boolean>(false)

    return (
        <div className="App">
            <header className="App-header">
                <Counter onClick={unCollapsed}
                         collapsed={collapsed}
                         maxNumb={maxNumb}
                         count={count}
                         setCount={setCount}
                         startCount={startCount}

                />
                {collapsed && <Set maxNumb={maxNumb}
                                   setMaxNumb={setMaxNumb}
                                   setCount={setCount}
                                   startCount={startCount}
                />}
            </header>
        </div>
    );
}

export default App;