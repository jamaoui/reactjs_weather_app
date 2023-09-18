import React from 'react';
import {motion} from "framer-motion";

function Thermometer({width = '50px', height = '50px', color = '#ff0'}) {
    return (
        <>
            <svg
                fill={color}
                width={width}
                height={height}
                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <motion.path
                    stroke={'darkorange'}
                    strokeWidth={0.5}
                    initial={{
                        pathLength: 0,
                        opacity: 0,
                    }}
                    animate={{
                        pathLength: 1,
                        opacity: 1,
                    }}
                    transition={{
                        duration:5, ease: 'easeInOut',
                    }}
                    d="M8,5H4A1,1,0,0,1,4,3H8A1,1,0,0,1,8,5ZM8,7H6A1,1,0,0,0,6,9H8A1,1,0,0,0,8,7Zm13,9a6,6,0,1,1-9-5.191V5a3,3,0,0,1,6,0v5.809A5.992,5.992,0,0,1,21,16Zm-3,0a2.99,2.99,0,0,0-2-2.816V5a1,1,0,0,0-2,0v8.184A2.995,2.995,0,1,0,18,16Z"/>
            </svg>
        </>
    );
}

export default Thermometer;