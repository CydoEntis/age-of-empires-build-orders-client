import React from "react";
import Input from "./Input";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import Button from "./Button";
type Props = {};

function Form({}: Props) {
  return (
    <form action="" className="">
      <Input label="Username" type="text" placeholder="username" onChange={() => {}} icon={<FaUser />}/>
      <Input label="Email" type="email" placeholder="email@" onChange={() => {}} icon={<FaEnvelope />}/>
      <Input label="Password" type="password" placeholder="password" onChange={() => {}} icon={<FaLock />}/>

      <div className="field is-grouped">
        <Button className="is-primary"text="submit" onClick={() => {}}/>
        <Button className="is-danger"text="clear" onClick={() => {}}/>
      </div>
    </form>
  );
}

export default Form;
