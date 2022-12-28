import React from "react";
import woman from '../img/woman.JPG'
import men from '../img/men.JPG'

export default function List(props) {

  const lista = props.contatos.map((contato) => (
    <li key = {contato.key}>
      <img className = "contact_icon" src= {contato.IconType === "F" ? woman : men}></img>
      <div className="contact_info">
       <strong><p>{contato.Name}</p></strong> 
       <p className="text_info">{contato.Email}</p>
       <p className="text_info">{contato.Telefone}</p>
      </div> 
    </li>
  ));

  return <div className="list_group">
            <ul>
                {lista}
            </ul>
    </div>
}