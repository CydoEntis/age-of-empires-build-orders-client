import React from "react";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import Button from "../components/Button";
import Form from "../components/Form";
import Input from "../components/Input";

type Props = {};

function LoginForm({}: Props) {
  return (
    <div>
      <Form onSubmit={() => {}}>
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

export default LoginForm;
