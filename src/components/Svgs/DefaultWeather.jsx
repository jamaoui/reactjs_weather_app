import React from 'react';
import {SvgHoc} from "./SvgHoc";
import {motion} from "framer-motion";

function DefaultWeather({width, height, color, animations}) {
    const getColor = (value) => {
        if (color) {
            return '#fff';
        }
        switch (value) {
            case 'orange':
                return '#FFA726'
            case 'darkOrange':
                return '#EF6C00'
            case 'green':
                return '#229D91'
            default:
                return 'none'
        }

    }
    const fill = {
        fill: color
    }
    return (
        <>
            <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height}
                 viewBox="0 0 2048 2048" {...fill}>

                <g id="Layer_x0020_1">
                    <metadata id="CorelCorpID_0Corel-Layer"/>
                    <motion.g {...animations} id="_220506864">
                        <path fill={'#FFA726'} {...animations}
                                     d="M1048 864c-12,0 -21,-9 -21,-21 0,-12 9,-21 21,-21l211 0c12,0 21,9 21,21 0,12 -9,21 -21,21l-211 0z"/>
                        <circle fill={getColor('darkOrange')} cx="749" cy="845" r="256"/>
                        <path fill={getColor('green')}
                              d="M1313 801c82,0 158,30 219,78 60,48 105,115 127,190 41,31 73,70 96,115 24,47 37,101 37,160 0,97 -37,186 -98,250 -60,63 -144,102 -238,102l-731 0c-17,0 -23,0 -30,0 -49,1 -109,2 -151,-11 -56,-16 -103,-51 -136,-96 -33,-45 -52,-101 -52,-162 0,-15 1,-29 4,-43 11,-68 49,-127 100,-168 50,-41 114,-66 178,-66 4,0 7,0 11,0 8,-41 23,-80 45,-114 27,-41 63,-73 107,-91 42,-17 87,-20 129,-10 31,7 62,21 88,41 29,-48 68,-89 114,-120 53,-35 115,-56 183,-56z"/>
                        <path fill={getColor('green')}
                              d="M1786 1408c-12,72 -45,137 -93,186 -60,63 -144,102 -238,102l-731 0c-17,0 -23,0 -30,0 -49,1 -109,2 -151,-11 -56,-16 -103,-51 -136,-96 -33,-45 -52,-101 -52,-162 0,-7 0,-13 1,-19l1431 0z"/>
                        <path fill={getColor('orange')}
                              d="M731 336c0,-12 9,-21 21,-21 12,0 21,9 21,21l0 211c0,12 -9,21 -21,21 -12,0 -21,-9 -21,-21l0 -211z"/>
                        <path fill={getColor('orange')}
                              d="M379 499c-8,-8 -8,-22 0,-30 8,-8 22,-8 30,0l149 149c8,8 8,22 0,30 -8,8 -22,8 -30,0l-149 -149z"/>
                        <path fill={getColor('orange')}
                              d="M1096 470c8,-8 22,-8 30,0 8,8 8,22 0,30l-149 149c-8,8 -22,8 -30,0 -8,-8 -8,-22 0,-30l149 -149z"/>
                        <path fill={getColor('orange')}
                              d="M507 1030c8,-8 22,-8 30,0 8,8 8,22 0,30l-149 149c-8,8 -22,8 -30,0 -8,-8 -8,-22 0,-30l149 -149z"/>
                        <path fill={getColor('orange')}
                              d="M245 864c-12,0 -21,-9 -21,-21 0,-12 9,-21 21,-21l211 0c12,0 21,9 21,21 0,12 -9,21 -21,21l-211 0z"/>
                    </motion.g>
                    <rect fill={'none'} width="2048" height="2048"/>
                </g>
            </svg>

        </>
    );
}

export default SvgHoc(DefaultWeather);