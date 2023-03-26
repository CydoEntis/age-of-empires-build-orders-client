import React, { ReactNode } from "react";

type Props = {
  label: string;
  type: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  icon: ReactNode;
};

function Input({ label, type, placeholder, onChange, icon }: Props) {
  return (
    <div className="field">
      <label className="label has-text-light">{label}</label>
      <div className="control has-icons-left">
        <input
          className="input is-primary has-background-dark has-text-light"
          type={type}
          placeholder={placeholder}
          onChange={onChange}
        />
        <span className="icon is-small is-left">
          {icon}
        </span>
      </div>
    </div>
  );
}

export default Input;
