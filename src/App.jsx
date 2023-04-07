
import { useRef , useState} from 'react';
import './App.css';
import FormInput from './components/FormInput';

const App = () => {
  const [values,setValues]=useState({
    username:"",
    email:"",
    password:"",
    confirmPasword:""
  });
  
  const inputs = [
    {
      id:1,
      name: "username",
      type:"text",
      placeholder:"Username",
      errorMessage: "Username should be 3-16 characters and should not include any special character!",
      label:"Username:",
      required: true
    },
    {
      id:2,
      name: "email",
      type:"text",
      placeholder:"Email",
      errorMessage: "It should be a valid email address!",
      label:"Email:",
      required: true
    },
    
    {
      id:3,
      name: "password",
      type:"password",
      placeholder:"Password",
      errorMessage: "Password should be 8-10 caracters and include al least 1 letter, 1 number and 1 special caracter.",
      label:"Password:",
      required: true
    },
    {
      id:4,
      name: "confirmPassword",
      type:"password",
      placeholder:"Confirm password",
      errorMessage: "Passwords don´t mach.",
      label:"Confirm Password:",
      pattern: values.password,
      required: true
    },
    {
      id:5,
      name: "date",
      type:"date",
      placeholder:"Date",
      label:"Date:"
    }

  ]

  const handleSubmit =(e)=>{
    e.preventDefault();
    
  }
  const onChange = (e) => {
    setValues ({...values, [e.target.name]: e.target.value})
  }
  console.log(values)
  return (
    <div className="app">
        <form onSubmit={handleSubmit}>
          <h1>Register</h1>
          {inputs.map((input)=>(
            <FormInput key={input.id}
             {...input} 
             value={values[input.name]}
             onChange ={onChange}/>
          ))}
          <button>Submit</button>
        </form>
    </div>)
};

export default App;
