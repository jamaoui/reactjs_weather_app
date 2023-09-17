import './App.module.scss';
import React from 'react';
import {SearchBar} from "./components/SearchBar/SearchBar";
import {Wallpaper} from "./components/Wallpaper/Wallpaper";
import {Weather} from "./components/Weather/Weather";
import {Container} from "react-bootstrap";

function App() {
    return (
        <div className="App">
            <Wallpaper/>
            <Container>
                <SearchBar/>
                <Weather/>
            </Container>
        </div>
    );
}

export default App;
