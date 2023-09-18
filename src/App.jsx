import './App.module.scss';
import React from 'react';
import {SearchBar} from "./components/SearchBar/SearchBar";
import {Wallpaper} from "./components/Wallpaper/Wallpaper";
import {Weather} from "./components/Weather/Weather";
import {Container} from "react-bootstrap";
import {Provider} from "react-redux";
import {store} from "./app/store";
import {motion} from "framer-motion";

function App() {
    return (
        <div className="App">
            <Provider store={store}>
                <Wallpaper/>
                <motion.div
                    className={'container'}
                    initial={{
                        x: '100vw'
                    }}
                    animate={{
                        x: 0
                    }}
                    transition={{
                        duration: 1,
                        ease: 'easeInOut'
                    }}>
                    <SearchBar/>
                    <Weather/>
                </motion.div>
            </Provider>
        </div>
    );
}

export default App;
