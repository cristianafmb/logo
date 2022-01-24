import React, { useState } from "react";
import { animated, useSpring } from "react-spring";


function App() {
    const [show2, setShow2] = useState(false);

    const line = useSpring({
        transform: show2
            ? "translate(10px, 128px) rotate(0deg) scale(1.5)"
            : "translate(18px, 128px) rotate(0deg) scale(1)",
    });

    const arrowhead = useSpring({
        transform: show2
            ? "translate(-45px, 42px) rotate(0deg)"
            : "translate(-81px, 42px) rotate(0deg) "

    });


    return (
        <div className="App">


            <svg
                viewBox="0 0 210 297"
                height="50px"
                width="250px"
                onMouseOver={() => setShow2(true)}
                onMouseLeave={() => setShow2(false)}
                style={{ transform: 'rotate(180deg)', border: '1px solid blue' }}

            >
                <g id="Grupo_9" >
                    <animated.path height="3" width="100" style={arrowhead} d="M170.694,94.745a.425.425,0,0,1-.311-.137.487.487,0,0,1,0-.659l6.316-6.7-6.316-6.7a.486.486,0,0,1,0-.659.421.421,0,0,1,.621,0l6.937,7.363L171,94.608A.425.425,0,0,1,170.694,94.745Z" fill="#957841" />
                    <animated.rect width="60" height="1" fill="#957841" style={line} />
                </g>
            </svg>


        </div>
    );
}
export default App;