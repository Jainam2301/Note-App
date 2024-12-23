import React from "react";

export default function Footer(){
    return(
        <footer>
            <p>copyright &copy; {(new Date().getFullYear())}</p>
        </footer>
    );
}