import { Props } from "./interface"
import "./key.css"

export default function Key(props: Props) {
    return (
        <div className="key">
            <label>{props.campo}</label>
            <div>{props.valor}</div>
        </div>
    )
}