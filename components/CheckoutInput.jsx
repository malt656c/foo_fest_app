import styles from "./CheckoutInput.module.css";
export default function CheckoutInput(props) {
  return (
    <div>
      <label htmlFor={props.name}>{props.label}</label>
      <input type={props.type ? props.type : "text"} name={props.name} id={props.name} required={props.required?true:false}/>
    </div>
  );
}
