import React, { useState } from "react";
import { animated, useSprings, useSpring, to } from "react-spring";


import Arrow from '../images/home/introhome/arrow.svg';
const lines = [
    "M107.5,125.879H93.439a.439.439,0,1,1,0-.879H107.5a.439.439,0,0,1,0,.879Z",
    "M156.2,125.879H94.915c-1.058,0-1.915-.2-1.915-.439s.857-.439,1.915-.439H156.2c1.058,0,1.915.2,1.915.439S157.254,125.879,156.2,125.879Z"
]

function Icon() {

    const [hover, setHover] = useState(0);
    console.log(hover)
    const animationLines = useSpring({
        line: hover ? lines[0] : lines[1]
    });


    return (
        <>
            <button
                type="button"
                onMouseOver={() => {
                    setHover(true)
                }}
                onMouseLeave={() => {
                    setHover(false)
                }}
            >
                Toggle animation
            </button>

            <svg width="240"
                height="240"
                viewBox="0 0 240 240">
                <circle cx="120" cy="120" r="120" fill="#FFCD4C" />
                <animated.path
                    d="M192 135.5C188 135.5 178.5 126 164.5 123C150.5 120 141 125.5 137 123C133 120.5 152 99.0001 172 104.5C192 110 196 135.5 192 135.5Z"
                    fill="#664300"
                />
                <animated.path
                    d="M48.3939 135.897C52.3939 135.897 61.8939 126.397 75.8939 123.397C89.8939 120.397 99.394 125.896 103.394 123.397C107.394 120.897 88.3939 99.3966 68.3939 104.897C48.3939 110.397 44.3939 135.897 48.3939 135.897Z"
                    fill="#664300"
                />

                <animated.path fill="#00323" style={{
                    width: [0%, 100%]
                }}>
                    <line x1="0" y1="0" x2="50" y2="0" style="stroke:rgb(255,0,0);stroke-width:2" />
                </animated.path>

                <path id="Path_7" d="M170.694,94.745a.425.425,0,0,1-.311-.137.487.487,0,0,1,0-.659l6.316-6.7-6.316-6.7a.486.486,0,0,1,0-.659.421.421,0,0,1,.621,0l6.937,7.363L171,94.608A.425.425,0,0,1,170.694,94.745Z" transform="translate(-170.255 -79.745)" />
            </svg>

        </>
    );
}

export default Icon;