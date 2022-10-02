import React from "react";

function Links(props){
    return(
        <div id="links">
            {props.linkedin === undefined ? <h3>Links</h3> : null}
            {props.linkedin === undefined ? <a href={props.github}>{props.github}</a> : <a href={props.linkedin}>{props.linkedin}</a>}
        </div>
    )
}

export default Links