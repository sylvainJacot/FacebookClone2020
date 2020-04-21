// https://www.npmjs.com/package/react-icomoon

import React from "react";
import IcoMoon from "react-icomoon";
const iconSet = require("../../media/icons/facebook-iconmoon/selection");


const Icons = ({ ...props }) => {
    return <IcoMoon iconSet={iconSet} {...props} />;
};

export default Icons;