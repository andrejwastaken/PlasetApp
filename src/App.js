import React from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from "./pages/Home/Home";
import Menu from "./pages/Menu/Menu";
import About from "./pages/About/About";
import Privacy_policy from "./pages/Privacy Policy/Privacy_policy";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={< Home/>}/>
                <Route path='/home' element={< Home/>}/>
                <Route path='/menu' element={<Menu/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/Privacy_policy' element={<Privacy_policy/>}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
