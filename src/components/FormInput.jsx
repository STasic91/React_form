import "./formInput.css"
import { useState } from "react";
const FormInput = (props) => {
    const [focused, setFocused] = useState(false)
    const handleFocus = (e) => {
        setFocused(true);
    }
    const {label, errorMessage, onChange, id, ...inputProps} = props
    return (
        <div className="formInput">
        <label>{label}</label>
        <input {...inputProps} onChange={onChange} onFocus={() => inputProps.name === "confirmPassword" && setFocused(true)}  onBlur={handleFocus} focused={focused.toString()}/>
        <span>{errorMessage}</span>
        </div>
    )
}

export default FormInput;