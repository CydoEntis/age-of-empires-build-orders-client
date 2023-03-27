import React from "react";
import Input from "./Input";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import Button from "./Button";

type Props = {
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    children: React.ReactNode;
};

function Form({onSubmit, children}: Props) {
  return (
    <form action="" className="" onSubmit={onSubmit}>
        {children}
    </form>
  );
}

export default Form;
