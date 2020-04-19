import React from "react";

const MarketPlacePlain = (props) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="23"
            fill="none"
            viewBox="0 0 25 23"
        >
            <path
                fill={props.fill}
                d="M9 20.75v-5.8c0-.526.424-.95.95-.95h4.09c.526 0 .95.424.95.95v5.8h4.98a.78.78 0 00.78-.78v-8.264a2.18 2.18 0 01-.35-.256l-.41-.37a.465.465 0 00-.64 0l-.17.15c-.55.49-1.25.76-1.97.76h-.23c-.71 0-1.41-.26-1.96-.75l-.19-.17a.465.465 0 00-.64 0l-.19.17c-.55.49-1.25.76-1.96.76h-.14c-.71 0-1.4-.26-1.94-.74l-.22-.19a.465.465 0 00-.64 0l-.18.16c-.55.49-1.25.76-1.97.76h-.18c-.72 0-1.41-.26-1.96-.75l-.2-.17a.453.453 0 00-.63 0l-.48.43a2.002 2.002 0 01-.24.183v8.287c0 .43.348.78.78.78H9zm13.25-8.795v8.015a2.28 2.28 0 01-2.28 2.28H4.04a2.28 2.28 0 01-2.28-2.28v-7.989C.767 11.842 0 10.943 0 9.85V7.5c0-.28.22-.5.5-.5h23.01c.28 0 .5.22.5.5v2.18c0 1.124-.756 2.063-1.76 2.275zM22.96 6H1.03c-.35 0-.59-.36-.46-.69L2.39.82C2.58.33 3.04 0 3.56 0h16.87c.52 0 .98.33 1.17.83l1.82 4.48c.14.33-.11.69-.46.69z"
            ></path>
        </svg>
    );
}

export default MarketPlacePlain;