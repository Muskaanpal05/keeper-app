import React from "react";

function Footer() {
    const date = new Date();
    const setYear = date.getFullYear();

    return ( < footer > < p > Copyright© { setYear } < /p></footer > );

}

export default Footer;