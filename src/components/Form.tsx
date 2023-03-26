import React from "react";
import Input from "./Input";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
type Props = {};

function Form({}: Props) {
  return (
    <form action="" className="">
      <Input label="Username" type="text" placeholder="username" onChange={() => {}} />
      <Input label="Email" type="email" placeholder="email@" onChange={() => {}} />
      <Input label="Password" type="password" placeholder="password" onChange={() => {}} />

      <div className="field is-grouped">
        <div className="control">
          <button className="button is-link">Submit</button>
        </div>
        <div className="control">
          <button className="button is-link is-light">Cancel</button>
        </div>
      </div>
    </form>
  );
}

export default Form;
