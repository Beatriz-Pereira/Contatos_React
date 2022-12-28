import List from "../List";

function Contacts() {
    const contatos = [
        {key:"0", Name: "Marcos Souza Mota", Email:"msouza@email.com", Telefone:"(11) 12345-4564", IconType:"M"},
        {key:"1", Name: "Carolina Medeiros", Email:"cmedeireos@email.com", Telefone:"(11) 58965-4154", IconType:"F"},
        {key:"2", Name: "Evangeline Siqueira", Email:"esiqueira@email.com", Telefone:"(11) 15459-7845", IconType:"F"},
        {key:"3", Name: "Felipe Santana", Email:"fsantana@email.com", Telefone:"(11) 15895-4264", IconType:"M"},
      
    ];

    return <div>
        <List contatos = {contatos}></List>
    </div>
}

export default Contacts