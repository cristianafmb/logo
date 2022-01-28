import React, { useState } from "react";
import { animated, useSpring } from "react-spring";
import "bootstrap/dist/css/bootstrap.min.css"

function Arrow({ id, rot, text, blog, big }) {
    const [show2, setShow2] = useState(false);
    const [showText, setShowText] = useState(false);

    const line = useSpring({
        transform: show2
            ? "translate(18px, 128px) scale(1.8)"
            : "translate(18px, 128px) scale(1)",
    });

    const arrowhead = useSpring({
        transform:
            show2
                ? "translate(-40px, 42px)"
                : "translate(-90px, 42px)"
    });

    const textStyleLeft = useSpring({
        opacity: showText ? 1 : 0,
        marginLeft: "3%",
        marginTop: "32%",
        transform: showText ? "scaleY(1)" : "scaleY(0)",
        transformOrigin: "bottom",
        transition: "transform 0.05s ease",
        position: "absolute"
    })

    const textStyleRigth = useSpring({
        opacity: showText ? 1 : 0,
        marginLeft: "9%",
        marginTop: "1%",
        transform: showText ? "scaleY(1)" : "scaleY(0)",
        transformOrigin: "bottom",
        transition: "transform 0.05s ease",
        position: "absolute"
    })

    const textStyleRigthBlog = useSpring({
        opacity: showText ? 1 : 0,
        marginLeft: "9%",
        marginTop: "-5vh",
        transform: showText ? "scaleY(1)" : "scaleY(0)",
        transformOrigin: "bottom",
        transition: "transform 0.05s ease",
        position: "absolute"
    })
    
    if (big) {
        return (
            <>
                <div>
                    <p className="details-small oOblique arrow-right" style={{ opacity: 1, marginRight: "15%", marginTop: "-3%", position: "absolute", right: "0"}}>{text}</p>
                    <svg
                        viewBox="0 0 210 297"
                        height="250px"
                        width="250px"
                        id={id}
                    >
                        <g id="Grupo_9" >
                            <path height="3" width="100" style={{ transform: "translate(-43px, -1px)" }} d="M170.694,94.745a.425.425,0,0,1-.311-.137.487.487,0,0,1,0-.659l6.316-6.7-6.316-6.7a.486.486,0,0,1,0-.659.421.421,0,0,1,.621,0l6.937,7.363L171,94.608A.425.425,0,0,1,170.694,94.745Z" fill="#957841" />
                            <rect width="140" height="1" fill="#957841" style={{  transform: "translate(-20px, 85px) scale(1)" }} />
                        </g>
                    </svg>
                </div>
            </>
        )
    }

    return (
        <>
            {rot ? <>
                <div>
                    <animated.p className="details-small oOblique" style={textStyleLeft}>{text}</animated.p>
                    <svg
                        viewBox="0 0 210 297"
                        height="250px"
                        width="250px"
                        style={{ transform: 'rotate(180deg)' }}
                        onMouseOver={() => {
                            setShow2(true)
                            setShowText(true)
                        }}
                        onMouseLeave={() => {
                            setShow2(false)
                            setShowText(false)
                        }}
                        id={id}
                    >
                        <g id="Grupo_9" >
                            <animated.path height="3" width="100" style={arrowhead} d="M170.694,94.745a.425.425,0,0,1-.311-.137.487.487,0,0,1,0-.659l6.316-6.7-6.316-6.7a.486.486,0,0,1,0-.659.421.421,0,0,1,.621,0l6.937,7.363L171,94.608A.425.425,0,0,1,170.694,94.745Z" fill="#957841" />
                            <animated.rect width="60" height="1" fill="#957841" style={line} />
                        </g>
                    </svg>
                </div>

            </>
                :
                <>
                    <div>
                        <animated.p className="details-small oOblique arrow-right" style={blog ? textStyleRigthBlog : textStyleRigth}>{text}</animated.p>
                        <svg
                            viewBox="0 0 210 297"
                            height="250px"
                            width="250px"
                            onMouseOver={() => {
                                setShow2(true)
                                setShowText(true)
                            }}
                            onMouseLeave={() => {
                                setShow2(false)
                                setShowText(false)
                            }}
                            id={id}
                        >
                            <g id="Grupo_9" >
                                <animated.path height="3" width="100" style={arrowhead} d="M170.694,94.745a.425.425,0,0,1-.311-.137.487.487,0,0,1,0-.659l6.316-6.7-6.316-6.7a.486.486,0,0,1,0-.659.421.421,0,0,1,.621,0l6.937,7.363L171,94.608A.425.425,0,0,1,170.694,94.745Z" fill="#957841" />
                                <animated.rect width="60" height="1" fill="#957841" style={line} />
                            </g>
                        </svg>
                    </div>
                </>
            }

        </>
    );
}
export default Arrow;