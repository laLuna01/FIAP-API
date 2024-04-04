import Key from "../Key";
import { Props } from "./interface";
import "./person.css";

const Person = (props: Props) => {
    return (
        <>
            <div className={"person " + props.status}>
                <Key campo="Nome" valor={props.name}/>
                <Key campo="Endereço" valor={props.address}/>
                <Key campo="Telefone" valor={props.phone}/>
                <Key campo="Email" valor={props.email}/>
                <Key campo="Status" valor={props.status}/>
            </div>
        </>
    )    
}
export default Person;