import React from "react";


const Contract = () => {
    return (
        <h1>"Contracts!"</h1>
    )
}

const comparisonFn = function (prevProps, nextProps) {
    return prevProps.location.pathname === nextProps.location.pathname;
};

export default React.memo(Contract, comparisonFn);
