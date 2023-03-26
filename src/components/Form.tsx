import React from "react";
import Input from "./Input";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
type Props = {};

function Form({}: Props) {
  return (
    <form action="" className="">
      <Input label="Username" type="text" placeholder="username" onChange={() => {}} icon={<FaUser />}/>
      <Input label="Email" type="email" placeholder="email@" onChange={() => {}} icon={<FaEnvelope />}/>
      <Input label="Password" type="password" placeholder="password" onChange={() => {}} icon={<FaLock />}/>

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
