import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
    return (
        <Typewriter
            options={{
                strings: ["Frontend Developer", "ReactJS Developer","Build Website","Let’s shake hands with me!"],
                autoStart: true,
                loop: true,
                deleteSpeed: 20,
            }}
        />
    );
}

export default Type;
