import React from "react";
import ServiceTreeTable from "./ServiceTreeTable";

const Service = () => {
    return (
        // <h1>Services!</h1>
        <ServiceTreeTable/>
    )
}

const comparisonFn = function (prevProps, nextProps) {
    return prevProps.location.pathname === nextProps.location.pathname;
};

export default React.memo(Service, comparisonFn);
