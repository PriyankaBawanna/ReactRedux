import React, { useState } from "react";

function Input(props: any) {
  const { placeholder, type, name, value, onChange } = props;
  const [error, setError] = useState(false);

  return (
    <div>
      <input
        placeholder={placeholder}
        className="input"
        type={type}
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
export default Input;
