import { useState, useEffect } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

   // below side effect - if any email is already present-- and it works only for once
   useEffect(() => {

    let getEmail = localStorage.getItem("email");
    if(getEmail){
      setEmail(getEmail)
    }
  }, [ ])
  //useEffect to save email in localstorage
  // this side effect is working whenever email is updated
  useEffect(() => {
    localStorage.setItem("email", email);
  }, [email])
 
    

  return (
    
    
    <>
      <h1>Login to the Portal!</h1>
      <h3>Login</h3>
      <input
        placeholder="Enter Email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <br />
      <input
        placeholder="Enter Password"
        type="password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <br />
      <button
        onClick={() => {
          console.log("Form submitted")
        }}
      >
        Submit
      </button>
      <br />
    </>
  )
}