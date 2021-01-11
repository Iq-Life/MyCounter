import React, {useState} from 'react';
import './App.css';
import Counter from "./Counter";
import Set from "./Set";

function App() {
    const [collapsed, unCollapsed] = useState<boolean>(true)
    return (
        <div className="App">
            <header className="App-header">
                <Counter onClick={unCollapsed} collapsed={collapsed}/>
                {!collapsed === false && <Set />}
            </header>
        </div>
    );
}

export default App;