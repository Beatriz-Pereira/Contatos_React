import React from "react";
import { Link } from "react-router-dom";

export default function Todo(props) {
  return <Link to={props.link}><button className="btnAction">{props.name}</button></Link>
}