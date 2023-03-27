import React from "react";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import Button from "../components/Button";
import Form from "../components/Form";
import Input from "../components/Input";

type Props = {};

function RegisterForm({}: Props) {
  return (
    <div className="form has-background-grey-darker column box is-one-third is-offset-one-third p-6">
      <div className="mb-5 has-text-white">
        <h1 className="is-size-2 has-text-info">Create An Account</h1>
        <p className="is-size-7 has-text-info">
          Start creating your own build orders
        </p>
      </div>
      <Form onSubmit={() => {}}>
        <Input
          label="Username"
          type="text"
          placeholder="username"
          onChange={() => {}}
          icon={<FaUser />}
        />
        <Input
          label="Email"
          type="email"
          placeholder="email@"
          onChange={() => {}}
          icon={<FaEnvelope />}
        />
        <Input
          label="Password"
          type="password"
          placeholder="password"
          onChange={() => {}}
          icon={<FaLock />}
        />

        <div className="field is-grouped">
          <Button className="is-primary" text="submit" onClick={() => {}} />
          <Button className="is-danger" text="clear" onClick={() => {}} />
        </div>
      </Form>
    </div>
  );
}

export default RegisterForm;
