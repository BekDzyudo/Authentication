import React, { useContext, useRef } from "react";
import { AuthContext } from "../context/Auth";

export function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();

  const { setToken } = useContext(AuthContext);
  function onSubmit(e) {
    e.preventDefault();
    setToken({
      email: emailRef.current.value,
      password: passwordRef.current.value,
    });
  }
  return (
    <form onSubmit={onSubmit}>
      <input ref={emailRef} type="text" placeholder="email" />
      <input ref={passwordRef} type="text" placeholder="password" />
      <button>Submit</button>
    </form>
  );
}
