import React from "react";

const Helmet = (props) => {
    document.title = "HEAL'N'GLOW - " + props.title;
    return<div>{props.children}</div>
};

export default Helmet;