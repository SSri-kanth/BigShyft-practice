import React from "react";
import { RightHeaderConfig } from "./RightHeader.config";
import PropTypes from "prop-types";

const RightHeader = ({currentPage, changePage}) => {
    const handleChange = () => {
        changePage(currentPage);
    }
    return (
        <div>
            <h1>{RightHeaderConfig[currentPage].type}</h1>
            <p>{RightHeaderConfig[currentPage].title}</p>
            <div>
                <button onClick={handleChange}>{RightHeaderConfig[currentPage].cta}</button>
            </div>
        </div>
    );
}

RightHeader.propTypes = {
    currentPage: PropTypes.string,
    changePage: PropTypes.func
}

export default RightHeader;
