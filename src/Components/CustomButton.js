import React from "react"

export default function CustomButton({ link, active, text, new_id }) {
    let temp_style = null;
    let temp_class = null;
    // console.log(active);
    console.log(new_id);
    let new_link='/comments/'+new_id;
    console.log(new_link);
    if (active) {
        temp_style = { 'color': '#8B5CF6' };
    }
    else {
        temp_style = { 'color': 'grey' };
    }
    if (active) {
        temp_class = 'btn btn-outline-light';
    }
    else {
        temp_class = 'btn disabled text-muted';
    }

    return (
        <a href={new_link} className={temp_class} style={temp_style}>
            {text}
        </a>
    );
}