import React from "react";

const MyButton: React.FC = () => {
    return (
        <button onClick={() => window.alert("Button pressed")}>Klick Me</button>
    )
}

export default MyButton;