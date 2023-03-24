import logo from './logo.svg';
import React, {useState} from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
function App(){
    const [count, setCount] = useState(0);
    return (
        <div className="App">
        <Header />
        <h1>Counter: {count}</h1>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
        <Footer />
        </div>
    );
}