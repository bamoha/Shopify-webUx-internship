import React from "react";

const PageHead = ({ title }) => {
    return (
        <h1 className="uppercase page-title tracking-wide block text-3xl font-semibold">
            {title}
        </h1>
    );
}

export default PageHead;
