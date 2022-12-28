import Input from "../Input";
import Button from "../Button";

function NewContact() {
    const Inputs = [
        {id:"nome", name:"nome", placeholder:"Nome"},
        {id:"phone", name:"phone", placeholder:"Telefone"},
        {id:"email", name:"email", placeholder:"Email"}
      ];
    
    const formConstructor = Inputs.map((btnsAction) => (
        <Input key={btnsAction.id} type="text" name={btnsAction.name} id={btnsAction.id} title={btnsAction.placeholder}/>
    ));
      
    return <form>
        {formConstructor}
        <Button key="saveContact" name="Salvar" />
    </form>
}

export default NewContact