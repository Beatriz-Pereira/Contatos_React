import React from "react";

export default function Input(props) {
  const nameClass = "input_" + props.type;
  return <div className="form_input">
            <label className="input_label">{props.title}
            <input className={nameClass} type={props.type} id={props.id} name={props.name} placeholder = {props.placeholder}></input>
            </label>
    </div>
}