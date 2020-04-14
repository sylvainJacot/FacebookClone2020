import React from "react";

const WatchIcon = (props) => {
    return (
        <svg
            width="24"
            height="24"
            fill={props.fillFull}
            viewBox="0 0 24 24"
        >
            <path
                fill={props.fillBorder}
                d="M6.75 23.25a.75.75 0 010-1.5h10.5a.75.75 0 010 1.5H6.75zm8.413-12.404l-5.108 3.077A.696.696 0 019 13.327V7.172a.696.696 0 011.055-.596l5.108 3.078a.696.696 0 010 1.192zm4.587 7.404A2.25 2.25 0 0022 16V4.5a2.25 2.25 0 00-2.25-2.25H4.25A2.25 2.25 0 002 4.5V16a2.25 2.25 0 002.25 2.25h15.5zm0 1.5H4.25A3.75 3.75 0 01.5 16V4.5A3.75 3.75 0 014.25.75h15.5A3.75 3.75 0 0123.5 4.5V16a3.75 3.75 0 01-3.75 3.75z"
            ></path>
        </svg>
    );
}

export default WatchIcon;
