import React from "react";

type Props = {
  label: string;
  type: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

function Input({ label, type, placeholder, onChange }: Props) {
  return (
    <div className="field">
      <label className="label has-text-light">{label}</label>
      <div className="control">
        <input
          className="input is-primary has-background-dark has-text-light"
          type={type}
          placeholder={placeholder}
          onChange={onChange}
        />
        <span className="icon is-small is-left">
          <i className="fas fa-envelope"></i>
        </span>
        <span className="icon is-small is-right">
          <i className="fas fa-check"></i>
        </span>
      </div>
    </div>
  );
}

export default Input;
